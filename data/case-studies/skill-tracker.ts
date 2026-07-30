import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker is a full-stack application for organizing and tracking technical skills, built to practice maintainable backend architecture rather than a thin CRUD demo.",
    "The stack (Go REST API, PostgreSQL, React, and Docker Compose) was chosen to enforce clear API contracts, relational modeling, and a reproducible multi-service local environment.",
  ],
  overview: [
    "Skill knowledge often lives in scattered notes. Skill Tracker centralizes that data behind a structured API and UI.",
    "The key design decision was a layered Go backend (HTTP → controllers → services → repositories → database) so business logic stays testable and decoupled from transport and persistence details.",
  ],
  architectureFlow: [
    "Frontend",
    "REST API",
    "Go Backend",
    "PostgreSQL Database",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "Vite", "TypeScript"],
    },
    {
      title: "Backend",
      items: ["Go REST API"],
    },
    {
      title: "Database",
      items: ["PostgreSQL"],
    },
    {
      title: "Development Environment",
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
      "Controllers handle HTTP communication",
      "Services contain business logic",
      "Repositories abstract database operations",
      "Models represent application entities",
    ],
    note: "Layering improves maintainability, testing, and future extensibility without coupling the UI to SQL details.",
  },
  databaseDesign: [
    "PostgreSQL relational database",
    "Persistent skill management",
    "Structured data modeling",
    "Repository pattern abstraction",
  ],
  frontendDevelopment: {
    intro: "The React frontend provides:",
    items: [
      "Skill visualization",
      "User interaction flows",
      "Responsive components",
      "Communication with backend APIs",
    ],
  },
  engineeringHighlights: [
    "Layered Go architecture with separation of concerns",
    "REST API contracts decoupling frontend from persistence",
    "PostgreSQL for structured, durable skill data",
    "Docker Compose orchestration of frontend, backend, and database",
    "API-first development with a reproducible local setup",
  ],
  techStack: [
    {
      title: "Backend",
      items: ["Go", "REST API", "PostgreSQL"],
    },
    {
      title: "Frontend",
      items: ["React", "Vite", "TypeScript"],
    },
    {
      title: "Infrastructure",
      items: ["Docker", "Docker Compose"],
    },
    {
      title: "Development",
      items: ["Git", "API-first development"],
    },
  ],
  challengeGroups: [
    {
      title: "Designing a maintainable backend structure",
      items: [
        "Implemented layered architecture to avoid tightly coupled code",
      ],
    },
    {
      title: "Managing multiple services",
      items: [
        "Used Docker Compose to orchestrate frontend, backend, and database",
      ],
    },
    {
      title: "Frontend-backend communication",
      items: [
        "Designed clear REST API contracts between application layers",
      ],
    },
  ],
  futureImprovements: [
    "Authentication and authorization",
    "Skill history tracking",
    "Learning goals and milestones",
    "Analytics dashboard",
    "AWS cloud deployment",
    "CI/CD pipeline integration",
  ],
  projectImpact:
    "Skill Tracker demonstrates full-stack engineering discipline: layered backend design, relational modeling, frontend integration, and containerized multi-service development.",
};
