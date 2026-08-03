import type { ProjectTechGroup } from "@/types/project";

export interface ExperienceSolution {
  id: string;
  name: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  businessImpact: string[];
  images: string[];
}

export interface ExperienceContribution {
  title: string;
  paragraph: string;
}

export interface ExperienceCaseStudy {
  introduction: string[];
  overview: string[];
  impact: string[];
  solutions: ExperienceSolution[];
  additionalContributions: ExperienceContribution[];
  techStack: ProjectTechGroup[];
  lessonsLearned: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  image?: string;
  caseStudyUrl?: string;
  caseStudy?: ExperienceCaseStudy;
}
