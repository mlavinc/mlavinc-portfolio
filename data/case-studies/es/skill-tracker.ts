import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Aplicación full-stack para gestionar habilidades, registrar sesiones de práctica y ver el progreso en el tiempo.",
    "React en Vercel, API REST en Go sobre Render, Neon PostgreSQL en producción y Docker Compose para desarrollo local.",
  ],
  overview: [
    "El progreso de aprendizaje suele vivir en notas dispersas. Skill Tracker centraliza habilidades, historial de práctica y métricas detrás de una API y un dashboard.",
    "La decisión central fue un backend Go por capas — HTTP → controllers → services → repositories → database — para que la lógica de negocio sea testeable y quede desacoplada del transporte y la persistencia.",
  ],
  architectureFlow: [
    "Usuario",
    "Vercel (React)",
    "Render (API Go)",
    "Neon PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "Vite", "Vercel"],
    },
    {
      title: "Backend",
      items: ["API REST en Go", "Docker", "Render"],
    },
    {
      title: "Datos",
      items: ["Neon PostgreSQL", "Usuarios · Skills · Sesiones"],
    },
    {
      title: "Local",
      items: ["Docker Compose"],
    },
  ],
  backendEngineering: {
    layers: [
      "HTTP Layer",
      "Controllers",
      "Services",
      "Repositories",
      "Database",
    ],
    responsibilities: [
      "Controllers gestionan HTTP",
      "Services poseen la lógica de negocio",
      "Repositories abstraen SQL",
      "Models representan entidades del dominio",
    ],
    note: "Las capas evitan que la UI conozca SQL y que la persistencia se mezcle con los handlers.",
  },
  engineeringHighlights: [
    "API Go por capas con contratos REST claros entre SPA y persistencia",
    "Despliegue cloud repartido: Vercel (frontend), Render (API), Neon (PostgreSQL)",
    "API Dockerizada para Render; Docker Compose para paridad local multi-servicio",
  ],
  techStack: [
    {
      title: "Backend",
      items: ["Go", "REST API", "Docker"],
    },
    {
      title: "Frontend",
      items: ["React", "Vite", "TypeScript", "Vercel"],
    },
    {
      title: "Datos e Infra",
      items: ["Neon PostgreSQL", "Render", "Docker Compose"],
    },
  ],
  challengeGroups: [
    {
      title: "Estructura backend mantenible",
      items: [
        "Arquitectura por capas para que controllers, reglas de negocio y SQL no colapsen en un solo lugar",
      ],
    },
    {
      title: "Despliegue frontend / backend separado",
      items: [
        "SPA en Vercel y API en Render, acopladas solo por REST",
      ],
    },
    {
      title: "Paridad local vs cloud",
      items: [
        "Compose en local; API Dockerizada + Postgres administrado en producción",
      ],
    },
  ],
  futureImprovements: [
    "Autenticación y autorización",
    "Objetivos de aprendizaje e hitos",
    "Analíticas de práctica más ricas",
    "Pipeline CI/CD",
  ],
  projectImpact:
    "Demuestra ownership full-stack: diseño de API por capas, modelado relacional y un despliegue cloud multi-servicio práctico.",
};
