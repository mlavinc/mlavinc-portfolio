import Link from "next/link";
import { BulletList } from "@/components/projects/BulletList";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
import { InfoCard } from "@/components/projects/InfoCard";
import { MediaPlaceholder } from "@/components/projects/MediaPlaceholder";
import { PillList } from "@/components/projects/PillList";
import { LiveDemoEmbed } from "@/components/ui/LiveDemoEmbed";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

interface ActionLink {
  href: string;
  label: string;
  external: boolean;
  variant: "primary" | "secondary";
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { caseStudy } = project;

  const actionLinks: ActionLink[] = [
    project.githubUrl
      ? {
          href: project.githubUrl,
          label: "GitHub",
          external: true,
          variant: "primary",
        }
      : null,
    project.liveUrl
      ? {
          href: project.liveUrl,
          label: "Live Demo",
          external: true,
          variant: "secondary",
        }
      : null,
    project.architectureUrl
      ? {
          href: project.architectureUrl,
          label: "Architecture",
          external: true,
          variant: "secondary",
        }
      : null,
    project.videoUrl
      ? {
          href: project.videoUrl,
          label: "Video",
          external: true,
          variant: "secondary",
        }
      : null,
  ].filter((link): link is ActionLink => link !== null);

  const [leadParagraph, ...restParagraphs] = caseStudy?.introduction ?? [];

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
      >
        <span aria-hidden="true">←</span> Back to Projects
      </Link>

      <div className="mt-8">
        {project.liveUrl ? (
          <LiveDemoEmbed url={project.liveUrl} title={project.title} />
        ) : project.image ? (
          <div className="overflow-hidden rounded-lg border border-dashed border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-auto w-full object-contain"
            />
          </div>
        ) : (
          <MediaPlaceholder label="Project preview" />
        )}
      </div>

      <header className="mt-10 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {project.title}
        </h1>

        {project.subtitle ? (
          <p className="mt-3 text-lg font-medium text-zinc-600 dark:text-zinc-400">
            {project.subtitle}
          </p>
        ) : null}

        {leadParagraph ? (
          <div className="mt-5 max-w-2xl space-y-4">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {leadParagraph}
            </p>
            {restParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
        )}
      </header>

      <PillList
        items={project.technologies}
        ariaLabel="Technologies"
        className="mt-6 flex flex-wrap gap-2"
      />

      {actionLinks.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {actionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                link.variant === "primary"
                  ? "inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                  : "inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-4 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      {caseStudy ? (
        <div className="mt-16 space-y-12">
          <CaseStudySection id="overview-heading" title="Overview">
            <div className="max-w-3xl space-y-4">
              {caseStudy.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="architecture-heading"
            title="Architecture"
          >
            <div className="space-y-8">
              {(project.architectureImage ||
                (caseStudy.architectureFlow &&
                  caseStudy.architectureFlow.length > 0)) && (
                <FlowDiagram
                  steps={caseStudy.architectureFlow}
                  image={project.architectureImage}
                  imageAlt={`${project.title} architecture diagram`}
                />
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.architecture.map((layer) => (
                  <InfoCard key={layer.title} title={layer.title}>
                    <PillList items={layer.items} />
                  </InfoCard>
                ))}
              </div>
            </div>
          </CaseStudySection>

          {caseStudy.infrastructureAsCode ? (
            <CaseStudySection
              id="iac-heading"
              title="Infrastructure as Code"
              intro={caseStudy.infrastructureAsCode.intro}
            >
              <div className="space-y-6">
                {caseStudy.infrastructureAsCode.image ? (
                  <FlowDiagram
                    image={caseStudy.infrastructureAsCode.image}
                    imageAlt={
                      caseStudy.infrastructureAsCode.imageAlt ??
                      `${project.title} Infrastructure as Code diagram`
                    }
                  />
                ) : null}
                {caseStudy.infrastructureAsCode.items ? (
                  <InfoCard>
                    <BulletList items={caseStudy.infrastructureAsCode.items} />
                  </InfoCard>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.securityDecisions ? (
            <CaseStudySection
              id="security-heading"
              title="Security Decisions"
              intro={caseStudy.securityDecisions.intro}
            >
              <div className="space-y-6">
                {caseStudy.securityDecisions.image ? (
                  <FlowDiagram
                    image={caseStudy.securityDecisions.image}
                    imageAlt={
                      caseStudy.securityDecisions.imageAlt ??
                      `${project.title} security decisions diagram`
                    }
                  />
                ) : null}
                {caseStudy.securityDecisions.groups &&
                caseStudy.securityDecisions.groups.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {caseStudy.securityDecisions.groups.map((group) => (
                      <InfoCard key={group.title} title={group.title}>
                        <BulletList items={group.items} />
                      </InfoCard>
                    ))}
                  </div>
                ) : null}
                {caseStudy.securityDecisions.items ? (
                  <InfoCard>
                    <BulletList items={caseStudy.securityDecisions.items} />
                  </InfoCard>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.cicdWorkflow ? (
            <CaseStudySection
              id="cicd-heading"
              title="CI/CD Workflow"
              intro={caseStudy.cicdWorkflow.intro}
            >
              <div className="space-y-6">
                {caseStudy.cicdWorkflow.image ? (
                  <FlowDiagram
                    image={caseStudy.cicdWorkflow.image}
                    imageAlt={
                      caseStudy.cicdWorkflow.imageAlt ??
                      `${project.title} CI/CD workflow diagram`
                    }
                  />
                ) : null}
                {caseStudy.cicdWorkflow.flow &&
                caseStudy.cicdWorkflow.flow.length > 0 ? (
                  <FlowDiagram steps={caseStudy.cicdWorkflow.flow} />
                ) : null}
                {caseStudy.cicdWorkflow.items ? (
                  <InfoCard>
                    <BulletList items={caseStudy.cicdWorkflow.items} />
                  </InfoCard>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.operationsObservability ? (
            <CaseStudySection
              id="operations-heading"
              title="Operations and Observability"
              intro={caseStudy.operationsObservability.intro}
            >
              <div className="space-y-6">
                {caseStudy.operationsObservability.image ? (
                  <FlowDiagram
                    image={caseStudy.operationsObservability.image}
                    imageAlt={
                      caseStudy.operationsObservability.imageAlt ??
                      `${project.title} operations and observability diagram`
                    }
                  />
                ) : null}
                {caseStudy.operationsObservability.items ? (
                  <InfoCard>
                    <BulletList
                      items={caseStudy.operationsObservability.items}
                    />
                  </InfoCard>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.features && caseStudy.features.length > 0 ? (
            <CaseStudySection
              id="features-heading"
              title={caseStudy.featuresTitle ?? "Key Features"}
              intro={caseStudy.featuresIntro}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {caseStudy.features.map((group) => (
                  <InfoCard key={group.title} title={group.title}>
                    <BulletList items={group.items} />
                  </InfoCard>
                ))}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.mlPipeline ? (
            <CaseStudySection
              id="ml-pipeline-heading"
              title="Machine Learning Pipeline"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {caseStudy.mlPipeline.groups.map((group) => (
                    <InfoCard key={group.title} title={group.title}>
                      <BulletList items={group.items} />
                    </InfoCard>
                  ))}
                </div>
                {caseStudy.mlPipeline.note ? (
                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {caseStudy.mlPipeline.note}
                  </p>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.backendEngineering ? (
            <CaseStudySection
              id="backend-heading"
              title="Backend Engineering"
              intro="The backend follows a layered architecture:"
            >
              <div className="space-y-6">
                <FlowDiagram steps={caseStudy.backendEngineering.layers} />
                <InfoCard>
                  <BulletList
                    items={caseStudy.backendEngineering.responsibilities}
                  />
                </InfoCard>
                {caseStudy.backendEngineering.note ? (
                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {caseStudy.backendEngineering.note}
                  </p>
                ) : null}
              </div>
            </CaseStudySection>
          ) : null}

          {caseStudy.databaseDesign ? (
            <CaseStudySection id="database-heading" title="Database Design">
              <InfoCard>
                <BulletList items={caseStudy.databaseDesign} />
              </InfoCard>
            </CaseStudySection>
          ) : null}

          {caseStudy.frontendDevelopment ? (
            <CaseStudySection
              id="frontend-heading"
              title="Frontend Development"
              intro={caseStudy.frontendDevelopment.intro}
            >
              <InfoCard>
                <BulletList items={caseStudy.frontendDevelopment.items} />
              </InfoCard>
            </CaseStudySection>
          ) : null}

          <CaseStudySection
            id="engineering-heading"
            title="Engineering Highlights"
          >
            <InfoCard>
              <BulletList
                items={caseStudy.engineeringHighlights}
                className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2"
              />
            </InfoCard>
          </CaseStudySection>

          {caseStudy.cloudArchitecture ? (
            <CaseStudySection
              id="cloud-heading"
              title={caseStudy.cloudArchitectureTitle ?? "Cloud Architecture"}
              intro={caseStudy.cloudArchitecture.description}
            >
              <div className="space-y-6">
                {caseStudy.cloudArchitecture.workflow ? (
                  <FlowDiagram steps={caseStudy.cloudArchitecture.workflow} />
                ) : null}
                <PillList
                  items={caseStudy.cloudArchitecture.services}
                  ariaLabel="Cloud services"
                />
              </div>
            </CaseStudySection>
          ) : null}

          <CaseStudySection id="stack-heading" title="Technology Stack">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {caseStudy.techStack.map((group) => (
                <InfoCard key={group.title} title={group.title}>
                  <PillList items={group.items} />
                </InfoCard>
              ))}
            </div>
          </CaseStudySection>

          {caseStudy.challengeGroups ? (
            <CaseStudySection id="challenges-heading" title="Challenges">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {caseStudy.challengeGroups.map((group) => (
                  <InfoCard key={group.title} title={group.title}>
                    <BulletList items={group.items} />
                  </InfoCard>
                ))}
              </div>
            </CaseStudySection>
          ) : caseStudy.challenges ? (
            <CaseStudySection id="challenges-heading" title="Challenges">
              <InfoCard>
                <BulletList items={caseStudy.challenges} />
              </InfoCard>
            </CaseStudySection>
          ) : null}

          <CaseStudySection
            id="future-heading"
            title="Future Improvements"
          >
            <InfoCard>
              <BulletList
                items={caseStudy.futureImprovements}
                className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2"
              />
            </InfoCard>
          </CaseStudySection>

          {caseStudy.projectImpact ? (
            <CaseStudySection id="impact-heading" title="Project Impact">
              <p className="max-w-3xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                {caseStudy.projectImpact}
              </p>
            </CaseStudySection>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
