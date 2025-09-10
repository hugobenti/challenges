import { useEffect, useRef, useState } from "react";

export function useZenoParadox({
  vA = 1.0, // Achilles speed (units/sec)
  vT = 0.6, // Tortoise speed (units/sec) — must be < vA
  headStart = 0.25, // fraction of the track [0..1]
}: {
  vA?: number;
  vT?: number;
  headStart?: number;
}) {
  const eps = 1e-12;
  const vTClamped = Math.min(vT, vA - 0.01);

  // Current normalized positions (0..1)
  const [a, setA] = useState(0);
  const [t, setT] = useState(headStart);

  // Playback state and animation speed multiplier
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);

  // Trails per phase and per-step stats
  type Segment = {
    a0: number; a1: number; // Achilles
    t0: number; t1: number; // Tortoise
    dt: number;             // physical duration of the phase (seconds)
    gapStart: number;       // t0 - a0
    gapEnd: number;         // t1 - a1
  };
  const [segments, setSegments] = useState<Segment[]>([]);

  // RAF control per phase
  const rafRef = useRef<number | null>(null);

  // Reset when base parameters change
  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setA(0);
    setT(headStart);
    setSegments([]);
    setRunning(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vA, vTClamped, headStart]);

  const canPlay = !running && (t - a) > eps && t < 0.98;

  // Runs ONE phase. Automatically pauses at the end.
  const playStep = () => {
    if (!canPlay) return;
    setRunning(true);

    const a0 = a;
    const t0 = t;
    const gap = Math.max(t0 - a0, 0);
    const dt = Math.max(gap / vA, 1e-12); // time for Achilles to reach tortoise's previous spot
    const a1 = t0;                        // Achilles' new position at phase end
    const t1 = t0 + vTClamped * dt;       // tortoise advances during the same interval

    const animStart = performance.now();
    const durationMs = (dt / Math.max(speed, 0.001)) * 1000; // accelerate with speed

    const tick = () => {
      const p = Math.min(1, (performance.now() - animStart) / durationMs);
      // Linear interpolation within the phase
      setA(a0 + (a1 - a0) * p);
      setT(t0 + (t1 - t0) * p);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Phase completed — record segment and pause
        setSegments((arr) => [
          ...arr,
          { a0, a1, t0, t1, dt, gapStart: gap, gapEnd: Math.max(t1 - a1, 0) },
        ]);
        setRunning(false);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  return {
    a,
    t,
    running,
    speed,
    setSpeed,
    canPlay,
    playStep,
    segments,
    gap: Math.max(t - a, 0),
  };
}