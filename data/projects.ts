import type { Project } from "@/types/project";
import { cloudOperationsLabCaseStudy } from "@/data/case-studies/cloud-operations-lab";
import { documentKnowledgeAgentCaseStudy } from "@/data/case-studies/document-knowledge-agent";

export const projects: Project[] = [
  {
    id: "document-knowledge-agent",
    title: "Document Knowledge Agent",
    subtitle:
      "Intelligent Document Processing & AI Knowledge Retrieval Platform",
    description:
      "A cloud-native RAG platform that transforms documents into interactive knowledge sources.",
    technologies: [
      "Python",
      "Node.js",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "React",
    ],
    githubUrl: "https://github.com/mlavinc/document-knowledge-agent",
    caseStudyUrl: "/projects/document-knowledge-agent",
    caseStudy: documentKnowledgeAgentCaseStudy,
    featured: true,
    status: "completed",
  },
  {
    id: "cloud-operations-lab",
    title: "Cloud Operations Lab",
    subtitle: "Cloud Infrastructure & DevOps Automation Platform",
    description:
      "A production-oriented AWS environment using Infrastructure as Code, DevOps automation, and modern cloud practices.",
    technologies: ["AWS", "Terraform", "Docker", "GitHub Actions", "Linux"],
    githubUrl: "https://github.com/mlavinc/cloud-operations-lab",
    caseStudyUrl: "/projects/cloud-operations-lab",
    caseStudy: cloudOperationsLabCaseStudy,
    featured: true,
    status: "completed",
  },
  {
    id: "ecg-ai-serverless",
    title: "ECG-AI Serverless",
    description:
      "Serverless pipeline for ECG signal analysis using cloud services and machine learning models.",
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "AWS Lambda",
      "React",
    ],
    githubUrl: "https://github.com/mlavinc/ecg-ai-serverless",
    status: "completed",
  },
  {
    id: "skill-tracker",
    title: "Skill Tracker",
    description:
      "Full-stack application for tracking learning progress, skills, and professional growth over time.",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    status: "completed",
  },
];
