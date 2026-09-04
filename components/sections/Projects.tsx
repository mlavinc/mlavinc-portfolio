"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectFeatured } from "@/components/ui/ProjectFeatured";
import { getProjects } from "@/data/projects";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  fadeUpTransition,
  fadeUpVariants,
  staggerContainerVariants,
  viewportReveal,
} from "@/lib/motion";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const { locale, t } = useLocale();
  const projects = getProjects(locale);

  return (
    <section
      id="projects-section"
      aria-labelledby="projects"
      className="section-band section-band--muted scroll-mt-24 py-28 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* ── Section heading ───────────────────────────────────── */}
        <motion.div
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
        >
          <motion.h2
            id="projects"
            className="scroll-mt-28 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          >
            {t("projects.title")}
          </motion.h2>

          {/* Thin rule under heading */}
          <motion.div
            className="mt-5 h-px bg-zinc-800"
            variants={fadeUpVariants}
            transition={fadeUpTransition}
          />
        </motion.div>

        {/* ── All four projects as full-width featured rows ─────── */}
        {/* Alternating image-left / image-right for visual rhythm  */}
        <motion.div
          className="mt-10 flex flex-col gap-6"
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              transition={fadeUpTransition}
            >
              <ProjectFeatured
                project={project}
                index={idx + 1}
                imageRight={idx % 2 === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
