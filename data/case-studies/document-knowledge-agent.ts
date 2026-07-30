import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudy: ProjectCaseStudy = {
  introduction: [
    "A cloud-native Retrieval-Augmented Generation (RAG) platform that turns documents into queryable knowledge sources through semantic search and grounded AI answers.",
    "Users upload documents, the system extracts and chunks content, generates embeddings, indexes them for vector retrieval, and answers natural-language questions using retrieved context.",
    "The engineering focus was building a modular AI pipeline (not a thin chatbot wrapper), combining document processing, vector search, foundation models, and a serverless AWS deployment model.",
  ],
  overview: [
    "Unstructured PDFs and technical documents are hard to query with keyword search when users need meaning-based answers.",
    "Document Knowledge Agent addresses this with a RAG pipeline: ingest → chunk → embed → retrieve → generate, separated into synchronous search paths and asynchronous ingestion so long-running processing does not block API requests.",
  ],
  features: [
    {
      title: "Document ingestion pipeline",
      items: [
        "Document extraction",
        "Text processing and chunking",
        "Embedding generation",
        "Vector database indexing",
      ],
    },
    {
      title: "Semantic search",
      items: [
        "Meaning-based retrieval instead of keyword matching",
        "Relevant context retrieval from documents",
      ],
    },
    {
      title: "AI-powered question answering",
      items: [
        "Retrieves relevant document chunks",
        "Provides context to the language model",
        "Generates grounded answers based on retrieved knowledge",
      ],
    },
    {
      title: "Asynchronous processing",
      items: [
        "Separates long-running document processing from API requests",
        "Improves reliability and user experience",
      ],
    },
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API Gateway Layer",
      items: ["Node.js", "Express", "TypeScript"],
    },
    {
      title: "RAG Core",
      items: [
        "Python",
        "FastAPI",
        "LangChain",
        "Document processing",
        "Embeddings",
        "Retrieval pipeline",
      ],
    },
    {
      title: "Vector Database",
      items: ["Semantic storage and similarity search"],
    },
    {
      title: "AI Model Layer",
      items: [
        "Ollama for local development",
        "AWS Bedrock foundation models for cloud deployment",
      ],
    },
  ],
  engineeringHighlights: [
    "Provider abstraction for AI models (Ollama locally, AWS Bedrock in cloud)",
    "Versioned APIs with validation, error handling, and service separation",
    "Async ingestion vs sync search to isolate long-running workloads",
    "Serverless deployment with AWS Lambda, API Gateway, S3, CloudFront, and ECR",
    "Infrastructure as Code with Terraform for reproducible cloud environments",
    "Cost-conscious design: pay-per-use compute instead of always-on servers",
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
      "Traffic is fronted by CloudFront, with the SPA served from S3 and /api/* routed through API Gateway to Lambda. FastAPI handles search synchronously and ingestion asynchronously, integrating Bedrock for generation and vector storage for retrieval, avoiding always-running infrastructure.",
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
      title: "AI/RAG",
      items: [
        "LangChain",
        "RAG",
        "Embeddings",
        "Vector Search",
        "Ollama",
        "AWS Bedrock",
      ],
    },
    {
      title: "Cloud",
      items: [
        "AWS Lambda",
        "API Gateway",
        "S3",
        "CloudFront",
        "ECR",
        "Terraform",
      ],
    },
  ],
  futureImprovements: [
    "Authentication and multi-user document spaces",
    "Document permissions",
    "RAG evaluation pipelines",
    "Hybrid search",
    "Monitoring and observability",
  ],
};
