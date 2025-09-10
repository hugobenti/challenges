"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const challenges = Array.from({ length: 7 }, (_, i) => i + 1);

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-gray-500">Challenges - JS</span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M3.75 6.75h16.5v1.5H3.75zM3.75 11.25h16.5v1.5H3.75zM3.75 15.75h16.5v1.5H3.75z" />
          </svg>
          Menu
        </button>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            aria-current={pathname === "/" ? "page" : undefined}
            className={
              "rounded-lg px-3 py-2 text-sm font-medium transition " +
              (pathname === "/"
                ? "bg-gray-900 text-white shadow"
                : "text-gray-700 hover:bg-gray-100")
            }
          >
            About{" "}
          </Link>
          {challenges.map((n) => {
            const href = `/challenge${n}`;
            const active = isActive(pathname ?? "/", href);
            return (
              <Link
                key={n}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  "rounded-xl px-3 py-2 text-sm font-medium transition " +
                  (active
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100")
                }
              >
                {`Challenge ${n}`}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-gray-200 md:hidden">
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-3 sm:grid-cols-3">
            <Link
              href={"/"}
              onClick={() => setOpen(false)}
              aria-current={pathname === "/" ? "page" : undefined}
              className={
                "rounded-lg px-3 py-2 text-sm font-medium transition " +
                (pathname === "/"
                  ? "bg-gray-900 text-white shadow"
                  : "text-gray-700 hover:bg-gray-100")
              }
            >
              About{" "}
            </Link>
            {challenges.map((n) => {
              const href = `/challenge${n}`;
              const active = isActive(pathname ?? "/", href);
              return (
                <Link
                  key={`m-${n}`}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    "rounded-lg px-3 py-2 text-sm font-medium transition " +
                    (active
                      ? "bg-gray-900 text-white shadow"
                      : "text-gray-700 hover:bg-gray-100")
                  }
                >
                  {`Challenge ${n}`}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
