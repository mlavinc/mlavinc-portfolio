"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import {
  fadeUpTransition,
  fadeUpVariants,
  staggerContainerVariants,
  viewportReveal,
} from "@/lib/motion";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
          variants={fadeUpVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportReveal}
          transition={fadeUpTransition}
        >
          Projects
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
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
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
