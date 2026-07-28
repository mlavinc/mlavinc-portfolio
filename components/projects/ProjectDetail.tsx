import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { caseStudy } = project;

  const externalLinks = [
    project.githubUrl
      ? { href: project.githubUrl, label: "GitHub", external: true }
      : null,
    project.liveUrl
      ? { href: project.liveUrl, label: "Live Demo", external: true }
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

        {project.subtitle ? (
          <p className="mt-3 text-base font-medium text-zinc-600 sm:text-lg dark:text-zinc-400">
            {project.subtitle}
          </p>
        ) : null}

        {caseStudy ? (
          <div className="mt-6 max-w-3xl space-y-4">
            {caseStudy.introduction.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
            {project.description}
          </p>
        )}
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

      {caseStudy ? (
        <div className="mt-16 space-y-14">
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              Overview
            </h2>
            <div className="mt-4 max-w-3xl space-y-4">
              {caseStudy.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {caseStudy.features && caseStudy.features.length > 0 ? (
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
              >
                {caseStudy.featuresTitle ?? "Key Features"}
              </h2>
              {caseStudy.featuresIntro ? (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {caseStudy.featuresIntro}
                </p>
              ) : null}
              <div
                className={
                  caseStudy.features.length === 1
                    ? "mt-4 max-w-3xl"
                    : "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                }
              >
                {caseStudy.features.map((group) => (
                  <div key={group.title}>
                    {caseStudy.features && caseStudy.features.length > 1 ? (
                      <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                        {group.title}
                      </h3>
                    ) : null}
                    <ul
                      className={
                        caseStudy.features && caseStudy.features.length > 1
                          ? "mt-3 space-y-2"
                          : "space-y-2"
                      }
                    >
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section aria-labelledby="architecture-heading">
            <h2
              id="architecture-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              Architecture
            </h2>
            {caseStudy.architectureFlow ? (
              <ol className="mt-4 max-w-3xl space-y-1">
                {caseStudy.architectureFlow.map((step, index) => (
                  <li
                    key={step}
                    className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {step}
                    {index < caseStudy.architectureFlow!.length - 1
                      ? " ↓"
                      : null}
                  </li>
                ))}
              </ol>
            ) : null}
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.architecture.map((layer) => (
                <div key={layer.title}>
                  <h3 className="text-sm font-medium tracking-wide text-zinc-950 uppercase dark:text-zinc-50">
                    {layer.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {caseStudy.mlPipeline ? (
            <section aria-labelledby="ml-pipeline-heading">
              <h2
                id="ml-pipeline-heading"
                className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
              >
                Machine Learning Pipeline
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {caseStudy.mlPipeline.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                      {group.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {caseStudy.mlPipeline.note ? (
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {caseStudy.mlPipeline.note}
                </p>
              ) : null}
            </section>
          ) : null}

          <section aria-labelledby="engineering-heading">
            <h2
              id="engineering-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              Engineering Highlights
            </h2>
            <ul className="mt-4 max-w-3xl space-y-2">
              {caseStudy.engineeringHighlights.map((item) => (
                <li
                  key={item}
                  className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cloud-heading">
            <h2
              id="cloud-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              {caseStudy.cloudArchitectureTitle ?? "Cloud Architecture"}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              {caseStudy.cloudArchitecture.description}
            </p>
            {caseStudy.cloudArchitecture.workflow ? (
              <ul className="mt-4 max-w-3xl space-y-2">
                {caseStudy.cloudArchitecture.workflow.map((step) => (
                  <li
                    key={step}
                    className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            ) : null}
            <ul className="mt-4 flex flex-wrap gap-2">
              {caseStudy.cloudArchitecture.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="stack-heading">
            <h2
              id="stack-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              Technology Stack
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {caseStudy.techStack.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-medium tracking-wide text-zinc-950 uppercase dark:text-zinc-50">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {caseStudy.challenges ? (
            <section aria-labelledby="challenges-heading">
              <h2
                id="challenges-heading"
                className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
              >
                Challenges
              </h2>
              <ul className="mt-4 max-w-3xl space-y-2">
                {caseStudy.challenges.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby="future-heading">
            <h2
              id="future-heading"
              className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
            >
              Future Improvements
            </h2>
            <ul className="mt-4 max-w-3xl space-y-2">
              {caseStudy.futureImprovements.map((item) => (
                <li
                  key={item}
                  className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}
    </article>
  );
}
