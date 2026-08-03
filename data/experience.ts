import { nestleCaseStudy } from "@/data/experience/nestle-case-study";
import type { Experience } from "@/types/experience";
import type { Locale, Localized } from "@/types/i18n";
import { pickLocalized } from "@/types/i18n";

interface LocalizedExperience {
  id: string;
  company: Localized<string>;
  role: Localized<string>;
  description: Localized<string>;
  technologies: string[];
  image?: string;
  caseStudyUrl?: string;
  caseStudy: typeof nestleCaseStudy;
}

const experienceEntries: LocalizedExperience[] = [
  {
    id: "nestle-digital",
    company: {
      en: "Nestlé Chile",
      es: "Nestlé Chile",
    },
    role: {
      en: "Digital & New Tech Intern",
      es: "Practicante Digital & New Tech",
    },
    description: {
      en: "Enterprise automation, internal applications, AI, Power Platform, Python, and digital transformation across real Nestlé Chile business processes.",
      es: "Automatización empresarial, aplicaciones internas, IA, Power Platform, Python y transformación digital en procesos reales de Nestlé Chile.",
    },
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Python",
      "Microsoft 365",
    ],
    image: "/experience/nestle/nestle-it-icon.png",
    caseStudyUrl: "/experience/nestle",
    caseStudy: nestleCaseStudy,
  },
];

export function getExperience(locale: Locale): Experience[] {
  return experienceEntries.map((entry) => ({
    id: entry.id,
    company: pickLocalized(entry.company, locale),
    role: pickLocalized(entry.role, locale),
    description: pickLocalized(entry.description, locale),
    technologies: entry.technologies,
    image: entry.image,
    caseStudyUrl: entry.caseStudyUrl,
    caseStudy: pickLocalized(entry.caseStudy, locale),
  }));
}

export function getExperienceById(
  id: string,
  locale: Locale,
): Experience | undefined {
  return getExperience(locale).find((entry) => entry.id === id);
}
