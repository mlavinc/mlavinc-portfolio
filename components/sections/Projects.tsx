"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
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
      className="section-band scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.h2
          id="projects"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          variants={fadeUpVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
          transition={fadeUpTransition}
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          variants={staggerContainerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              transition={fadeUpTransition}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
