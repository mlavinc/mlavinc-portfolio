import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Document Knowledge Agent is a Retrieval-Augmented Generation (RAG) system for PDF knowledge bases. Users upload a document, ask questions in natural language, and receive answers grounded in retrieved chunks, with source metadata pointing back to the documents that supported the response.",
    "The same backend also powers a second surface: an “Ask me anything” portfolio assistant that queries an isolated corpus (profile, experience, projects) instead of user-uploaded papers.",
  ],
  overview: [
    "I built this project to learn how a full RAG pipeline works in practice, not only as a notebook experiment. The starting point was an ArXiv-oriented agent: search papers, ingest PDFs, embed them locally with Ollama and Chroma, and answer questions over that corpus.",
    "As the system matured, the interesting problem shifted. I wanted a document Q&A product that could run fully offline for development, then deploy to AWS without rewriting the application for each environment. Keyword search is a poor fit for long technical PDFs; semantic retrieval plus grounded generation is a better match, but only if the architecture can survive real cloud constraints (timeouts, secrets, cold starts, cost).",
    "The portfolio assistant came later as a productization test: reuse the same search API against a curated knowledge base, keep the demo corpus isolated, and expose the result as a chat experience visitors can try.",
  ],
  productExtension: {
    title: "Portfolio Assistant Extension",
    paragraphs: [
      "Rather than standing up a second backend, the portfolio frontend only calls POST /api/search with X-RAG-Collection: portfolio.",
      "Query expansion rewrites deictic “you/your” questions for embedding only, while the original question still goes to the LLM. That keeps retrieval useful for first-person portfolio chat without changing the demo path.",
      "Demo uploads and portfolio documents share infrastructure but not indexes — collection-aware tables, S3 prefixes, and header validation keep the two surfaces isolated.",
    ],
    image: "/projects/document-knowledge-agent-portfolio-assistant.png",
    imageAlt:
      "Portfolio Assistant chat widget open on the portfolio site with suggested questions",
    secondaryImage:
      "/projects/document-knowledge-agent-portfolio-assistant-demo.png",
    secondaryImageAlt:
      "Portfolio Assistant standalone demo interface with suggested prompts",
  },
  architectureFlow: [
    "React / Vite Client",
    "Express API Gateway",
    "FastAPI RAG Core",
    "Vector Store",
    "LLM Provider",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API Gateway",
      items: [
        "Node.js",
        "Express",
        "TypeScript",
        "Zod validation",
        "Multipart upload",
      ],
    },
    {
      title: "RAG Core",
      items: [
        "Python",
        "FastAPI",
        "LangChain",
        "PyMuPDF",
        "Chunk → embed → retrieve → generate",
      ],
    },
    {
      title: "Local stack",
      items: ["Ollama", "Chroma", "Filesystem storage", "Docker Compose"],
    },
    {
      title: "Production",
      items: [
        "OpenAI",
        "Aurora pgvector (Data API)",
        "S3",
        "Lambda + Web Adapter",
        "CloudFront",
      ],
    },
  ],
  engineeringHighlights: [
    "Thin Node gateway, Python RAG core — HTTP at the edge, pipeline ownership in FastAPI",
    "Provider facades (LLM, embedding, vector DB, storage) so local and production swap by configuration",
    "OpenAI in production after an earlier Bedrock path; API key in SSM SecureString",
    "Async ingest only where API Gateway’s timeout forces it; search stays synchronous",
    "IAM on the rag-core Function URL with SigV4 from the gateway",
    "Aurora Serverless v2 + RDS Data API so Lambdas stay out of the VPC",
    "Isolated portfolio corpus on the same API via X-RAG-Collection",
  ],
  cloudArchitecture: {
    services: [
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon ECR",
      "Aurora PostgreSQL (pgvector)",
      "AWS SSM",
      "Terraform",
    ],
    description:
      "CloudFront serves the SPA from S3 and can forward /api/* to the HTTP API. Both Lambdas run container images with AWS Lambda Web Adapter. The gateway validates and proxies; rag-core owns parse → chunk → embed → store and retrieve → generate. Production uses OpenAI, Aurora pgvector via the Data API, and S3 — with IAM between services rather than a public rag-core endpoint.",
  },
  techStack: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "Backend",
      items: ["Python", "FastAPI", "Node.js", "Express"],
    },
    {
      title: "AI / RAG",
      items: [
        "LangChain",
        "OpenAI",
        "Ollama",
        "Chroma",
        "Aurora pgvector",
        "PyMuPDF",
      ],
    },
    {
      title: "Cloud",
      items: [
        "Lambda",
        "API Gateway",
        "S3",
        "CloudFront",
        "ECR",
        "SSM",
        "Terraform",
      ],
    },
  ],
  challengeGroups: [
    {
      title: "API Gateway hard timeout vs long PDF ingest",
      items: [
        "Parse, chunk, embed, and store can exceed ~29 seconds. The fix was decoupling acknowledgment from work: 202 + Event invoke, status markers in storage, and UI polling — including a processing fallback when the marker has not appeared yet.",
      ],
    },
    {
      title: "Production reliability under serverless cost constraints",
      items: [
        "Aurora at min capacity 0 means resume latency on cold clusters. Embedding calls needed separate retry policies for query vs ingestion. Lambda images required docker buildx flags because Lambda rejects some BuildKit OCI manifests.",
      ],
    },
    {
      title: "Local and production vector spaces are not interchangeable",
      items: [
        "Local embeddings are 768-dimensional (nomic-embed-text); production uses 1536 (text-embedding-3-small). Tables and bootstrap scripts take EMBEDDING_DIMENSIONS explicitly.",
      ],
    },
    {
      title: "Keeping two product surfaces from contaminating each other",
      items: [
        "Demo uploads and portfolio documents share infrastructure but not indexes. Collection-aware table names, S3 key prefixes, and header validation keep corpora isolated.",
      ],
    },
  ],
  futureImprovements: [
    "End-user authentication and per-user document spaces",
    "A real evaluation harness for retrieval and answer quality",
    "Wire or remove packages/rag-ui-shared; both frontends are currently self-contained",
    "Decide the fate of leftover ArXiv routes on rag-core not exposed through the public gateway",
  ],
  projectImpact:
    "End-to-end local Compose stack, Terraform-defined AWS path (ECR, two container Lambdas, HTTP API, CloudFront, S3, Aurora pgvector, SSM, budget alert), live demo on Vercel, gateway tests with Vitest + Supertest, and a portfolio assistant that reuses the same search contract. Cloud timeouts shaped the API more than model choice; provider abstractions only paid off when local and production stayed honest about their differences.",
};
