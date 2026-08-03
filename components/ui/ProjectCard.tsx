"use client";

import Link from "next/link";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/80 shadow-[0_1px_0_rgb(255_255_255_/_0.03)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-[0_12px_30px_rgb(0_0_0_/_0.25)]">
      {project.image ? (
        <div className="aspect-video w-full overflow-hidden bg-zinc-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-zinc-900" aria-hidden="true" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
          {project.title}
        </h3>

        {project.subtitle ? (
          <p className="mt-1 text-sm font-medium text-zinc-400">
            {project.subtitle}
          </p>
        ) : null}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
          {project.description}
        </p>

        <TechBadgeList
          items={project.technologies}
          ariaLabel={t("caseStudy.technologies")}
          className="mt-4 flex flex-wrap gap-2"
        />

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-50 px-3.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-200"
            >
              {t("projects.github")}
            </a>
          ) : null}

          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-800 px-3.5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-900"
            >
              {t("projects.caseStudy")}
            </Link>
          ) : (
            <span className="inline-flex h-9 cursor-not-allowed items-center justify-center rounded-md border border-zinc-800 px-3.5 text-sm font-medium text-zinc-600">
              {t("projects.caseStudy")}
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-800 px-3.5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-900"
            >
              {t("projects.liveDemo")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
