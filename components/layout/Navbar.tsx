"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { getNavLinks } from "@/data/navigation";
import { useLocale } from "@/lib/i18n/locale-context";

// Maps section element IDs to their nav hash
const SECTION_MAP: Record<string, string> = {
  "about-section": "#about",
  "projects-section": "#projects",
  "experience-section": "#experience",
  "skills-section": "#skills",
  "contact-section": "#contact",
};
const SECTION_IDS = Object.keys(SECTION_MAP);

function useActiveSection(): string {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    function update() {
      if (window.scrollY < 80) {
        setActiveHash("");
        return;
      }
      // Mark the last section whose top is above 38% down the viewport
      const threshold = window.scrollY + window.innerHeight * 0.38;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) {
          current = SECTION_MAP[id];
        }
      }
      setActiveHash(current);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return activeHash;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();
  const navLinks = getNavLinks(locale);
  const activeHash = useActiveSection();
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-50 transition-colors duration-200 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Martin Lavin Carvajal
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    className={[
                      "relative text-sm transition-colors duration-200",
                      isActive
                        ? "text-zinc-50"
                        : "text-zinc-400 hover:text-zinc-200",
                    ].join(" ")}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-[17px] left-0 right-0 h-px bg-zinc-500"
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.2,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <LanguageToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-[background-color,border-color,color] duration-200 hover:border-zinc-700 hover:text-zinc-50 active:scale-[0.97]"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg
                width="14"
                height="14"
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
                width="14"
                height="14"
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

      {/* Mobile nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-zinc-800/60 md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={`/${link.href}`}
                      className={[
                        "block rounded-md px-2 py-2 text-sm transition-colors duration-150",
                        isActive
                          ? "text-zinc-50"
                          : "text-zinc-400 hover:text-zinc-200",
                      ].join(" ")}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
