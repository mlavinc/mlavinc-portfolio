"use client";

import { Reveal } from "@/components/motion/Reveal";
import { getSkillCategories } from "@/data/skills";
import { getTechIcon } from "@/lib/tech-icons";
import { useLocale } from "@/lib/i18n/locale-context";

export function Skills() {
  const { locale, t } = useLocale();
  const skillCategories = getSkillCategories(locale);

  return (
    <section
      id="skills-section"
      aria-labelledby="skills"
      className="section-band scroll-mt-24 py-28 sm:py-32"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="skills"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
        >
          {t("skills.title")}
        </h2>

        {/* ── Capability map — horizontal table with icons ──────── */}
        <ul
          aria-label={t("skills.title")}
          className="mt-10 divide-y divide-zinc-800/80"
        >
          {skillCategories.map((category) => (
            <li
              key={category.id}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:gap-0"
            >
              {/* Category label */}
              <h3
                id={`skill-cat-${category.id}`}
                className="w-full shrink-0 font-mono text-[10px] tracking-[0.16em] text-zinc-600 uppercase sm:w-48"
              >
                {category.title}
              </h3>

              {/* Skills — icon + name pairs, no pill chrome */}
              <ul
                aria-labelledby={`skill-cat-${category.id}`}
                className="flex flex-wrap gap-x-5 gap-y-2.5"
              >
                {category.skills.map((name) => {
                  const icon = getTechIcon(name);
                  return (
                    <li
                      key={name}
                      className="inline-flex items-center gap-1.5"
                    >
                      {icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={icon}
                          alt=""
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5 opacity-50"
                        />
                      ) : null}
                      <span className="font-mono text-xs text-zinc-300">
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
