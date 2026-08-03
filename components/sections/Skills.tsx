"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { getSkillCategories } from "@/data/skills";
import { useLocale } from "@/lib/i18n/locale-context";

export function Skills() {
  const { locale, t } = useLocale();
  const skillCategories = getSkillCategories(locale);

  return (
    <section
      id="skills-section"
      aria-labelledby="skills"
      className="section-band scroll-mt-24 py-24 sm:py-28"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="skills"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {t("skills.title")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium tracking-wide text-zinc-200 uppercase">
                {category.title}
              </h3>

              <TechBadgeList
                items={category.skills}
                ariaLabel={category.title}
                size="emphasis"
                className="mt-4 flex flex-wrap gap-2.5"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
