"use client";

import Link from "next/link";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Experience } from "@/types/experience";

interface ExperienceFeaturedProps {
  experience: Experience;
  imageRight?: boolean;
}

function ArrowRightIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-150 group-hover/cta:translate-x-0.5"
    >
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExperienceFeatured({
  experience,
  imageRight = false,
}: ExperienceFeaturedProps) {
  const { t } = useLocale();

  const contentBlock = (
    <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
      {/* Company — mono label */}
      <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-600 uppercase">
        {experience.company}
      </p>

      {/* Role — display scale */}
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
        {experience.role}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500 lg:max-w-md">
        {experience.description}
      </p>

      {/* Tech */}
      <TechBadgeList
        items={experience.technologies}
        ariaLabel={t("caseStudy.technologies")}
        className="mt-6 flex flex-wrap gap-2"
      />

      {/* CTA */}
      {experience.caseStudyUrl ? (
        <div className="mt-8">
          <Link
            href={experience.caseStudyUrl}
            className="group/cta inline-flex items-center gap-2 text-sm font-medium text-zinc-50 transition-[color] duration-150 hover:text-white"
          >
            {t("experience.viewExperience")}
            <ArrowRightIcon />
          </Link>
        </div>
      ) : null}
    </div>
  );

  const imageBlock = (
    <div className="relative aspect-video overflow-hidden bg-zinc-900/40 lg:aspect-auto lg:h-full">
      {experience.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={experience.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition-opacity duration-500 group-hover/exp-featured:opacity-95"
        />
      ) : null}
    </div>
  );

  if (imageRight) {
    return (
      <article className="group/exp-featured overflow-hidden rounded-xl border border-zinc-800 transition-[border-color] duration-200 hover:border-zinc-700 lg:flex lg:min-h-[400px]">
        {contentBlock}
        <div className="hidden w-px shrink-0 bg-zinc-800 lg:block" />
        <div className="lg:w-[52%] lg:shrink-0">{imageBlock}</div>
      </article>
    );
  }

  return (
    <article className="group/exp-featured overflow-hidden rounded-xl border border-zinc-800 transition-[border-color] duration-200 hover:border-zinc-700 lg:flex lg:min-h-[400px]">
      <div className="lg:w-[52%] lg:shrink-0">{imageBlock}</div>
      <div className="hidden w-px shrink-0 bg-zinc-800 lg:block" />
      {contentBlock}
    </article>
  );
}
