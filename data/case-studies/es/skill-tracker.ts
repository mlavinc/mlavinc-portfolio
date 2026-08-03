import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker es una aplicación full-stack para gestionar habilidades, registrar sesiones de práctica y visualizar el progreso de aprendizaje a lo largo del tiempo.",
    "La aplicación separa claramente sus responsabilidades mediante un frontend desarrollado en React y desplegado en Vercel, una API REST escrita en Go ejecutándose en Render y una base de datos PostgreSQL administrada por Neon, utilizando Docker Compose para el entorno de desarrollo local.",
  ],
  overview: [
    "El progreso de aprendizaje suele distribuirse entre notas, documentos y herramientas desconectadas. Skill Tracker centraliza las habilidades, el historial de práctica y las métricas de progreso mediante una API estructurada y un panel interactivo.",
    "La principal decisión de diseño fue implementar una arquitectura backend por capas en Go (HTTP → Controllers → Services → Repositories → Database), permitiendo mantener la lógica de negocio desacoplada de la comunicación HTTP y de la persistencia de datos.",
  ],
  features: [
    {
      title: "Gestión de usuarios",
      items: [
        "Administración de perfiles de usuario",
        "Gestión de habilidades por usuario",
      ],
    },
    {
      title: "Habilidades y práctica",
      items: [
        "Creación y seguimiento de habilidades técnicas",
        "Registro de sesiones de práctica con duración y observaciones",
        "Seguimiento del progreso acumulado por habilidad",
      ],
    },
    {
      title: "Dashboard",
      items: [
        "Visualización de métricas y ranking",
        "Seguimiento del progreso a lo largo del tiempo",
      ],
    },
    {
      title: "Persistencia",
      items: [
        "Almacenamiento relacional mediante PostgreSQL",
        "Persistencia de habilidades y sesiones de práctica",
      ],
    },
  ],
  architectureFlow: [
    "Usuario",
    "Vercel (Frontend React)",
    "Render (API Go)",
    "Neon PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "Vite", "Desplegado en Vercel"],
    },
    {
      title: "Backend",
      items: ["API REST en Go", "Docker", "Desplegado en Render"],
    },
    {
      title: "Base de Datos",
      items: ["Neon PostgreSQL", "SQL sobre TLS"],
    },
    {
      title: "Desarrollo Local",
      items: ["Docker Compose", "Entorno reproducible con múltiples servicios"],
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
      "Los Controllers gestionan la comunicación HTTP",
      "Los Services implementan la lógica de negocio",
      "Los Repositories encapsulan el acceso a la base de datos",
      "Los Models representan las entidades de la aplicación",
    ],
    note: "Esta arquitectura mejora la mantenibilidad, facilita las pruebas y permite extender el sistema sin acoplar la interfaz de usuario a los detalles de SQL o la persistencia.",
  },
  databaseDesign: [
    "Neon PostgreSQL como base de datos relacional administrada",
    "Usuarios, habilidades y sesiones de práctica como entidades principales",
    "Modelo de datos estructurado para el seguimiento del progreso",
    "Patrón Repository implementado en la API desarrollada en Go",
  ],
  frontendDevelopment: {
    intro:
      "La aplicación cliente desarrollada en React y desplegada en Vercel ofrece:",
    items: [
      "Gestión de habilidades y sesiones de práctica",
      "Dashboard con métricas y ranking",
      "Componentes responsivos",
      "Comunicación mediante API REST con el backend desarrollado en Go",
    ],
  },
  engineeringHighlights: [
    "Arquitectura backend en Go basada en separación de responsabilidades",
    "Contratos REST desacoplados entre frontend y persistencia",
    "Arquitectura cloud distribuida: Vercel para el frontend, Render para la API y Neon PostgreSQL como base de datos administrada",
    "Backend contenerizado mediante Docker para despliegues consistentes en Render",
    "Desarrollo local reproducible utilizando Docker Compose",
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
      title: "Base de Datos",
      items: ["Neon PostgreSQL"],
    },
    {
      title: "Infraestructura",
      items: ["Render", "Docker Compose", "Git"],
    },
  ],
  challengeGroups: [
    {
      title: "Diseñar una estructura backend mantenible",
      items: [
        "Implementación de una arquitectura por capas para evitar código altamente acoplado y facilitar la evolución del sistema",
      ],
    },
    {
      title: "Separar el despliegue del frontend y backend",
      items: [
        "Despliegue de la SPA en Vercel y de la API en Render, manteniendo límites claros mediante una API REST",
      ],
    },
    {
      title: "Consistencia entre desarrollo local y producción",
      items: [
        "Uso de Docker Compose durante el desarrollo local y una API contenerizada para Render, utilizando Neon PostgreSQL como base de datos administrada en producción",
      ],
    },
  ],
  futureImprovements: [
    "Autenticación y autorización de usuarios",
    "Objetivos de aprendizaje y seguimiento de hitos",
    "Analíticas más avanzadas sobre el historial de práctica",
    "Integración de un pipeline CI/CD",
  ],
  projectImpact:
    "Skill Tracker demuestra competencias en ingeniería full-stack mediante el diseño de una arquitectura backend por capas, modelado de bases de datos relacionales, integración frontend-backend y una estrategia de despliegue distribuida en la nube.",
};
