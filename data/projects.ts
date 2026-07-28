import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "document-knowledge-agent",
    title: "Document Knowledge Agent",
    description:
      "AI agent for document understanding, retrieval, and question answering over structured knowledge bases.",
    technologies: ["Python", "RAG", "LangChain", "Vector Databases"],
    githubUrl: "https://github.com/mlavinc/document-knowledge-agent",
    featured: true,
    status: "completed",
  },
  {
    id: "cloud-operations-lab",
    title: "Cloud Operations Lab",
    description:
      "Hands-on cloud operations environment for automation, monitoring, and infrastructure workflows.",
    technologies: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/mlavinc/cloud-operations-lab",
    featured: true,
    status: "completed",
  },
  {
    id: "ecg-ai-serverless",
    title: "ECG-AI Serverless",
    description:
      "Serverless pipeline for ECG signal analysis using cloud services and machine learning models.",
    technologies: ["Python", "AWS", "Machine Learning", "Serverless"],
    githubUrl: "https://github.com/mlavinc/ecg-ai-serverless",
    status: "completed",
  },
  {
    id: "skill-tracker",
    title: "Skill Tracker",
    description:
      "Full-stack application for tracking learning progress, skills, and professional growth over time.",
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/mlavinc/skill-tracker",
    status: "completed",
  },
];
