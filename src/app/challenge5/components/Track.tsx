export function Track({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-28 select-none">
      <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-1.5 bg-neutral-200 rounded-full" />
      {children}
    </div>
  );
}
