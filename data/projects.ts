import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cloud-api-platform",
    title: "Cloud API Platform",
    description:
      "Scalable REST API with authentication, rate limiting, and observability for cloud-native workloads.",
    technologies: ["Node.js", "TypeScript", "AWS", "PostgreSQL"],
    repoUrl: "https://github.com/mlavinc",
    featured: true,
    status: "completed",
  },
  {
    id: "ai-document-assistant",
    title: "AI Document Assistant",
    description:
      "LLM-powered tool that summarizes documents and answers questions with retrieval-augmented generation.",
    technologies: ["Python", "FastAPI", "OpenAI", "Docker"],
    repoUrl: "https://github.com/mlavinc",
    featured: true,
    status: "in-progress",
  },
  {
    id: "devops-dashboard",
    title: "DevOps Dashboard",
    description:
      "Internal dashboard for monitoring deployments, CI status, and infrastructure health in one place.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/mlavinc",
    status: "completed",
  },
  {
    id: "realtime-chat-service",
    title: "Realtime Chat Service",
    description:
      "WebSocket-based messaging service with presence, rooms, and horizontal scaling support.",
    technologies: ["Go", "Redis", "WebSockets", "Kubernetes"],
    repoUrl: "https://github.com/mlavinc",
    status: "completed",
  },
];
