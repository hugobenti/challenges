export function SegmentLine({
  x0,
  x1,
  y,
  className,
}: {
  x0: number;
  x1: number;
  y: number;
  className: string;
}) {
  function clamp01(n: number) {
    return Math.min(1, Math.max(0, n));
  }

  const L = clamp01(x0) * 100;
  const R = clamp01(x1) * 100;
  const left = Math.min(L, R);
  const width = Math.max(0, Math.abs(R - L));
  return (
    <div
      className={`absolute h-1 rounded-full ${className}`}
      style={{
        left: `calc(${left}% + 12px)`,
        width: `${width}%`,
        top: `calc(50% + ${y}px)`,
      }}
    />
  );
}
