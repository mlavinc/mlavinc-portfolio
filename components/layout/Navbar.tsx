"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { getNavLinks } from "@/data/navigation";
import { useLocale } from "@/lib/i18n/locale-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();
  const navLinks = getNavLinks(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-50 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          Martin Lavin Carvajal
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-50 transition-colors duration-200 hover:bg-zinc-900"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-zinc-800 md:hidden">
          <ul className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className="block text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
