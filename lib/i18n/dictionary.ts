import type { Locale, Localized } from "@/types/i18n";

export const uiDictionary = {
  nav: {
    experience: { en: "Experience", es: "Experiencia" },
    about: { en: "About", es: "Sobre mí" },
    projects: { en: "Projects", es: "Proyectos" },
    skills: { en: "Skills", es: "Habilidades" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    role: {
      en: "Full-Stack Engineer | Cloud & AI",
      es: "Ingeniero Full-Stack | Cloud e IA",
    },
    tagline: {
      en: "Engineering cloud-native systems, AI applications and scalable software solutions.",
      es: "Desarrollando sistemas cloud-native, aplicaciones impulsadas por inteligencia artificial y soluciones de software escalables.",
    },
    focus: {
      en: "Focused on cloud engineering, AWS architecture, AI-powered applications, backend development, and Infrastructure as Code, with full-stack delivery when the product requires it.",
      es: "Enfocado en ingeniería cloud, arquitectura en AWS, aplicaciones potenciadas por IA, desarrollo backend e Infraestructura como Código (IaC), complementando con desarrollo full-stack cuando el producto lo requiere.",
    },
    viewProjects: { en: "View Projects", es: "Ver Proyectos" },
    downloadCv: { en: "Download CV", es: "Descargar CV" },
    linkedIn: { en: "LinkedIn", es: "LinkedIn" },
  },
  experience: {
    title: { en: "Professional Experience", es: "Experiencia Profesional" },
    caseStudy: { en: "Case Study", es: "Caso de Estudio" },
  },
  about: {
    title: { en: "About", es: "Sobre mí" },
    intro: {
      en: "I'm a Computer Engineering student focused on building full-stack applications, cloud solutions, and AI-powered systems. I enjoy designing scalable backends, exploring cloud architectures, and turning ideas into functional products.",
      es: "Soy estudiante de Ingeniería Civil en Computación e Informática, con interés en el desarrollo de aplicaciones full-stack, soluciones cloud y sistemas impulsados por inteligencia artificial. Disfruto diseñando backends escalables, explorando arquitecturas cloud y transformando ideas en productos funcionales.",
    },
  },
  projects: {
    title: { en: "Projects", es: "Proyectos" },
    caseStudy: { en: "Case Study", es: "Caso de Estudio" },
    liveDemo: { en: "Live Demo", es: "Demo en Vivo" },
    github: { en: "GitHub", es: "GitHub" },
  },
  skills: {
    title: { en: "Skills", es: "Habilidades" },
    languages: { en: "Languages", es: "Lenguajes" },
    frontend: { en: "Frontend", es: "Frontend" },
    backend: { en: "Backend", es: "Backend" },
    cloud: { en: "Cloud & Infrastructure", es: "Cloud e Infraestructura" },
    ai: { en: "AI / Data", es: "IA / Datos" },
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    message: {
      en: "Let's talk?",
      es: "¿Conversemos?",
    },
    email: { en: "Email", es: "Correo electrónico" },
    linkedIn: { en: "LinkedIn", es: "LinkedIn" },
    github: { en: "GitHub", es: "GitHub" },
  },
  footer: {
    builtWith: {
      en: "Built with Next.js and Tailwind CSS",
      es: "Construido con Next.js y Tailwind CSS",
    },
  },
  caseStudy: {
    backToProjects: { en: "Back to Projects", es: "Volver a Proyectos" },
    backToExperience: {
      en: "Back to Experience",
      es: "Volver a Experiencia",
    },
    overview: { en: "Overview", es: "Descripción General" },
    architecture: { en: "Architecture", es: "Arquitectura" },
    infrastructureAsCode: {
      en: "Infrastructure as Code",
      es: "Infraestructura como Código",
    },
    securityDecisions: {
      en: "Security Decisions",
      es: "Decisiones de Seguridad",
    },
    cicdWorkflow: { en: "CI/CD Workflow", es: "Flujo de CI/CD" },
    operationsObservability: {
      en: "Operations and Observability",
      es: "Operaciones y Observabilidad",
    },
    keyFeatures: { en: "Key Features", es: "Características Principales" },
    mlPipeline: {
      en: "Machine Learning Pipeline",
      es: "Pipeline de Machine Learning",
    },
    backendEngineering: {
      en: "Backend Engineering",
      es: "Ingeniería Backend",
    },
    backendIntro: {
      en: "The backend follows a layered architecture:",
      es: "El backend sigue una arquitectura por capas:",
    },
    databaseDesign: { en: "Database Design", es: "Diseño de Base de Datos" },
    frontendDevelopment: {
      en: "Frontend Development",
      es: "Desarrollo Frontend",
    },
    engineeringHighlights: {
      en: "Engineering Highlights",
      es: "Aspectos Destacados de Ingeniería",
    },
    cloudArchitecture: {
      en: "Cloud Architecture",
      es: "Arquitectura Cloud",
    },
    technologyStack: { en: "Technology Stack", es: "Stack Tecnológico" },
    challenges: { en: "Challenges", es: "Desafíos Técnicos" },
    futureImprovements: {
      en: "Future Improvements",
      es: "Mejoras Futuras",
    },
    projectImpact: { en: "Project Impact", es: "Impacto del Proyecto" },
    technologies: { en: "Technologies", es: "Tecnologías" },
    liveDemo: { en: "Live Demo", es: "Demo en Vivo" },
    architectureLink: { en: "Architecture", es: "Arquitectura" },
    video: { en: "Video", es: "Video" },
    impact: { en: "Impact", es: "Impacto" },
    featuredSolutions: {
      en: "Featured Solutions",
      es: "Soluciones Destacadas",
    },
    lessonsLearned: { en: "Lessons Learned", es: "Aprendizajes" },
    additionalContributions: {
      en: "Additional Contributions",
      es: "Contribuciones Adicionales",
    },
    problem: { en: "Problem", es: "Problema" },
    solution: { en: "Solution", es: "Solución" },
    architectureImplementation: {
      en: "Architecture / Implementation",
      es: "Arquitectura / Implementación",
    },
    businessImpact: { en: "Business Impact", es: "Impacto de Negocio" },
    previousImage: { en: "Previous image", es: "Imagen anterior" },
    nextImage: { en: "Next image", es: "Imagen siguiente" },
  },
  lang: {
    en: { en: "EN", es: "EN" },
    es: { en: "ES", es: "ES" },
    switchTo: {
      en: "Switch language",
      es: "Cambiar idioma",
    },
  },
} as const;

type DictionaryLeaf = Localized<string>;

type NestedDictionary = {
  [key: string]: DictionaryLeaf | NestedDictionary;
};

function resolvePath(
  dict: NestedDictionary,
  path: string,
): DictionaryLeaf | undefined {
  const parts = path.split(".");
  let current: NestedDictionary | DictionaryLeaf | undefined = dict;

  for (const part of parts) {
    if (!current || typeof current !== "object" || !(part in current)) {
      return undefined;
    }
    current = (current as NestedDictionary)[part];
  }

  if (
    current &&
    typeof current === "object" &&
    "en" in current &&
    "es" in current
  ) {
    return current as DictionaryLeaf;
  }

  return undefined;
}

export function t(locale: Locale, path: string): string {
  const leaf = resolvePath(uiDictionary as unknown as NestedDictionary, path);
  return leaf?.[locale] ?? path;
}
