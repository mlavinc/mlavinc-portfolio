import type { Locale } from "@/types/i18n";
import type { SkillCategory } from "@/types/skill";
import { t } from "@/lib/i18n/dictionary";

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return [
    {
      id: "languages",
      title: t(locale, "skills.languages"),
      skills: ["Python", "Go", "JavaScript", "TypeScript", "SQL"],
    },
    {
      id: "frontend",
      title: t(locale, "skills.frontend"),
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "backend",
      title: t(locale, "skills.backend"),
      skills: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL"],
    },
    {
      id: "cloud-infrastructure",
      title: t(locale, "skills.cloud"),
      skills: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    },
    {
      id: "ai-data",
      title: t(locale, "skills.ai"),
      skills: [
        "Machine Learning",
        "RAG",
        "LangChain",
        "Ollama",
        "Vector Databases",
      ],
    },
  ];
}

export const skillCategories = getSkillCategories("en");
