export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  videoUrl?: string;
  status?: ProjectStatus;
  featured?: boolean;
}
