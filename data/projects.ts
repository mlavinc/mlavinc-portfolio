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
      "Cloud-native RAG platform: document ingestion, vector search, and grounded AI answers on a serverless AWS stack (Lambda, API Gateway, S3, CloudFront, Bedrock) with Terraform.",
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
    subtitle: "Cloud Infrastructure & DevOps Automation Platform",
    description:
      "Production-oriented AWS lab with Terraform modules, GitHub Actions OIDC, remote state locking, and deploy-on-demand workflows for cost-aware cloud operations.",
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
      "Full-stack skill tracking platform with a layered Go REST API, PostgreSQL, React, and Docker Compose, focused on clean architecture and reproducible multi-service development.",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    caseStudyUrl: "/projects/skill-tracker",
    caseStudy: skillTrackerCaseStudy,
    status: "completed",
  },
];
