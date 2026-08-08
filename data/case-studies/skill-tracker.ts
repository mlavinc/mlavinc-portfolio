import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudy: ProjectCaseStudy = {
  introduction: [
    "A full-stack app for tracking skills, practice sessions, and progress over time.",
    "React on Vercel, a Go REST API on Render, Neon PostgreSQL in production, and Docker Compose for local development.",
  ],
  overview: [
    "Learning progress usually lives in scattered notes. Skill Tracker puts skills, session history, and metrics behind one API and dashboard.",
    "The core design choice was a layered Go backend — HTTP → controllers → services → repositories → database — so business logic stays testable and independent of transport and persistence.",
  ],
  architectureFlow: [
    "User",
    "Vercel (React)",
    "Render (Go API)",
    "Neon PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "Vite", "Vercel"],
    },
    {
      title: "Backend",
      items: ["Go REST API", "Docker", "Render"],
    },
    {
      title: "Data",
      items: ["Neon PostgreSQL", "Users · Skills · Sessions"],
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
      "Controllers handle HTTP",
      "Services own business logic",
      "Repositories abstract SQL",
      "Models represent domain entities",
    ],
    note: "Layering keeps the UI from knowing about SQL, and keeps persistence out of request handlers.",
  },
  engineeringHighlights: [
    "Layered Go API with clear REST contracts between SPA and persistence",
    "Cloud split: Vercel (frontend), Render (API), Neon (PostgreSQL)",
    "Dockerized API for Render; Docker Compose for local multi-service parity",
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
      title: "Data & Infra",
      items: ["Neon PostgreSQL", "Render", "Docker Compose"],
    },
  ],
  challengeGroups: [
    {
      title: "Maintainable backend structure",
      items: [
        "Layered architecture so controllers, business rules, and SQL do not collapse into one place",
      ],
    },
    {
      title: "Split frontend / backend deploy",
      items: [
        "SPA on Vercel and API on Render, coupled only through REST",
      ],
    },
    {
      title: "Local vs cloud parity",
      items: [
        "Compose locally; Dockerized API + managed Postgres in production",
      ],
    },
  ],
  futureImprovements: [
    "Authentication and authorization",
    "Learning goals and milestones",
    "Richer practice analytics",
    "CI/CD pipeline",
  ],
  projectImpact:
    "Shows full-stack ownership: layered API design, relational modeling, and a practical multi-service cloud deploy.",
};
