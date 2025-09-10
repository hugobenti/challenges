"use client";

import { useTwoEggStrategy } from "./hooks/useTwoEggStrategy";
import TwoEggSettings from "./components/TwoEggSettings";
import TwoEggStatus from "./components/TwoEggStatus";
import TwoEggControls from "./components/TwoEggControls";
import TwoEggLog from "./components/TwoEggLog";

export default function Challenge6() {
  const s = useTwoEggStrategy(100);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Two Eggs Problem – 100 Floors
        </h1>

        <p className="text-sm font-medium text-slate-700 mb-6">
          A building has 100 floors. One of the floors is the highest floor an
          egg can be dropped from without breaking. If dropped above that floor,
          it breaks; at or below, it survives. With <b>two eggs</b>, find that
          highest safe floor minimizing worst-case drops.
        </p>

        <TwoEggStatus
          attempts={s.attempts}
          egg1Broken={s.egg1Broken}
          egg2Broken={s.egg2Broken}
          currentFloor={s.foundFloor !== null ? "—" : s.currentFloor}
          searchLow={s.searchLow}
          searchHigh={s.searchHigh}
          foundFloor={s.foundFloor}
          worstCaseDrops={s.worstCaseDrops}
          optimalK={s.optimalK}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-4">
          <TwoEggSettings
            nFloors={s.nFloors}
            optimalK={s.optimalK}
            criticalFloor={s.criticalFloor}
            applyFloors={s.applyFloors}
            setCriticalFloor={s.setCriticalFloor}
            onReset={s.reset}
          />

          <TwoEggControls
            step={s.step}
            controlsDisabled={s.controlsDisabled}
            egg1Broken={s.egg1Broken}
            foundFloor={s.foundFloor}
            jumpFloors={s.jumpFloors}
            currentFloor={s.currentFloor}
            nFloors={s.nFloors}
            setCurrentFloor={s.setCurrentFloor}
          />

          <div className="rounded-2xl border p-4">
            <h3 className="text-sm font-bold text-slate-800 mb-2">Notes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <b>Why 14?</b> Choose k such that k(k+1)/2 ≥ 100. The smallest k
              is 14, yielding jumps of 14, 13, 12, …, 1. In the worst case
              you’ll drop exactly 14 times.
            </p>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Intuition: you “budget” drops—after each safe jump with egg 1, you
              have fewer attempts left (13, 12, 11, …) which exactly covers the
              remaining floors with a linear scan using egg 2.
            </p>
          </div>
        </div>

        <TwoEggLog
          log={s.log}
          foundFloor={s.foundFloor}
          criticalFloor={s.criticalFloor}
          attempts={s.attempts}
        />
      </div>
    </div>
  );
}
