import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.id);
}
