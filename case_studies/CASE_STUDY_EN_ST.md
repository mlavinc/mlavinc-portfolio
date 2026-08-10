# Skill Tracker

Skill Tracker is a full-stack app for managing skills, logging practice sessions, and viewing progress over time. Users create a profile, maintain a skill list, record sessions, and see KPIs, charts, and a simple ranking on a React dashboard backed by a Go REST API and PostgreSQL.

It runs locally with Docker Compose and in production as a split deploy: React on Vercel, the Go API as a Docker service on Render, and Neon PostgreSQL.

[Architecture diagram: Browser → Vercel / Nginx → Go API → PostgreSQL]
[Live demo: https://skill-tracker-kappa.vercel.app/]

## Motivation / Problem

I built this for two reasons that pulled in the same direction.

First, I wanted a single place for learning progress. Skill practice usually ends up in notes, spreadsheets, or memory. I wanted a small product surface: pick a user, manage skills, log sessions, and see whether progress is actually moving.

Second, I wanted to practice a full-stack path that ends in a real multi-service cloud deploy, not only a local demo. The technical question was: can I keep a Go API, a React SPA, and Postgres working the same way on a laptop (Compose) and on free-tier friendly cloud hosts (Vercel + Render + Neon), with configuration as the only bridge?

There was no external client and no invented business requirement. This is a portfolio and learning project. The useful outcome is owning the full loop: relational model, layered backend, SPA, containers, and a split production topology.

## Architecture

```text
Local:   Browser → Nginx (SPA + API proxy) → Go API → PostgreSQL 16
Cloud:   Browser → Vercel (static SPA) → Render (Go container) → Neon PostgreSQL
```

**Backend.** Entry point is `cmd/server`. Routing uses Go’s standard `net/http` (no router framework). Handlers validate requests and call repositories. Repositories own SQL through `database/sql` and `lib/pq`. Models are plain structs. `internal/services` is an empty package placeholder; business rules live in handlers and repositories today.

**Domain.** Three tables: `users`, `skills`, `sesiones_practica`, with FK indexes. Creating a session inserts a row and then updates the skill’s `progreso` (additive, clamped 0–100) and `ultima_practica`.

**Frontend.** React 19 + Vite SPA (JSX, not TypeScript). Pages cover welcome, dashboard, skills, ranking, and settings. The active user lives in `localStorage` (no HTTP auth). Recharts powers dashboard charts. The API covers users, skills, sessions, stats, ranking, and `/health`.

[Screenshot: Dashboard with KPIs, skill cards, and ranking widget]

## Engineering Decisions

**Handlers and repositories, not a framework stack.** I kept `net/http` and a handler → repository split so HTTP stays out of SQL. Trade-off: manual path parsing and no dedicated service layer yet. For this domain size that was fine; a thicker domain would justify a real `services` package.

**Split cloud deploy on free tiers.** Vercel (static), Render free (Docker API), Neon (Postgres) keeps each piece cheap. Trade-off: three platforms, CORS, build-time `VITE_API_URL`, and API cold starts.

**Dual database configuration.** Production prefers `DATABASE_URL`. Local Compose uses `DB_*` with `sslmode=disable`. Same binary, startup retries, and a small pool (max 10 open) aimed at Neon free connection limits.

**Client-side identity.** Persisting the selected user in `localStorage` avoided auth for a demo. Trade-off: any client can call the API for any `user_id`. Acceptable for a public portfolio demo, not multi-tenant security.

**Docker multi-stage API image.** Static Go binary (`CGO_ENABLED=0`) on Alpine with CA certificates for Neon TLS. `render.yaml` pins the Docker Web Service, `/health`, and required env vars.

**Local proxy vs production absolute URL.** Compose Nginx (and Vite’s dev proxy) forward API paths to the backend. Production builds bake `VITE_API_URL` so the browser calls Render directly. Same SPA, different wiring.

## Challenges

**TLS from Alpine to Neon.** An early production image could open a socket but fail certificate verification against managed Postgres. Adding `ca-certificates` to the final Alpine stage fixed it. Compose never hit this (`sslmode=disable` on the internal network).

**CORS after the split.** Different SPA and API hosts mean browsers enforce origins. `CORS_ALLOW_ORIGIN` is env-driven (default `*` locally; exact Vercel origin in production). OPTIONS is handled in middleware before handlers.

**Local vs cloud API wiring.** Locally, relative URLs work through a proxy. In production an empty `VITE_API_URL` sends calls to the Vercel origin, which only serves the SPA (`vercel.json` rewrite). Build-time env and deploy order (Neon schema → Render → Vercel) are part of making that reliable.

**Free-tier constraints.** Render can sleep (slow first request). Neon free limits concurrent connections, so the pool stays small. Not app bugs, but they shape how the live demo feels.

## Results

- Working end-to-end product: users, skills, sessions, stats, ranking, dashboard charts
- Reproducible local stack: `docker compose up --build` (frontend `:3000`, API `:8080`, Postgres `:5432`)
- Live demo on Vercel with API on Render and data on Neon
- Production readiness pieces in-repo: `render.yaml`, CA-enabled API image, `.env.example` for both sides, SPA rewrite for client routing

No load-test numbers or cost dashboards are claimed here. The verified outcome is a runnable local stack and a public demo under free-tier constraints.

[Deployment flow: Neon init.sql → Render env + Docker → Vercel root=frontend + VITE_API_URL]

## What I Learned

A “simple” full-stack app gets hard at the boundaries: TLS trust stores, CORS origins, and build-time vs runtime config. Separating SPA hosting from the API forces an explicit contract (`VITE_API_URL`, allowed origin, health check) that Compose hides behind a reverse proxy. Standard library + repositories simplified deploy (one static binary), at the cost of domain logic sitting next to HTTP and SQL until a services layer earns its place. Free tiers work for demos if you design for cold starts and tight pools instead of pretending they are production SLAs.

## Future Improvements

- Real authentication and authorization (replace `localStorage` identity)
- A transactional create-session + update-progress path (today they are sequential calls in the repository)
- CI for Go build/tests and frontend build (none in the repo today)
- Introduce a services layer only when domain rules outgrow handlers
