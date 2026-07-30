import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker is a full-stack learning progress tracker for managing skills, recording practice sessions, and visualizing improvement over time.",
    "The application separates concerns across a React frontend on Vercel, a Go REST API on Render, and Neon PostgreSQL, with Docker Compose for local development.",
  ],
  overview: [
    "Learning progress is often tracked across scattered notes. Skill Tracker centralizes skills, practice history, and metrics behind a structured API and dashboard.",
    "The main design choice was a layered Go backend (HTTP to controllers to services to repositories to database) so business logic stays testable and decoupled from transport and persistence.",
  ],
  features: [
    {
      title: "User profiles",
      items: [
        "Profile management for learners",
        "Per-user skill ownership",
      ],
    },
    {
      title: "Skills and practice",
      items: [
        "Create and track technical skills",
        "Record practice sessions with duration and notes",
        "Accumulated progress per skill",
      ],
    },
    {
      title: "Dashboard",
      items: [
        "Metrics and ranking views",
        "Progress visualization over time",
      ],
    },
    {
      title: "Persistence",
      items: [
        "PostgreSQL relational storage",
        "Durable skill and session data",
      ],
    },
  ],
  architectureFlow: [
    "User",
    "Vercel (React Frontend)",
    "Render (Go API)",
    "Neon PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "Vite", "Deployed on Vercel"],
    },
    {
      title: "Backend",
      items: ["Go REST API", "Docker", "Deployed on Render"],
    },
    {
      title: "Database",
      items: ["Neon PostgreSQL", "SQL over TLS"],
    },
    {
      title: "Local Development",
      items: ["Docker Compose", "Reproducible multi-service setup"],
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
    "Neon PostgreSQL for managed relational storage",
    "Users, skills, and practice sessions as core entities",
    "Structured data modeling for progress tracking",
    "Repository pattern abstraction in the Go API",
  ],
  frontendDevelopment: {
    intro: "The React frontend on Vercel provides:",
    items: [
      "Skill and session management flows",
      "Dashboard metrics and ranking",
      "Responsive UI components",
      "REST communication with the Go API",
    ],
  },
  engineeringHighlights: [
    "Layered Go architecture with separation of concerns",
    "REST API contracts decoupling frontend from persistence",
    "Cloud split: Vercel for the SPA, Render for the API, Neon for PostgreSQL",
    "Dockerized backend for consistent Render deployments",
    "Docker Compose for reproducible local development",
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
      title: "Database",
      items: ["Neon PostgreSQL"],
    },
    {
      title: "Infrastructure",
      items: ["Render", "Docker Compose", "Git"],
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
      title: "Splitting frontend and backend deployment",
      items: [
        "Deployed the React SPA on Vercel and the Go API on Render with clear REST boundaries",
      ],
    },
    {
      title: "Local and cloud parity",
      items: [
        "Used Docker Compose locally and a Dockerized API for Render, with Neon as managed PostgreSQL in production",
      ],
    },
  ],
  futureImprovements: [
    "Authentication and authorization",
    "Learning goals and milestones",
    "Richer analytics on practice history",
    "CI/CD pipeline integration",
  ],
  projectImpact:
    "Skill Tracker demonstrates full-stack engineering across layered backend design, relational modeling, frontend integration, and a practical cloud deployment split.",
};
