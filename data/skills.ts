import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "Go", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Terraform", "Docker", "GitHub Actions"],
  },
  {
    id: "ai-data",
    title: "AI/Data",
    skills: [
      "Machine Learning",
      "RAG",
      "LangChain",
      "Ollama",
      "Vector Databases",
    ],
  },
];
