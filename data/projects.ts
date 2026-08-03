import { cloudOperationsLabCaseStudy } from "@/data/case-studies/cloud-operations-lab";
import { documentKnowledgeAgentCaseStudy } from "@/data/case-studies/document-knowledge-agent";
import { ecgAiServerlessCaseStudy } from "@/data/case-studies/ecg-ai-serverless";
import {
  cloudOperationsLabCaseStudyEs,
  documentKnowledgeAgentCaseStudyEs,
  ecgAiServerlessCaseStudyEs,
  skillTrackerCaseStudyEs,
} from "@/data/case-studies/es";
import { skillTrackerCaseStudy } from "@/data/case-studies/skill-tracker";
import type { Locale, Localized } from "@/types/i18n";
import { pickLocalized } from "@/types/i18n";
import type { Project, ProjectCaseStudy, ProjectStatus } from "@/types/project";

interface LocalizedProject {
  id: string;
  title: Localized<string>;
  subtitle?: Localized<string>;
  description: Localized<string>;
  technologies: string[];
  image?: string;
  architectureImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  architectureUrl?: string;
  videoUrl?: string;
  caseStudy?: Localized<ProjectCaseStudy>;
  status?: ProjectStatus;
  featured?: boolean;
}

const localizedProjects: LocalizedProject[] = [
  {
    id: "document-knowledge-agent",
    title: {
      en: "Document Knowledge Agent",
      es: "Document Knowledge Agent",
    },
    subtitle: {
      en: "with Portfolio Assistant extension",
      es: "con la extensión Portfolio Assistant",
    },
    description: {
      en: "Production-oriented Retrieval-Augmented Generation platform built with AWS serverless architecture, OpenAI embeddings, vector search, and a portfolio-integrated AI assistant.",
      es: "Plataforma de Retrieval-Augmented Generation (RAG) orientada a producción, construida sobre una arquitectura serverless en AWS, con embeddings de OpenAI, búsqueda vectorial y un asistente de IA integrado al portafolio.",
    },
    technologies: [
      "Python",
      "Node.js",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "React",
    ],
    image: "/projects/document-knowledge-agent.png",
    architectureImage: "/projects/document-knowledge-agent-architecture.png",
    githubUrl: "https://github.com/mlavinc/document-knowledge-agent",
    liveUrl: "https://document-knowledge-agent-tau.vercel.app/",
    caseStudyUrl: "/projects/document-knowledge-agent",
    caseStudy: {
      en: documentKnowledgeAgentCaseStudy,
      es: documentKnowledgeAgentCaseStudyEs,
    },
    featured: true,
    status: "completed",
  },
  {
    id: "cloud-operations-lab",
    title: {
      en: "Cloud Operations Lab",
      es: "Cloud Operations Lab",
    },
    subtitle: {
      en: "AWS · Terraform · Cloud / Platform Engineering",
      es: "AWS · Terraform · Ingeniería Cloud / Platform",
    },
    description: {
      en: "AWS operations platform defined with modular Terraform, secure SSM access, and a GitHub Actions pipeline with OIDC and manual approval before apply.",
      es: "Plataforma de operaciones en AWS definida mediante Terraform modular, con acceso seguro mediante AWS Systems Manager (SSM) y un pipeline de GitHub Actions basado en OIDC con aprobación manual antes del despliegue.",
    },
    technologies: [
      "AWS",
      "Terraform",
      "GitHub Actions",
      "OIDC",
      "SSM",
      "CloudWatch",
    ],
    image: "/projects/cloud-operations-lab.png",
    architectureImage: "/projects/cloud-operations-lab-architecture.png",
    githubUrl: "https://github.com/mlavinc/cloud-operations-lab",
    caseStudyUrl: "/projects/cloud-operations-lab",
    caseStudy: {
      en: cloudOperationsLabCaseStudy,
      es: cloudOperationsLabCaseStudyEs,
    },
    featured: true,
    status: "completed",
  },
  {
    id: "ecg-ai-serverless",
    title: {
      en: "ECG-AI Serverless",
      es: "ECG-AI Serverless",
    },
    subtitle: {
      en: "Serverless ECG Analysis Platform with Machine Learning",
      es: "Plataforma Serverless para Análisis de ECG con Machine Learning",
    },
    description: {
      en: "End-to-end ECG classification (~75.5% balanced accuracy) with serverless inference on AWS Lambda, API Gateway, and Terraform: from signal processing to deployable ML software.",
      es: "Clasificación de señales ECG de extremo a extremo (~75,5 % de balanced accuracy) mediante inferencia serverless en AWS Lambda, API Gateway y Terraform, abarcando desde el procesamiento de señales hasta el despliegue de un modelo de Machine Learning en producción.",
    },
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "AWS Lambda",
      "React",
    ],
    image: "/projects/ecg-ai-serverless.png",
    architectureImage: "/projects/ecg-ai-serverless-architecture.png",
    githubUrl: "https://github.com/mlavinc/ecg-ai-serverless",
    liveUrl: "https://ecg-ai-serverless.vercel.app/",
    caseStudyUrl: "/projects/ecg-ai-serverless",
    caseStudy: {
      en: ecgAiServerlessCaseStudy,
      es: ecgAiServerlessCaseStudyEs,
    },
    status: "completed",
  },
  {
    id: "skill-tracker",
    title: {
      en: "Skill Tracker",
      es: "Skill Tracker",
    },
    subtitle: {
      en: "Personal Skill Management Platform",
      es: "Plataforma Personal de Gestión de Habilidades",
    },
    description: {
      en: "Full-stack learning progress tracker to manage skills, record practice sessions, and visualize improvement over time, with a Go API, React frontend, and PostgreSQL.",
      es: "Aplicación full-stack para gestionar el aprendizaje, registrar sesiones de práctica y visualizar el progreso a lo largo del tiempo, desarrollada con una API en Go, frontend en React y PostgreSQL.",
    },
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    image: "/projects/skill-tracker.png",
    architectureImage: "/projects/skill-tracker-architecture.png",
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    liveUrl: "https://skill-tracker-kappa.vercel.app/",
    caseStudyUrl: "/projects/skill-tracker",
    caseStudy: {
      en: skillTrackerCaseStudy,
      es: skillTrackerCaseStudyEs,
    },
    status: "completed",
  },
];

export function getProjects(locale: Locale = "en"): Project[] {
  return localizedProjects.map((project) => ({
    id: project.id,
    title: pickLocalized(project.title, locale),
    subtitle: project.subtitle
      ? pickLocalized(project.subtitle, locale)
      : undefined,
    description: pickLocalized(project.description, locale),
    technologies: project.technologies,
    image: project.image,
    architectureImage: project.architectureImage,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    caseStudyUrl: project.caseStudyUrl,
    architectureUrl: project.architectureUrl,
    videoUrl: project.videoUrl,
    caseStudy: project.caseStudy
      ? pickLocalized(project.caseStudy, locale)
      : undefined,
    status: project.status,
    featured: project.featured,
  }));
}

/** Default English list for static generation helpers. */
export const projects = getProjects("en");
