export function Runner({ label, color, x, y }: { label: string; color: string; x: number; y: number }) {
  const clamped = Math.min(1, Math.max(0, x));
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(${clamped * 100}% + 12px)`, top: `calc(50% + ${y}px)` }}
    >
      <div className="text-[10px] text-neutral-600 text-center">{label}</div>
    </div>
  );
}