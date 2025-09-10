"use client";

export default function Challenge3() {
  return (
    <div className="min-h-screen bg-white p-6">
      <p className="text-sm font-medium text-slate-800 mb-6">
        Write the necessary React code for generating the below figure (using
        flex).
      </p>
      <div className="mx-auto max-w-3xl p-4 space-y-3">
        {/* Header */}
        <header className="h-14 rounded bg-cyan-400 text-white flex items-center justify-center font-semibold">
          Header
        </header>

        {/* Body */}
        <div className="flex gap-3">
          {/* Left column */}
          <div className="flex basis-2/5 flex-col gap-3">
            <section className="h-44 rounded bg-purple-300 text-white/90 flex items-center justify-center">
              Hero
            </section>

            <aside className="h-56 rounded bg-lime-500 text-white flex items-center justify-center">
              Sidebar
            </aside>
          </div>

          {/* Right column */}
          <div className="flex basis-3/5 flex-col gap-3">
            <main className="flex-1 rounded bg-amber-300 text-white/90 flex items-center justify-center min-h-[220px]">
              Main Content
            </main>

            <section className="h-36 rounded bg-gray-500 text-white flex items-center justify-center">
              Extra Content
            </section>
          </div>
        </div>

        {/* Bottom row before footer */}
        <div className="flex gap-3">
          <section className="flex-1 h-20 rounded bg-emerald-500 text-white flex items-center justify-center">
            Related Images
          </section>

          <aside className="w-44 h-20 rounded bg-pink-200 text-gray-700 flex items-center justify-center">
            Related Posts
          </aside>
        </div>

        {/* Footer */}
        <footer className="h-14 rounded bg-orange-400 text-white flex items-center justify-center font-semibold">
          Footer
        </footer>
      </div>
    </div>
  );
}
