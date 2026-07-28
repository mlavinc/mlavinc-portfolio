import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const externalLinks = [
    project.githubUrl
      ? { href: project.githubUrl, label: "GitHub", external: true }
      : null,
    project.liveUrl
      ? { href: project.liveUrl, label: "Live Demo", external: true }
      : null,
    project.caseStudyUrl
      ? { href: project.caseStudyUrl, label: "Case Study", external: false }
      : null,
    project.architectureUrl
      ? {
          href: project.architectureUrl,
          label: "Architecture",
          external: true,
        }
      : null,
    project.videoUrl
      ? { href: project.videoUrl, label: "Video", external: true }
      : null,
  ].filter(Boolean) as { href: string; label: string; external: boolean }[];

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <Link
        href="/#projects"
        className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Back to Projects
      </Link>

      <div className="mt-8">
        <div
          className="aspect-video w-full rounded-lg bg-zinc-100 dark:bg-zinc-900"
          aria-hidden="true"
        />
      </div>

      <header className="mt-10">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          {project.description}
        </p>
      </header>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      {externalLinks.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {externalLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                index === 0
                  ? "inline-flex h-9 items-center justify-center rounded-md bg-zinc-950 px-3.5 text-sm font-medium text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                  : "inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-3.5 text-sm font-medium text-zinc-950 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
