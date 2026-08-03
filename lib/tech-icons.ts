const TECH_ICON_MAP: Record<string, string> = {
  Python: "/icons/Python-icon.svg",
  Go: "/icons/golang-icon.svg",
  JavaScript: "/icons/javascript-icon.svg",
  TypeScript: "/icons/typescript-icon.svg",
  SQL: "/icons/SQL-icon.svg",
  React: "/icons/react-icon.svg",
  "Next.js": "/icons/nextjs-icon.svg",
  "Tailwind CSS": "/icons/tailwind-icon.svg",
  "Node.js": "/icons/nodejs-icon.svg",
  FastAPI: "/icons/fastapi-icon.svg",
  Express: "/icons/express-icon.svg",
  PostgreSQL: "/icons/postgresql-icon.svg",
  "Neon PostgreSQL": "/icons/postgresql-icon.svg",
  AWS: "/icons/AWS-icon.svg",
  "AWS Lambda": "/icons/AWS-icon.svg",
  Terraform: "/icons/Terraform-icon.svg",
  Docker: "/icons/Docker-icon.svg",
  "Docker Compose": "/icons/Docker-icon.svg",
  Git: "/icons/Git-icon.svg",
  GitHub: "/icons/GitHub-Icon.svg",
  "GitHub Actions": "/icons/GitHub-Icon.svg",
  Vercel: "/icons/vercel-icon.svg",
  Linux: "/icons/Linux-icon.svg",
  Bash: "/icons/Bash-icon.svg",
  HTML: "/icons/html-icon.svg",
  CSS: "/icons/css3-icon.svg",
  Java: "/icons/java-icon.svg",
};

export function getTechIcon(name: string): string | undefined {
  return TECH_ICON_MAP[name];
}
