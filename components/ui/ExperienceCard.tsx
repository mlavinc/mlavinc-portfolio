"use client";

import Link from "next/link";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t } = useLocale();
  const coverImage = experience.image;
  const isNestleLogo = coverImage?.includes("nestle-it-icon");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/80 shadow-[0_1px_0_rgb(255_255_255_/_0.03)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-[0_12px_30px_rgb(0_0_0_/_0.25)]">
      {coverImage ? (
        <div
          className={
            isNestleLogo
              ? "aspect-video w-full overflow-hidden bg-white"
              : "aspect-video w-full overflow-hidden bg-zinc-900"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={`${experience.role} at ${experience.company}`}
            className={
              isNestleLogo
                ? "h-full w-full object-contain p-8 transition-transform duration-300 hover:scale-[1.02]"
                : "h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            }
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-zinc-900" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
          {experience.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-zinc-400">
          {experience.company}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
          {experience.description}
        </p>

        <TechBadgeList
          items={experience.technologies}
          ariaLabel={t("caseStudy.technologies")}
          className="mt-4 flex flex-wrap gap-2"
        />

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {experience.caseStudyUrl ? (
            <Link
              href={experience.caseStudyUrl}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-800 px-3.5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-900"
            >
              {t("experience.caseStudy")}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
