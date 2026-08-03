"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroConstellation } from "@/components/layout/HeroConstellation";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  fadeUpTransition,
  fadeUpVariants,
  heroContainerVariants,
} from "@/lib/motion";

const linkedInUrl =
  "https://www.linkedin.com/in/martin-lavin-carvajal-010b08339/";

const secondaryButtonClassName =
  "inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 bg-transparent px-5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-900";

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
      className="relative flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden"
    >
      <HeroConstellation />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          className="mx-auto flex w-full max-w-2xl flex-col items-center text-center"
          variants={heroContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            Martin Lavin Carvajal
          </motion.h1>

          <motion.p
            className="mt-4 text-base font-medium text-zinc-400 sm:text-lg"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {t("hero.role")}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {t("hero.focus")}
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-50 px-5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-200"
            >
              {t("hero.viewProjects")}
            </a>
            <a href={cvHref} download className={secondaryButtonClassName}>
              {t("hero.downloadCv")}
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButtonClassName}
            >
              {t("hero.linkedIn")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
