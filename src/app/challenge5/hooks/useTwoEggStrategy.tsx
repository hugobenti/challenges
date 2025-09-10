"use client";

import { useMemo, useState } from "react";

export type DropLog = {
  attempt: number;
  egg: 1 | 2;
  floor: number;
  broke: boolean;
};

function minKForTriangularCover(n: number) {
  let k = Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);
  while ((k * (k + 1)) / 2 < n) k++;
  return k;
}

function buildJumpFloors(k: number, nFloors: number) {
  const steps: number[] = [];
  let current = 0;
  for (let i = k; i >= 1; i--) {
    current += i;
    steps.push(Math.min(current, nFloors));
  }
  return [...new Set(steps)];
}

export function useTwoEggStrategy(initialFloors = 100) {
  const [nFloors, setNFloors] = useState(initialFloors);

  const optimalK = useMemo(() => minKForTriangularCover(nFloors), [nFloors]);
  const jumpFloors = useMemo(
    () => buildJumpFloors(optimalK, nFloors),
    [optimalK, nFloors]
  );

  // highest floor where the egg does NOT break
  const [criticalFloor, setCriticalFloor] = useState<number>(
    Math.floor(Math.random() * nFloors) + 1
  );

  // simulation state
  const [attempts, setAttempts] = useState(0);
  const [egg1Broken, setEgg1Broken] = useState(false);
  const [egg2Broken, setEgg2Broken] = useState(false);
  const [dropIndex, setDropIndex] = useState(0);
  const [prevSafeFloor, setPrevSafeFloor] = useState(0);
  const [currentFloor, setCurrentFloor] = useState(jumpFloors[0] ?? 1);
  const [searchLow, setSearchLow] = useState<number | null>(null);
  const [searchHigh, setSearchHigh] = useState<number | null>(null);
  const [foundFloor, setFoundFloor] = useState<number | null>(null);
  const [log, setLog] = useState<DropLog[]>([]);

  const worstCaseDrops = optimalK;

  const reset = (keepCritical = true) => {
    setAttempts(0);
    setEgg1Broken(false);
    setEgg2Broken(false);
    setDropIndex(0);
    setPrevSafeFloor(0);
    setCurrentFloor(jumpFloors[0] ?? 1);
    setSearchLow(null);
    setSearchHigh(null);
    setFoundFloor(null);
    setLog([]);
    if (!keepCritical) {
      setCriticalFloor(Math.floor(Math.random() * nFloors) + 1);
    }
  };

  const testDrop = (egg: 1 | 2, floor: number) => {
    const broke = floor > criticalFloor;
    setLog((l) => [...l, { attempt: attempts + 1, egg, floor, broke }]);
    setAttempts((a) => a + 1);
    return broke;
  };

  const step = () => {
    if (foundFloor !== null || egg2Broken) return;

    // Phase 1: planned decreasing jumps with egg 1
    if (!egg1Broken) {
      const floor = currentFloor;
      const broke = testDrop(1, floor);

      if (broke) {
        setEgg1Broken(true);
        setSearchLow(prevSafeFloor + 1);
        setSearchHigh(floor - 1);
        setCurrentFloor(prevSafeFloor + 1);
        if (prevSafeFloor + 1 > floor - 1) setFoundFloor(prevSafeFloor);
        return;
      } else {
        setPrevSafeFloor(floor);
        const nextIndex = dropIndex + 1;
        setDropIndex(nextIndex);

        if (nextIndex >= jumpFloors.length) {
          setFoundFloor(nFloors);
          return;
        }

        const nextPlanned = jumpFloors[nextIndex];
        if (nextPlanned <= floor) {
          const nextAbove = jumpFloors.find((f) => f > floor);
          if (nextAbove === undefined) {
            setFoundFloor(nFloors);
          } else {
            setCurrentFloor(nextAbove);
            setDropIndex(jumpFloors.indexOf(nextAbove));
          }
        } else {
          setCurrentFloor(nextPlanned);
        }
        return;
      }
    }

    // Phase 2: linear search with egg 2 in [searchLow..searchHigh]
    if (egg1Broken && searchLow !== null && searchHigh !== null) {
      if (searchLow > searchHigh) {
        setFoundFloor(searchHigh);
        return;
      }
      const floor = currentFloor;
      const broke = testDrop(2, floor);
      if (broke) {
        setEgg2Broken(true);
        setFoundFloor(floor - 1);
      } else {
        const next = floor + 1;
        if (next > searchHigh) setFoundFloor(floor);
        else setCurrentFloor(next);
      }
    }
  };

  const controlsDisabled = foundFloor !== null || egg2Broken;

  // keep state consistent when nFloors changes externally
  const applyFloors = (n: number) => {
    const bounded = Math.max(2, Math.min(500, Math.floor(n)));
    setNFloors(bounded);
    setCriticalFloor((prev) => Math.max(1, Math.min(bounded, prev)));
    // allow React to recalc jumpFloors before resetting
    setTimeout(() => reset(true), 0);
  };

  return {
    // state
    nFloors,
    optimalK,
    jumpFloors,
    criticalFloor,
    attempts,
    egg1Broken,
    egg2Broken,
    dropIndex,
    prevSafeFloor,
    currentFloor,
    searchLow,
    searchHigh,
    foundFloor,
    log,

    // derived
    worstCaseDrops,
    controlsDisabled,

    // actions
    step,
    reset,
    setCriticalFloor,
    setCurrentFloor,
    applyFloors,
  };
}
