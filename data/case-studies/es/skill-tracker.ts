import type { ProjectCaseStudy } from "@/types/project";

export const skillTrackerCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Skill Tracker es una aplicación full-stack para gestionar habilidades, registrar sesiones de práctica y ver el progreso. El usuario crea un perfil, mantiene skills, anota sesiones y consulta KPIs, gráficos y un ranking en un dashboard React, con API REST en Go y PostgreSQL.",
    "En local se levanta con Docker Compose. En producción el despliegue está partido: React en Vercel, API Go en Docker sobre Render, y Neon PostgreSQL.",
  ],
  overview: [
    "Lo construí por dos motivos que apuntaban al mismo sitio. Primero, quería un lugar único para el progreso de aprendizaje: elegir usuario, gestionar skills, registrar sesiones y ver si el progreso se mueve.",
    "Segundo, quería practicar un camino full-stack que terminara en un despliegue cloud multi-servicio real, no solo en una demo local: mantener API Go, SPA React y Postgres iguales en el portátil (Compose) y en hosts free-tier (Vercel + Render + Neon), con la configuración como único puente.",
    "No hubo cliente externo ni un requisito de negocio inventado. El resultado útil es cerrar el ciclo: modelo relacional, backend por capas, SPA, contenedores y una topología cloud partida.",
  ],
  architectureFlow: [
    "Browser",
    "Vercel / Nginx",
    "API Go",
    "PostgreSQL",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React 19", "Vite", "JSX", "Recharts", "Vercel"],
    },
    {
      title: "Backend",
      items: ["Go", "net/http", "Handlers → repositorios", "Docker", "Render"],
    },
    {
      title: "Datos",
      items: ["PostgreSQL 16", "users · skills · sesiones_practica", "Neon"],
    },
    {
      title: "Local",
      items: ["Docker Compose", "Nginx SPA + proxy API"],
    },
  ],
  backendEngineering: {
    layers: [
      "HTTP (net/http)",
      "Handlers",
      "Repositorios",
      "PostgreSQL",
    ],
    responsibilities: [
      "Los handlers validan y llaman a repositorios",
      "Los repositorios poseen el SQL con database/sql y lib/pq",
      "Los models son structs simples",
      "internal/services es un paquete vacío reservado — hoy las reglas viven en handlers y repositorios",
    ],
    note: "Crear una sesión inserta la fila y luego actualiza el progreso de la skill (aditivo, acotado 0–100) y ultima_practica. Un dominio más grueso justificaría un services real.",
  },
  databaseDesign: [
    "Tres tablas: users, skills, sesiones_practica, con índices en las FK",
    "Producción prioriza DATABASE_URL; Compose usa DB_* con sslmode=disable",
    "Mismo binario, reintentos al arrancar y pool pequeño (máx. 10 abiertas) por los límites de Neon free",
  ],
  frontendDevelopment: {
    intro:
      "SPA con React 19 + Vite. Páginas de welcome, dashboard, skills, ranking y settings.",
    items: [
      "El usuario activo vive en localStorage (sin auth HTTP)",
      "Recharts alimenta los gráficos del dashboard",
      "La API cubre users, skills, sesiones, stats, ranking y /health",
      "En local, URLs relativas vía proxy; en producción el build fija VITE_API_URL",
    ],
  },
  engineeringHighlights: [
    "Handlers y repositorios con net/http — sin stack de frameworks de router",
    "Despliegue cloud partido en free tiers: Vercel (estático), Render (API Docker), Neon (Postgres)",
    "Doble configuración de base de datos para el mismo binario en Compose y Neon",
    "Identidad en el cliente para una demo pública — vale para portfolio, no es seguridad multi-tenant",
    "Imagen Docker multi-stage: binario Go estático en Alpine con certificados CA para TLS a Neon",
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
      title: "Datos e infra",
      items: ["Neon PostgreSQL", "Render", "Docker Compose"],
    },
  ],
  challengeGroups: [
    {
      title: "TLS desde Alpine hacia Neon",
      items: [
        "Una imagen temprana podía abrir socket pero fallar la verificación de certificados contra Postgres gestionado. Añadir ca-certificates a la etapa final de Alpine lo resolvió. Compose no lo ve (sslmode=disable en la red interna).",
      ],
    },
    {
      title: "CORS tras partir el deploy",
      items: [
        "SPA y API en hosts distintos obligan a orígenes correctos. CORS_ALLOW_ORIGIN viene de env (por defecto * en local; origen exacto de Vercel en producción). OPTIONS se resuelve en el middleware.",
      ],
    },
    {
      title: "Cableado local vs cloud de la API",
      items: [
        "En local, las URLs relativas van por proxy. En producción, un VITE_API_URL vacío manda llamadas al origen de Vercel (solo SPA). Env de build y orden de deploy (Neon → Render → Vercel) lo hacen fiable.",
      ],
    },
    {
      title: "Límites de free tier",
      items: [
        "Render puede dormir (primera petición lenta). Neon free limita conexiones concurrentes, por eso el pool es pequeño. No son bugs de lógica, pero sí definen cómo se siente la demo.",
      ],
    },
  ],
  futureImprovements: [
    "Autenticación y autorización reales (sustituir la identidad en localStorage)",
    "Crear sesión y actualizar progreso en una transacción",
    "CI para build/tests de Go y build del frontend",
    "Introducir capa de services solo cuando las reglas de dominio superen a los handlers",
  ],
  projectImpact:
    "Producto end-to-end con stack local reproducible y demo pública bajo free tier. Una app full-stack “simple” se complica en los bordes: trust store TLS, orígenes CORS y config de build frente a runtime.",
};
