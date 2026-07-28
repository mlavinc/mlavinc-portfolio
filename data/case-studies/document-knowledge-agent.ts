import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudy: ProjectCaseStudy = {
  introduction: [
    "A cloud-native Retrieval-Augmented Generation (RAG) platform that transforms documents into interactive knowledge sources.",
    "The system allows users to upload documents, process their content, generate semantic representations, and ask natural language questions to retrieve relevant information with AI-generated answers.",
    "The project demonstrates how modern AI applications can be built beyond simple chatbots by combining document processing pipelines, vector search, foundation models, and scalable cloud architecture.",
  ],
  overview: [
    "Organizations store large amounts of unstructured information in PDFs, reports, and technical documentation. Traditional keyword search often fails when users need answers based on meaning rather than exact terms.",
    "Document Knowledge Agent solves this by enabling semantic search and conversational interaction with documents through a RAG pipeline.",
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
    "Modular AI architecture with provider abstraction",
    "Production-oriented API design",
    "Versioned APIs, validation, error handling and service separation",
    "Async workflows for long-running tasks",
    "Infrastructure as Code using Terraform",
    "Serverless cloud architecture focused on scalability and cost optimization",
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
      "The architecture avoids unnecessary always-running infrastructure through serverless execution and supports reproducible deployments.",
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
