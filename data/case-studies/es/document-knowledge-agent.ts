import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Plataforma RAG nativa en la nube que convierte documentos en conocimiento consultable: subir, fragmentar, embedder, recuperar y responder con contexto fundamentado.",
    "Construida como un pipeline de IA modular — no un wrapper delgado de chatbot — con despliegue serverless en AWS. Portfolio Assistant es una extensión de producto del mismo sistema en este sitio.",
  ],
  overview: [
    "La búsqueda por palabras clave se queda corta cuando se necesitan respuestas basadas en significado a partir de PDFs y docs técnicos.",
    "El pipeline es ingest → chunk → embed → retrieve → generate. La búsqueda es síncrona; la ingesta es asíncrona para que el trabajo largo no bloquee la API.",
  ],
  productExtension: {
    title: "Extensión Portfolio Assistant",
    paragraphs: [
      "Misma ruta de búsqueda RAG, corpus distinto: una base curada de CV, experiencia y docs de proyectos.",
      "Expuesta aquí como un widget de chat estilo Messenger — el pipeline de producción convertido en superficie de producto para visitantes.",
    ],
    image: "/projects/document-knowledge-agent-portfolio-assistant.png",
    imageAlt:
      "Widget de chat de Portfolio Assistant abierto en el sitio del portafolio con preguntas sugeridas",
    secondaryImage:
      "/projects/document-knowledge-agent-portfolio-assistant-demo.png",
    secondaryImageAlt:
      "Interfaz demo independiente de Portfolio Assistant con prompts sugeridos",
  },
  architectureFlow: [
    "Cliente React",
    "API Gateway / Express",
    "Núcleo RAG FastAPI",
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
      title: "Núcleo RAG",
      items: ["Python", "FastAPI", "LangChain", "Embeddings", "Retrieval"],
    },
    {
      title: "Vector Store",
      items: ["ChromaDB", "Búsqueda por similitud semántica"],
    },
    {
      title: "Modelos",
      items: ["Ollama (local)", "AWS Bedrock (cloud)"],
    },
  ],
  engineeringHighlights: [
    "Abstracción de proveedor: Ollama en local, Bedrock en cloud",
    "Ingesta asíncrona vs búsqueda síncrona — jobs largos fuera del request path",
    "Camino serverless: Lambda, API Gateway, S3, CloudFront, ECR",
    "Terraform para entornos reproducibles",
    "Portfolio Assistant: misma API de búsqueda, corpus aislado, widget de chat flotante",
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
      "CloudFront frente a la SPA en S3; /api/* pasa por API Gateway hacia Lambda. FastAPI maneja búsqueda síncrona e ingesta asíncrona, con Bedrock para generación y el vector store para retrieval.",
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
      title: "IA / RAG",
      items: ["LangChain", "Embeddings", "ChromaDB", "Ollama", "AWS Bedrock"],
    },
    {
      title: "Cloud",
      items: ["Lambda", "API Gateway", "S3", "CloudFront", "ECR", "Terraform"],
    },
  ],
  challengeGroups: [
    {
      title: "Mantener la API responsive bajo carga de ingesta",
      items: [
        "Separar el procesamiento asíncrono de documentos de la búsqueda síncrona para que los uploads no frenen las queries",
      ],
    },
    {
      title: "Proveedores de modelo local vs cloud",
      items: [
        "Abstraer la capa LLM para que Ollama y Bedrock puedan intercambiarse sin reescribir el núcleo RAG",
      ],
    },
    {
      title: "Productizar el mismo pipeline",
      items: [
        "Reutilizar la API de búsqueda contra un corpus solo del portafolio y exponerla como widget de chat en el sitio",
      ],
    },
  ],
  futureImprovements: [
    "Auth y espacios documentales multiusuario",
    "Permisos sobre documentos",
    "Pipelines de evaluación RAG",
    "Búsqueda híbrida",
    "Monitoreo más profundo",
  ],
};
