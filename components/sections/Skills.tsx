"use client";

import { Reveal } from "@/components/motion/Reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section
      aria-labelledby="skills"
      className="pt-8 pb-0"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="skills"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          Skills
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium tracking-wide text-zinc-950 uppercase dark:text-zinc-50">
                {category.title}
              </h3>

              <ul
                className="mt-3 flex flex-wrap gap-2"
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
