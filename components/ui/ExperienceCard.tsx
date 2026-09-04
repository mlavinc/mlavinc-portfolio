"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
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

/**
 * Open-layout experience entry — no card border, intended to live inside
 * a parent that provides horizontal rules for separation.
 */
export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t } = useLocale();

  return (
    <article className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-[1fr_auto]">
      {/* ── Main content ───────────────────────────────────────── */}
      <div>
        {/* Company — mono label */}
        <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-600 uppercase">
          {experience.company}
        </p>

        {/* Role — display scale */}
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          {experience.role}
        </h3>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
          {experience.description}
        </p>

        {/* Technologies — inline text, not badges */}
        {experience.technologies.length > 0 && (
          <p className="mt-5 font-mono text-xs leading-relaxed text-zinc-600">
            {experience.technologies.join(" · ")}
          </p>
        )}

        {/* Case Study CTA */}
        {experience.caseStudyUrl ? (
          <div className="mt-7">
            <Link
              href={experience.caseStudyUrl}
              className="group/cta inline-flex items-center gap-2 text-sm font-medium text-zinc-50 transition-[color] duration-150 hover:text-white"
            >
              {t("experience.caseStudy")}
              <ArrowRightIcon />
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
