export function Runner({ label, color, x, y }: { label: string; color: string; x: number; y: number }) {
  const clamped = Math.min(1, Math.max(0, x));
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 h-0 w-0"
      style={{ left: `calc(${clamped * 100}% + 12px)`, top: `calc(50% + ${y}px)` }}
    >
      <div className={`w-2 h-2 rounded-full ${color}`}/>
      <div className="text-[10px] text-neutral-600 text-center">{label}</div>
    </div>
  );
}