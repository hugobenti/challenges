export function Metric ({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-3">
      <div className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-neutral-900 tabular-nums">{value}</div>
    </div>
  );
}
