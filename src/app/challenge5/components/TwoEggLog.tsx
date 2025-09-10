"use client";

import { DropLog } from "../hooks/useTwoEggStrategy";

type Props = {
  log: DropLog[];
  foundFloor: number | null;
  criticalFloor: number;
  attempts: number;
};

export default function TwoEggLog({ log, foundFloor, criticalFloor, attempts }: Props) {
  return (
    <div className="rounded-2xl border">
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="text-sm font-bold text-slate-800">Drop log</h3>
        <span className="text-xs text-slate-500">
          {log.length === 0 ? "No drops yet" : `${log.length} event(s)`}
        </span>
      </div>
      <div className="border-t">
        <div className="">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-slate-50 text-slate-700">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">#</th>
                <th className="px-3 py-2 text-left font-semibold">Egg</th>
                <th className="px-3 py-2 text-left font-semibold">Floor</th>
                <th className="px-3 py-2 text-left font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {log.map((e) => (
                <tr key={`${e.attempt}-${e.egg}-${e.floor}`} className="odd:bg-white even:bg-slate-50">
                  <td className="px-3 py-2">{e.attempt}</td>
                  <td className="px-3 py-2">{e.egg}</td>
                  <td className="px-3 py-2">{e.floor}</td>
                  <td className="px-3 py-2">
                    {e.broke ? (
                      <span className="text-rose-600 font-medium">Broke</span>
                    ) : (
                      <span className="text-emerald-700 font-medium">Safe</span>
                    )}
                  </td>
                </tr>
              ))}
              {log.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-slate-400">
                    Start by clicking <b>Drop egg</b>.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {foundFloor !== null && (
          <div className="px-4 py-3 border-t bg-emerald-50 text-emerald-900 text-sm">
            ✅ Highest safe floor found: <b className="font-semibold">{foundFloor}</b> (target was{" "}
            <b className="font-semibold">{criticalFloor}</b>). Attempts:{" "}
            <b className="font-semibold">{attempts}</b>.
          </div>
        )}
      </div>
    </div>
  );
}
