import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-colors duration-200 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div
        className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900"
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-950 px-3.5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              GitHub
            </a>
          ) : null}

          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-3.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Case Study
            </a>
          ) : (
            <span className="inline-flex h-9 cursor-not-allowed items-center justify-center rounded-md border border-zinc-200 px-3.5 text-sm font-medium text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
              Case Study
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-3.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
