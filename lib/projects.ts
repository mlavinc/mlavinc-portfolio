import { getProjects } from "@/data/projects";
import type { Locale } from "@/types/i18n";
import type { Project } from "@/types/project";

export function getProjectBySlug(
  slug: string,
  locale: Locale = "en",
): Project | undefined {
  return getProjects(locale).find((project) => project.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return getProjects("en").map((project) => project.id);
}
