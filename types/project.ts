export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  status?: ProjectStatus;
  featured?: boolean;
}
