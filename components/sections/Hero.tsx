"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroConstellation } from "@/components/layout/HeroConstellation";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  fadeUpTransition,
  fadeUpVariants,
  heroContainerVariants,
} from "@/lib/motion";

const linkedInUrl = "https://www.linkedin.com/in/martinlavin/";
const githubUrl = "https://github.com/mlavinc";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { locale, t } = useLocale();
  const cvHref =
    locale === "es"
      ? "/cv/martin-lavin-cv-es.pdf"
      : "/cv/martin-lavin-cv-en.pdf";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-end overflow-hidden pb-16 pt-12 md:justify-center md:pb-24 md:pt-0"
    >
      <HeroConstellation />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          variants={heroContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          {/* ── Oversized name ─────────────────────────────────────── */}
          <motion.h1
            id="hero-heading"
            className="text-[clamp(2.5rem,7.5vw,6.5rem)] font-bold leading-[0.9] tracking-tighter text-zinc-50"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            Martin Lavin{" "}
            <span className="block">Carvajal</span>
          </motion.h1>

          {/* ── Horizontal rule ─────────────────────────────────────── */}
          <motion.div
            className="mt-8 h-px bg-zinc-800"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          />

          {/* ── Two-zone strip: info left / CTAs right ─────────────── */}
          <motion.div
            className="mt-7 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {/* Left: role label + tagline + focus */}
            <div className="max-w-xl">
              <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-300 uppercase">
                {t("hero.role")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {t("hero.tagline")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {t("hero.focus")}
              </p>
            </div>

            {/* Right: CTAs stacked, right-aligned on desktop */}
            <div className="flex shrink-0 flex-col gap-2.5 sm:items-end">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-50 px-5 text-sm font-medium text-zinc-950 transition-[transform,background-color] duration-150 hover:bg-white active:scale-[0.97]"
              >
                {t("hero.viewProjects")}
              </a>
              <a
                href={cvHref}
                download
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 px-5 text-sm font-medium text-zinc-100 transition-[transform,background-color,border-color] duration-150 hover:border-zinc-700 hover:bg-zinc-900/50 active:scale-[0.97]"
              >
                {t("hero.downloadCv")}
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 px-5 text-sm font-medium text-zinc-100 transition-[transform,background-color,border-color] duration-150 hover:border-zinc-700 hover:bg-zinc-900/50 active:scale-[0.97]"
              >
                {t("hero.linkedIn")}
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 px-5 text-sm font-medium text-zinc-100 transition-[transform,background-color,border-color] duration-150 hover:border-zinc-700 hover:bg-zinc-900/50 active:scale-[0.97]"
              >
                {t("hero.github")}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
