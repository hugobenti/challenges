"use client";
import React from "react";
import { useZenoParadox } from "./hooks/useZenoParadox";
import { Metric } from "./components/Metric";
import { Track } from "./components/Track";
import { Runner } from "./components/Runner";
import { SegmentLine } from "./components/SegmentLine";

export default function Challenge5() {
  const { a, t, running, speed, setSpeed, canPlay, playStep, segments, gap } = useZenoParadox({});

  const last = segments[segments.length - 1];

function fmt(n: number) { return n.toFixed(15); }


  return (
    <div className="w-full max-w-3xl mx-auto p-6 text-neutral-900">
                  <p className="text-sm font-medium text-slate-800 mb-6">
Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
interface(we would like to see the paradox demonstrated).
      </p>
      {/* Simple controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={playStep}
          disabled={!canPlay}
          className={`px-4 py-2 rounded-xl text-sm font-medium shadow-sm ring-1 ring-inset disabled:opacity-50 disabled:cursor-not-allowed ${
            running
              ? "bg-neutral-900 text-white ring-neutral-900"
              : "bg-white text-neutral-900 ring-neutral-300"
          }`}
        >
          {running ? "Running…" : segments.length === 0 ? "Play step (start)" : "Play next step"}
        </button>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-neutral-600">Speed</span>
          <input
            type="range"
            className="w-48 accent-neutral-900"
            min={0.25}
            max={6}
            step={0.25}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span className="w-16 tabular-nums text-right text-neutral-600">{speed.toFixed(2)}×</span>
        </label>
      </div>

      {/* Animation frame with per-step trails */}
      <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <Track>
          {/* Per-phase trails — Achilles (top) and Tortoise (bottom) */}
          {segments.map((s, i) => (
            <React.Fragment key={i}>
              <SegmentLine y={-12} x0={s.a0} x1={s.a1} className="bg-rose-500/80" />
              <SegmentLine y={ 12} x0={s.t0} x1={s.t1} className="bg-emerald-500/80" />
            </React.Fragment>
          ))}

          {/* Current markers */}
          <Runner label="Achilles" color="bg-rose-600 border-rose-700" x={a} y={-18} />
          <Runner label="Tortoise" color="bg-emerald-600 border-emerald-700" x={t} y={ 18} />
        </Track>
      </div>

      {/* Bottom panel: per-step distances and remaining gap */}
      <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        {last ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Metric label="Step" value={`#${segments.length}`} />
            <Metric label="Achilles (this step)" value={`${fmt(last.a1 - last.a0)} units`} />
            <Metric label="Tortoise (this step)" value={`${fmt(last.t1 - last.t0)} units`} />
            <Metric label="Remaining gap" value={`${fmt(last.gapEnd)} units`} />
            <Metric label="Total gap now" value={`${fmt(gap)} units`} />
          </div>
        ) : (
          <p className="text-sm text-neutral-600">Click <span className="font-medium">Play step</span> to start the demonstration.</p>
        )}
        <p className="mt-2 text-xs text-neutral-500">
          Distances are normalized to the track length (0 to 1). Each step, Achilles reaches the tortoise's previous position;
          the gap shrinks geometrically. High precision decimals (15 places) show it never reaches exactly.
        </p>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
        <span className="inline-flex items-center gap-2"><span className="size-3 rounded-full bg-rose-600"/> Achilles</span>
        <span className="inline-flex items-center gap-2"><span className="size-3 rounded-full bg-emerald-600"/> Tortoise</span>
      </div>
    </div>
  );
}

