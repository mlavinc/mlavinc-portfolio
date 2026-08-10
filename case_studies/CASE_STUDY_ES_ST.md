# Skill Tracker

Skill Tracker es una aplicación full-stack para gestionar habilidades, registrar sesiones de práctica y ver el progreso. El usuario crea un perfil, mantiene skills, anota sesiones y consulta KPIs, gráficos y un ranking en un dashboard React, con API REST en Go y PostgreSQL.

En local se levanta con Docker Compose. En producción el despliegue está partido: React en Vercel, API Go en Docker sobre Render, y Neon PostgreSQL.

[Diagrama de arquitectura: Browser → Vercel / Nginx → API Go → PostgreSQL]
[Demo en vivo: https://skill-tracker-kappa.vercel.app/]

## Motivación / Problema

Lo construí por dos motivos que apuntaban al mismo sitio.

Primero, quería un lugar único para el progreso de aprendizaje. La práctica de skills suele terminar en notas, hojas o en la memoria. Buscaba una superficie pequeña: elegir usuario, gestionar skills, registrar sesiones y ver si el progreso se mueve.

Segundo, quería practicar un camino full-stack que terminara en un despliegue cloud multi-servicio real, no solo en una demo local. La pregunta técnica: ¿puedo mantener API Go, SPA React y Postgres iguales en el portátil (Compose) y en hosts free-tier (Vercel + Render + Neon), con la configuración como único puente?

No hubo cliente externo ni un requisito de negocio inventado. Es un proyecto de portfolio y aprendizaje. El resultado útil es cerrar el ciclo: modelo relacional, backend por capas, SPA, contenedores y una topología cloud partida.

## Arquitectura

```text
Local:   Browser → Nginx (SPA + proxy API) → API Go → PostgreSQL 16
Cloud:   Browser → Vercel (SPA estática) → Render (contenedor Go) → Neon PostgreSQL
```

**Backend.** El entrypoint es `cmd/server`. El enrutado usa `net/http` estándar (sin framework de router). Los handlers validan y llaman a repositorios. Los repositorios poseen el SQL con `database/sql` y `lib/pq`. Los models son structs simples. `internal/services` es un paquete vacío reservado; hoy las reglas viven en handlers y repositorios.

**Dominio.** Tres tablas: `users`, `skills`, `sesiones_practica`, con índices en las FK. Crear una sesión inserta la fila y luego actualiza el `progreso` de la skill (aditivo, acotado 0–100) y `ultima_practica`.

**Frontend.** SPA con React 19 + Vite (JSX, no TypeScript). Páginas de welcome, dashboard, skills, ranking y settings. El usuario activo vive en `localStorage` (sin auth HTTP). Recharts alimenta los gráficos. La API cubre users, skills, sesiones, stats, ranking y `/health`.

[Captura: Dashboard con KPIs, tarjetas de skills y widget de ranking]

## Decisiones de ingeniería

**Handlers y repositorios, sin stack de frameworks.** Mantuve `net/http` y la separación handler → repository para que HTTP no se mezcle con SQL. Trade-off: parsing manual de rutas y aún sin capa de services. Para este dominio era suficiente; un dominio más grueso justificaría un `services` real.

**Despliegue cloud partido en free tiers.** Vercel (estático), Render free (API Docker) y Neon (Postgres) mantienen cada pieza barata. Trade-off: tres plataformas, CORS, `VITE_API_URL` en build time y cold starts.

**Doble configuración de base de datos.** Producción prioriza `DATABASE_URL`. Compose usa `DB_*` con `sslmode=disable`. Mismo binario, reintentos al arrancar y pool pequeño (máx. 10 abiertas) por los límites de Neon free.

**Identidad en el cliente.** Persistir el usuario elegido en `localStorage` evitó auth en la demo. Trade-off: cualquier cliente puede llamar la API con cualquier `user_id`. Vale para portfolio público; no es seguridad multi-tenant.

**Imagen Docker multi-stage de la API.** Binario Go estático (`CGO_ENABLED=0`) en Alpine con certificados CA para TLS a Neon. `render.yaml` fija el Web Service Docker, `/health` y las env vars necesarias.

**Proxy local frente a URL absoluta en producción.** Nginx en Compose (y el proxy de Vite) reenvían rutas de API al backend. En producción el build fija `VITE_API_URL` para llamar a Render. Misma SPA, distinto cableado.

## Desafíos

**TLS desde Alpine hacia Neon.** Una imagen temprana podía abrir socket pero fallar la verificación de certificados contra Postgres gestionado. Añadir `ca-certificates` a la etapa final de Alpine lo resolvió. Compose no lo ve (`sslmode=disable` en la red interna).

**CORS tras partir el deploy.** SPA y API en hosts distintos obligan a orígenes correctos. `CORS_ALLOW_ORIGIN` viene de env (por defecto `*` en local; origen exacto de Vercel en producción). OPTIONS se resuelve en el middleware.

**Cableado local vs cloud de la API.** En local, las URLs relativas van por proxy. En producción, un `VITE_API_URL` vacío manda llamadas al origen de Vercel (solo SPA vía `vercel.json`). Env de build y orden de deploy (Neon → Render → Vercel) lo hacen fiable.

**Límites de free tier.** Render puede dormir (primera petición lenta). Neon free limita conexiones concurrentes, por eso el pool es pequeño. No son bugs de lógica, pero sí definen cómo se siente la demo.

## Resultados

- Producto end-to-end: usuarios, skills, sesiones, stats, ranking y gráficos
- Stack local reproducible: `docker compose up --build` (frontend `:3000`, API `:8080`, Postgres `:5432`)
- Demo pública en Vercel con API en Render y datos en Neon
- Piezas de producción en el repo: `render.yaml`, imagen API con CA, `.env.example`, rewrite SPA

No se afirman métricas de carga ni costes. El resultado verificado es un stack local ejecutable y una demo pública bajo free tier.

[Flujo de despliegue: init.sql en Neon → env + Docker en Render → Vercel root=frontend + VITE_API_URL]

## Qué aprendí

Una app full-stack “simple” se complica en los bordes: trust store TLS, orígenes CORS y config de build frente a runtime. Separar el hosting de la SPA del de la API obliga a un contrato explícito (`VITE_API_URL`, origen permitido, health check) que Compose oculta detrás de un reverse proxy. Biblioteca estándar + repositorios simplificaron el deploy (un binario estático), a costa de que la lógica de dominio viva junto a HTTP y SQL hasta que una capa de services merezca existir. Los free tiers sirven para demos si asumes cold starts y pools ajustados, no un SLA de producción.

## Mejoras futuras

- Autenticación y autorización reales (sustituir la identidad en `localStorage`)
- Crear sesión y actualizar progreso en una transacción (hoy son llamadas secuenciales en el repositorio)
- CI para build/tests de Go y build del frontend (hoy no hay pipeline en el repo)
- Introducir capa de services solo cuando las reglas de dominio superen a los handlers
