import type { Project } from "@/types/project";
import { cloudOperationsLabCaseStudy } from "@/data/case-studies/cloud-operations-lab";
import { documentKnowledgeAgentCaseStudy } from "@/data/case-studies/document-knowledge-agent";
import { ecgAiServerlessCaseStudy } from "@/data/case-studies/ecg-ai-serverless";
import { skillTrackerCaseStudy } from "@/data/case-studies/skill-tracker";

export const projects: Project[] = [
  {
    id: "document-knowledge-agent",
    title: "Document Knowledge Agent",
    subtitle: "with Portfolio Assistant extension",
    description:
      "Production-oriented Retrieval-Augmented Generation platform built with AWS serverless architecture, OpenAI embeddings, vector search, and a portfolio-integrated AI assistant.",
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
    caseStudy: documentKnowledgeAgentCaseStudy,
    featured: true,
    status: "completed",
  },
  {
    id: "cloud-operations-lab",
    title: "Cloud Operations Lab",
    subtitle: "AWS · Terraform · Cloud / Platform Engineering",
    description:
      "AWS operations platform defined with modular Terraform, secure SSM access, and a GitHub Actions pipeline with OIDC and manual approval before apply.",
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
    caseStudy: cloudOperationsLabCaseStudy,
    featured: true,
    status: "completed",
  },
  {
    id: "ecg-ai-serverless",
    title: "ECG-AI Serverless",
    subtitle: "Serverless ECG Analysis Platform with Machine Learning",
    description:
      "End-to-end ECG classification (~75.5% balanced accuracy) with serverless inference on AWS Lambda, API Gateway, and Terraform: from signal processing to deployable ML software.",
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
    caseStudy: ecgAiServerlessCaseStudy,
    status: "completed",
  },
  {
    id: "skill-tracker",
    title: "Skill Tracker",
    subtitle: "Personal Skill Management Platform",
    description:
      "Full-stack learning progress tracker to manage skills, record practice sessions, and visualize improvement over time, with a Go API, React frontend, and PostgreSQL.",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    image: "/projects/skill-tracker.png",
    architectureImage: "/projects/skill-tracker-architecture.png",
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    liveUrl: "https://skill-tracker-kappa.vercel.app/",
    caseStudyUrl: "/projects/skill-tracker",
    caseStudy: skillTrackerCaseStudy,
    status: "completed",
  },
];
