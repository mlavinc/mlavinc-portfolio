"use client";

import { Reveal } from "@/components/motion/Reveal";
import { aboutIntro, experience } from "@/data/about";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <Reveal className="mx-auto w-full max-w-5xl">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          About
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          {aboutIntro}
        </p>

        <div className="mt-16">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Experience
          </h3>

          <ul className="mt-8 space-y-10">
            {experience.map((item) => (
              <li key={item.id} className="max-w-2xl">
                <p className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
