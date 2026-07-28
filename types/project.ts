export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectFeatureGroup {
  title: string;
  items: string[];
}

export interface ProjectArchitectureLayer {
  title: string;
  items: string[];
}

export interface ProjectTechGroup {
  title: string;
  items: string[];
}

export interface ProjectCaseStudy {
  introduction: string[];
  overview: string[];
  featuresTitle?: string;
  featuresIntro?: string;
  features: ProjectFeatureGroup[];
  architecture: ProjectArchitectureLayer[];
  engineeringHighlights: string[];
  cloudArchitectureTitle?: string;
  cloudArchitecture: {
    services: string[];
    description: string;
    workflow?: string[];
  };
  techStack: ProjectTechGroup[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  subtitle?: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  videoUrl?: string;
  caseStudy?: ProjectCaseStudy;
  status?: ProjectStatus;
  featured?: boolean;
}
