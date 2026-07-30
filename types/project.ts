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

export interface ProjectMlPipeline {
  groups: ProjectFeatureGroup[];
  note?: string;
}

export interface ProjectBackendEngineering {
  layers: string[];
  responsibilities: string[];
  note?: string;
}

export interface ProjectFrontendDevelopment {
  intro?: string;
  items: string[];
}

export interface ProjectDiagramBlock {
  intro?: string;
  image?: string;
  imageAlt?: string;
  flow?: string[];
  items?: string[];
  groups?: ProjectFeatureGroup[];
}

export interface ProjectCaseStudy {
  introduction: string[];
  overview: string[];
  featuresTitle?: string;
  featuresIntro?: string;
  features?: ProjectFeatureGroup[];
  architectureFlow?: string[];
  architecture: ProjectArchitectureLayer[];
  infrastructureAsCode?: ProjectDiagramBlock;
  securityDecisions?: ProjectDiagramBlock;
  cicdWorkflow?: ProjectDiagramBlock;
  operationsObservability?: ProjectDiagramBlock;
  mlPipeline?: ProjectMlPipeline;
  backendEngineering?: ProjectBackendEngineering;
  databaseDesign?: string[];
  frontendDevelopment?: ProjectFrontendDevelopment;
  engineeringHighlights: string[];
  cloudArchitectureTitle?: string;
  cloudArchitecture?: {
    services: string[];
    description: string;
    workflow?: string[];
  };
  techStack: ProjectTechGroup[];
  challenges?: string[];
  challengeGroups?: ProjectFeatureGroup[];
  futureImprovements: string[];
  projectImpact?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  subtitle?: string;
  image?: string;
  architectureImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  videoUrl?: string;
  caseStudy?: ProjectCaseStudy;
  status?: ProjectStatus;
  featured?: boolean;
}
