import type { Project } from "@/types/project";
import { cloudOperationsLabCaseStudy } from "@/data/case-studies/cloud-operations-lab";
import { documentKnowledgeAgentCaseStudy } from "@/data/case-studies/document-knowledge-agent";
import { ecgAiServerlessCaseStudy } from "@/data/case-studies/ecg-ai-serverless";
import { skillTrackerCaseStudy } from "@/data/case-studies/skill-tracker";

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
    image: "/projects/document-knowledge-agent.png",
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
    subtitle: "Serverless ECG Analysis Platform with Machine Learning",
    description:
      "A machine learning-powered platform for analyzing ECG signals and classifying cardiac patterns with serverless cloud architecture.",
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "AWS Lambda",
      "React",
    ],
    githubUrl: "https://github.com/mlavinc/ecg-ai-serverless",
    caseStudyUrl: "/projects/ecg-ai-serverless",
    caseStudy: ecgAiServerlessCaseStudy,
    status: "completed",
  },
  {
    id: "skill-tracker",
    title: "Skill Tracker",
    subtitle: "Personal Skill Management Platform",
    description:
      "A full-stack platform to organize, track, and manage technical skills with scalable engineering practices.",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    caseStudyUrl: "/projects/skill-tracker",
    caseStudy: skillTrackerCaseStudy,
    status: "completed",
  },
];
