"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
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
      className="section-band section-band--muted scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.h2
          id="experience"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          variants={fadeUpVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
          transition={fadeUpTransition}
        >
          {t("experience.title")}
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:max-w-xl md:gap-8"
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariants}
              transition={fadeUpTransition}
            >
              <ExperienceCard experience={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
