"use client";

import Link from "next/link";
import { BulletList } from "@/components/projects/BulletList";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { InfoCard } from "@/components/projects/InfoCard";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Experience } from "@/types/experience";

interface ExperienceDetailProps {
  experience: Experience;
}

export function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { t } = useLocale();
  const { caseStudy } = experience;

  if (!caseStudy) {
    return null;
  }

  const [leadParagraph, ...restParagraphs] = caseStudy.introduction;

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <Link
        href="/#experience"
        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-50"
      >
        <span aria-hidden="true">←</span> {t("caseStudy.backToExperience")}
      </Link>

      {experience.image ? (
        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800 bg-white">
          <div className="aspect-video w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={experience.image}
              alt={`${experience.role} at ${experience.company}`}
              className="h-full w-full object-contain p-10"
            />
          </div>
        </div>
      ) : null}

      <header className="mt-10 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {experience.role}
        </h1>
        <p className="mt-3 text-lg font-medium text-zinc-400">
          {experience.company}
        </p>
        <div className="mt-5 max-w-2xl space-y-4">
          <p className="text-lg leading-relaxed text-zinc-300">{leadParagraph}</p>
          {restParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <TechBadgeList
        items={experience.technologies}
        ariaLabel={t("caseStudy.technologies")}
        className="mt-6 flex flex-wrap gap-2"
      />

      <div className="mt-16 space-y-14">
        <CaseStudySection
          id="overview-heading"
          title={t("caseStudy.overview")}
        >
          <div className="max-w-3xl space-y-4">
            {caseStudy.overview.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection id="impact-heading" title={t("caseStudy.impact")}>
          <InfoCard>
            <BulletList items={caseStudy.impact} />
          </InfoCard>
        </CaseStudySection>

        <CaseStudySection
          id="solutions-heading"
          title={t("caseStudy.featuredSolutions")}
        >
          <div className="space-y-8">
            {caseStudy.solutions.map((solution) => (
              <section
                key={solution.id}
                id={solution.id}
                className="scroll-mt-28 rounded-lg border border-zinc-800 bg-zinc-950/50 p-5 sm:p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                  {solution.name}
                </h3>

                <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">
                        {t("caseStudy.problem")}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                        {solution.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">
                        {t("caseStudy.solution")}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                        {solution.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">
                        {t("caseStudy.architectureImplementation")}
                      </h4>
                      <div className="mt-1.5">
                        <BulletList items={solution.architecture} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">
                        {t("caseStudy.technologies")}
                      </h4>
                      <TechBadgeList
                        items={solution.technologies}
                        className="mt-1.5 flex flex-wrap gap-2"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">
                        {t("caseStudy.businessImpact")}
                      </h4>
                      <div className="mt-1.5">
                        <BulletList items={solution.businessImpact} />
                      </div>
                    </div>
                  </div>

                  <div className="lg:sticky lg:top-28">
                    <ImageCarousel
                      images={solution.images}
                      alt={solution.name}
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="additional-heading"
          title={t("caseStudy.additionalContributions")}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {caseStudy.additionalContributions.map((contribution) => (
              <InfoCard key={contribution.title} title={contribution.title}>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {contribution.paragraph}
                </p>
              </InfoCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="stack-heading"
          title={t("caseStudy.technologyStack")}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.techStack.map((group) => (
              <InfoCard key={group.title} title={group.title}>
                <TechBadgeList items={group.items} />
              </InfoCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="lessons-heading"
          title={t("caseStudy.lessonsLearned")}
        >
          <InfoCard>
            <BulletList items={caseStudy.lessonsLearned} />
          </InfoCard>
        </CaseStudySection>
      </div>
    </article>
  );
}
