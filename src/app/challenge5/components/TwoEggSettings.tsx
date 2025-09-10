"use client";

type Props = {
  nFloors: number;
  optimalK: number;
  criticalFloor: number;
  applyFloors: (n: number) => void;
  setCriticalFloor: (n: number) => void;
  onReset: (keepCritical: boolean) => void;
};

export default function TwoEggSettings({
  nFloors,
  optimalK,
  criticalFloor,
  applyFloors,
  setCriticalFloor,
  onReset,
}: Props) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="mb-3">
        <label className="block text-xs font-semibold text-slate-600 mb-1">
          Floors
        </label>
        <input
          type="number"
          min={2}
          max={500}
          value={nFloors}
          onChange={(e) => applyFloors(Number(e.target.value))}
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
        <p className="mt-1 text-[11px] text-slate-500">
          k = {optimalK} (since k(k+1)/2 ≥ {nFloors})
        </p>
      </div>

      <div className="mb-3">
        <label className="block text-xs font-semibold text-slate-600 mb-1">
          Critical floor (hidden target)
        </label>
        <input
          type="number"
          min={1}
          max={nFloors}
          value={criticalFloor}
          onChange={(e) => setCriticalFloor(Math.max(1, Math.min(nFloors, Number(e.target.value))))}
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
        <p className="mt-1 text-[11px] text-slate-500">
          Highest floor where the egg does <b>not</b> break.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onReset(true)}
          className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-90"
        >
          Reset
        </button>
        <button
          onClick={() => onReset(false)}
          className="rounded-lg border px-3 py-2 text-xs font-semibold hover:bg-slate-50"
        >
          Randomize target & reset
        </button>
      </div>
    </div>
  );
}
