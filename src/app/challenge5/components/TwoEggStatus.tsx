"use client";

type Props = {
  attempts: number;
  egg1Broken: boolean;
  egg2Broken: boolean;
  currentFloor: number | string;
  searchLow: number | null;
  searchHigh: number | null;
  foundFloor: number | null;
  worstCaseDrops: number;
  optimalK: number;
};

export default function TwoEggStatus({
  attempts,
  egg1Broken,
  egg2Broken,
  currentFloor,
  searchLow,
  searchHigh,
  foundFloor,
  worstCaseDrops,
  optimalK,
}: Props) {
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-700">
          Optimal worst case: <b className="ml-1">{worstCaseDrops}</b> drops
        </span>
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-700">
          Strategy jumps: {optimalK}, {optimalK - 1}, …, 1
        </span>
      </div>

      <div className="rounded-2xl border p-4">
        <h3 className="text-sm font-bold text-slate-800 mb-2">Status</h3>
        <ul className="space-y-1 text-sm">
          <li>
            Attempts: <span className="font-semibold text-slate-900">{attempts}</span>
          </li>
          <li>
            Egg 1:{" "}
            <span className={egg1Broken ? "text-rose-600 font-semibold" : "text-emerald-700 font-semibold"}>
              {egg1Broken ? "Broken" : "Intact"}
            </span>
          </li>
          <li>
            Egg 2:{" "}
            <span className={egg2Broken ? "text-rose-600 font-semibold" : "text-emerald-700 font-semibold"}>
              {egg2Broken ? "Broken" : "Intact"}
            </span>
          </li>
          <li>
            Current floor to drop:{" "}
            <span className="font-semibold text-slate-900">{foundFloor !== null ? "—" : currentFloor}</span>
          </li>
          {searchLow !== null && searchHigh !== null && (
            <li>
              Linear search range: <span className="font-semibold">[{searchLow} .. {searchHigh}]</span>
            </li>
          )}
          <li>
            Result: <span className="font-semibold">{foundFloor === null ? "—" : `${foundFloor}`}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
