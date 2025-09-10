"use client";

export default function About() {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          About
        </h1>
        <p className="mt-3 text-slate-700">
          Hi! I’m <span className="font-medium text-slate-900">Hugo Bentivegna</span>. You can reach me at{" "}
          <a
            href="mailto:hugobenti@gmail.com"
            className="underline underline-offset-2 text-slate-800 hover:no-underline"
          >
            hugobenti@gmail.com
          </a>.
        </p>
      </header>

      <hr className="my-6 border-slate-200" />

      <section aria-labelledby="intro">
        <h2 id="intro" className="text-xl font-semibold text-slate-900">
          Overview
        </h2>
        <p className="mt-3 text-slate-700">
          I had a lot of fun working through these challenges and made a point to
          explore each one as much as possible.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="stack">
        <h2 id="stack" className="text-xl font-semibold text-slate-900">
          Tools & Preferences
        </h2>
        <p className="mt-3 text-slate-700">
          I typically work with React, TypeScript, and Tailwind CSS. I value robust
          design-system practices, strong typing, and thoughtful component
          contracts that make collaboration easier for everyone involved.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="closing">
        <h2 id="closing" className="text-xl font-semibold text-slate-900">
          Closing Note
        </h2>
        <p className="mt-3 text-slate-700">
          Thanks for reviewing this work. If anyone have any questions or want to
          dive deeper into specific decisions, feel free to get in touch. I’m happy
          to walk through the reasoning behind any part of the implementation.
        </p>
      </section>
    </section>
  );
}
