"use client";

type Props = {
  step: () => void;
  controlsDisabled: boolean;
  egg1Broken: boolean;
  foundFloor: number | null;
  jumpFloors: number[];
  currentFloor: number;
  nFloors: number;
  setCurrentFloor: (n: number) => void;
};

export default function TwoEggControls({
  step,
  controlsDisabled,
  egg1Broken,
  foundFloor,
  jumpFloors,
  currentFloor,
  nFloors,
  setCurrentFloor,
}: Props) {
  return (
    <div className="rounded-2xl border p-4">
      <h3 className="text-sm font-bold text-slate-800 mb-3">Controls</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={step}
          disabled={controlsDisabled}
          className={`rounded-lg px-3 py-2 text-xs font-semibold ${
            controlsDisabled
              ? "bg-slate-200 text-slate-500"
              : "bg-indigo-600 text-white hover:opacity-90"
          }`}
        >
          Drop egg
        </button>

        <button
          onClick={() => setCurrentFloor(Math.min(nFloors, currentFloor + 1))}
          disabled={foundFloor !== null || (!egg1Broken ? true : false)}
          className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
            foundFloor !== null || (!egg1Broken ? true : false)
              ? "text-slate-400 border-slate-200"
              : "hover:bg-slate-50"
          }`}
          title="(Manual) next floor in linear search"
        >
          +1 (linear)
        </button>

        <button
          onClick={() => {
            if (egg1Broken || foundFloor !== null) return;
            const next = jumpFloors.find((f) => f > currentFloor);
            if (next) setCurrentFloor(next);
          }}
          disabled={egg1Broken || foundFloor !== null}
          className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
            egg1Broken || foundFloor !== null
              ? "text-slate-400 border-slate-200"
              : "hover:bg-slate-50"
          }`}
          title="Jump to next planned floor (debug)"
        >
          Next planned jump
        </button>
      </div>

      <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        The optimal plan drops the first egg at floors:{" "}
        <span className="font-mono">{jumpFloors.join(", ")}</span>. When it breaks,
        switch to the second egg and check linearly from the last safe floor + 1 up
        to just below the breaking floor.
      </p>
    </div>
  );
}
