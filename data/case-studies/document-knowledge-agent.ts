import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudy: ProjectCaseStudy = {
  introduction: [
    "A cloud-native RAG platform that turns documents into queryable knowledge: upload, chunk, embed, retrieve, and answer with grounded context.",
    "Built as a modular AI pipeline — not a thin chatbot wrapper — with serverless AWS deployment. Portfolio Assistant is a product extension of the same system on this site.",
  ],
  overview: [
    "Keyword search falls short when people need meaning-based answers from PDFs and technical docs.",
    "The pipeline is ingest → chunk → embed → retrieve → generate. Search stays synchronous; ingestion runs asynchronously so long-running work does not block the API.",
  ],
  productExtension: {
    title: "Portfolio Assistant Extension",
    paragraphs: [
      "Same RAG search path, different corpus: a curated knowledge base of CV, experience, and project docs.",
      "Exposed here as a Messenger-style chat widget — the production pipeline turned into a visitor-facing product surface.",
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
    "React Client",
    "API Gateway / Express",
    "FastAPI RAG Core",
    "Vector Store",
    "LLM (Ollama / Bedrock)",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API Gateway",
      items: ["Node.js", "Express", "TypeScript"],
    },
    {
      title: "RAG Core",
      items: ["Python", "FastAPI", "LangChain", "Embeddings", "Retrieval"],
    },
    {
      title: "Vector Store",
      items: ["ChromaDB", "Semantic similarity search"],
    },
    {
      title: "Models",
      items: ["Ollama (local)", "AWS Bedrock (cloud)"],
    },
  ],
  engineeringHighlights: [
    "Provider abstraction: Ollama locally, Bedrock in cloud",
    "Async ingestion vs sync search — long jobs stay off the request path",
    "Serverless path: Lambda, API Gateway, S3, CloudFront, ECR",
    "Terraform for reproducible environments",
    "Portfolio Assistant: same search API, isolated corpus, floating chat widget",
  ],
  cloudArchitecture: {
    services: [
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon ECR",
      "Terraform",
    ],
    description:
      "CloudFront fronts the SPA on S3; /api/* goes through API Gateway to Lambda. FastAPI handles sync search and async ingestion, with Bedrock for generation and the vector store for retrieval.",
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
      items: ["LangChain", "Embeddings", "ChromaDB", "Ollama", "AWS Bedrock"],
    },
    {
      title: "Cloud",
      items: ["Lambda", "API Gateway", "S3", "CloudFront", "ECR", "Terraform"],
    },
  ],
  challengeGroups: [
    {
      title: "Keep the API responsive under ingestion load",
      items: [
        "Split async document processing from synchronous search so uploads do not stall queries",
      ],
    },
    {
      title: "Local vs cloud model providers",
      items: [
        "Abstract the LLM layer so Ollama and Bedrock can swap without rewriting the RAG core",
      ],
    },
    {
      title: "Productize the same pipeline",
      items: [
        "Reuse the search API against a portfolio-only corpus and surface it as an in-site chat widget",
      ],
    },
  ],
  futureImprovements: [
    "Auth and multi-user document spaces",
    "Document permissions",
    "RAG evaluation pipelines",
    "Hybrid search",
    "Deeper monitoring",
  ],
};
