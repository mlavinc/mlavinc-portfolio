import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker is a full-stack web application designed to help users organize, track, and manage their technical skills through a structured and intuitive platform.",
    "The project demonstrates modern software engineering practices including backend architecture, REST API design, relational database modeling, frontend integration, and containerized development.",
    "The objective was to build a maintainable application from scratch following scalable engineering principles.",
  ],
  overview: [
    "Developers and professionals often track their knowledge across scattered notes and documents.",
    "Skill Tracker provides a centralized platform to organize skills, categorize knowledge, and monitor professional growth through a structured application.",
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
    note: "This improves maintainability, testing, and future extensibility.",
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
    "Clean architecture principles",
    "Separation of concerns",
    "REST API design",
    "Frontend/backend decoupling",
    "Containerized development environment",
    "Reproducible local setup with Docker Compose",
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
    "Skill Tracker demonstrates practical full-stack engineering skills by combining backend development, database design, frontend integration, and software architecture principles.",
};
