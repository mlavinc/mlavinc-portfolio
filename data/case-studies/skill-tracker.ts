import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker is a full-stack app for managing skills, logging practice sessions, and viewing progress over time. Users create a profile, maintain a skill list, record sessions, and see KPIs, charts, and a simple ranking on a React dashboard backed by a Go REST API and PostgreSQL.",
    "It runs locally with Docker Compose and in production as a split deploy: React on Vercel, the Go API as a Docker service on Render, and Neon PostgreSQL.",
  ],
  overview: [
    "I built this for two reasons that pulled in the same direction. First, I wanted a single place for learning progress — pick a user, manage skills, log sessions, and see whether progress is actually moving.",
    "Second, I wanted to practice a full-stack path that ends in a real multi-service cloud deploy, not only a local demo: keep a Go API, a React SPA, and Postgres working the same way on a laptop (Compose) and on free-tier friendly cloud hosts (Vercel + Render + Neon), with configuration as the only bridge.",
    "There was no external client and no invented business requirement. The useful outcome is owning the full loop: relational model, layered backend, SPA, containers, and a split production topology.",
  ],
  architectureFlow: [
    "Browser",
    "Vercel / Nginx",
    "Go API",
    "PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React 19", "Vite", "JSX", "Recharts", "Vercel"],
    },
    {
      title: "Backend",
      items: ["Go", "net/http", "Handlers → repositories", "Docker", "Render"],
    },
    {
      title: "Data",
      items: ["PostgreSQL 16", "users · skills · sesiones_practica", "Neon"],
    },
    {
      title: "Local",
      items: ["Docker Compose", "Nginx SPA + API proxy"],
    },
  ],
  backendEngineering: {
    layers: [
      "HTTP (net/http)",
      "Handlers",
      "Repositories",
      "PostgreSQL",
    ],
    responsibilities: [
      "Handlers validate requests and call repositories",
      "Repositories own SQL through database/sql and lib/pq",
      "Models are plain structs",
      "internal/services is an empty package placeholder — business rules live in handlers and repositories today",
    ],
    note: "Creating a session inserts a row and then updates the skill’s progreso (additive, clamped 0–100) and ultima_practica. A thicker domain would justify a real services package.",
  },
  databaseDesign: [
    "Three tables: users, skills, sesiones_practica, with FK indexes",
    "Production prefers DATABASE_URL; local Compose uses DB_* with sslmode=disable",
    "Same binary, startup retries, and a small pool (max 10 open) aimed at Neon free connection limits",
  ],
  frontendDevelopment: {
    intro:
      "React 19 + Vite SPA. Pages cover welcome, dashboard, skills, ranking, and settings.",
    items: [
      "Active user lives in localStorage (no HTTP auth)",
      "Recharts powers dashboard charts",
      "API covers users, skills, sessions, stats, ranking, and /health",
      "Local relative URLs via Nginx/Vite proxy; production builds bake VITE_API_URL",
    ],
  },
  engineeringHighlights: [
    "Handlers and repositories with net/http — no router framework stack",
    "Split cloud deploy on free tiers: Vercel (static), Render (Docker API), Neon (Postgres)",
    "Dual database configuration so the same binary runs in Compose and on Neon",
    "Client-side identity for a public demo — acceptable for portfolio, not multi-tenant security",
    "Docker multi-stage API image: static Go binary on Alpine with CA certificates for Neon TLS",
  ],
  techStack: [
    {
      title: "Backend",
      items: ["Go", "REST API", "Docker"],
    },
    {
      title: "Frontend",
      items: ["React", "Vite", "Vercel"],
    },
    {
      title: "Data & Infra",
      items: ["Neon PostgreSQL", "Render", "Docker Compose"],
    },
  ],
  challengeGroups: [
    {
      title: "TLS from Alpine to Neon",
      items: [
        "An early production image could open a socket but fail certificate verification against managed Postgres. Adding ca-certificates to the final Alpine stage fixed it. Compose never hit this (sslmode=disable on the internal network).",
      ],
    },
    {
      title: "CORS after the split",
      items: [
        "Different SPA and API hosts mean browsers enforce origins. CORS_ALLOW_ORIGIN is env-driven (default * locally; exact Vercel origin in production). OPTIONS is handled in middleware before handlers.",
      ],
    },
    {
      title: "Local vs cloud API wiring",
      items: [
        "Locally, relative URLs work through a proxy. In production an empty VITE_API_URL sends calls to the Vercel origin, which only serves the SPA. Build-time env and deploy order (Neon → Render → Vercel) are part of making that reliable.",
      ],
    },
    {
      title: "Free-tier constraints",
      items: [
        "Render can sleep (slow first request). Neon free limits concurrent connections, so the pool stays small. Not app bugs, but they shape how the live demo feels.",
      ],
    },
  ],
  futureImprovements: [
    "Real authentication and authorization (replace localStorage identity)",
    "A transactional create-session + update-progress path",
    "CI for Go build/tests and frontend build",
    "Introduce a services layer only when domain rules outgrow handlers",
  ],
  projectImpact:
    "Working end-to-end product with a reproducible Compose stack and a public demo under free-tier constraints. A “simple” full-stack app gets hard at the boundaries: TLS trust stores, CORS origins, and build-time vs runtime config.",
};
