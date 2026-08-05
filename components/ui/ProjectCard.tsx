"use client";

import Link from "next/link";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
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
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-zinc-800 bg-black px-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-900"
            >
              <GitHubIcon />
              {t("projects.github")}
            </a>
          ) : null}

          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-3.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-200"
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
