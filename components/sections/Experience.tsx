"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExperienceFeatured } from "@/components/ui/ExperienceFeatured";
import { getExperience } from "@/data/experience";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  fadeUpTransition,
  fadeUpVariants,
  staggerContainerVariants,
  viewportReveal,
} from "@/lib/motion";

export function Experience() {
  const { locale, t } = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const items = getExperience(locale);

  return (
    <section
      id="experience-section"
      aria-labelledby="experience"
      className="section-band scroll-mt-24 py-28 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
        >
          <motion.h2
            id="experience"
            className="scroll-mt-28 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {t("experience.title")}
          </motion.h2>

          {/* Thin rule under heading */}
          <motion.div
            className="mt-5 h-px bg-zinc-800"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          />

          {/* ── Featured experience cards ──────────────────────── */}
          <div className="mt-10 flex flex-col gap-6">
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={fadeUpVariants}
                transition={fadeUpTransition}
              >
                <ExperienceFeatured
                  experience={item}
                  imageRight={idx % 2 === 0}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
