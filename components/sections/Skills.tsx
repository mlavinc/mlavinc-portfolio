"use client";

import { Reveal } from "@/components/motion/Reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 px-6 py-16 sm:py-20"
    >
      <Reveal className="mx-auto w-full max-w-5xl">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          Skills
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium tracking-wide text-zinc-950 uppercase dark:text-zinc-50">
                {category.title}
              </h3>

              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={category.title}
              >
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
