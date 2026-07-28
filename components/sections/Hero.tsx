"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUpTransition,
  fadeUpVariants,
  heroContainerVariants,
} from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100svh-4.25rem)] items-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          className="mx-auto flex w-full max-w-2xl flex-col items-center text-center"
          variants={heroContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            Martin Lavin Carvajal
          </motion.h1>

          <motion.p
            className="mt-4 text-base font-medium text-zinc-600 sm:text-lg dark:text-zinc-400"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            Full-Stack Engineer | Cloud &amp; AI
          </motion.p>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-500"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            Building modern applications focused on backend, cloud, and
            artificial intelligence.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="https://github.com/mlavinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
