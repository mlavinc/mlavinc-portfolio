"use client";

import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { useLocale } from "@/lib/i18n/locale-context";
import { getProjectBySlug } from "@/lib/projects";

export function ProjectDetailClient({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return null;
  }

  return <ProjectDetail project={project} />;
}
