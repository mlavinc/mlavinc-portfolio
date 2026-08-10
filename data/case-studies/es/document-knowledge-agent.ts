import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Document Knowledge Agent es un sistema de Retrieval-Augmented Generation (RAG) para bases de conocimiento a partir de PDFs. El usuario sube un documento, hace preguntas en lenguaje natural y recibe respuestas ancladas a fragmentos recuperados, con metadatos de fuente que indican qué documentos respaldaron la respuesta.",
    "El mismo backend alimenta una segunda superficie: un asistente de portafolio tipo “pregúntame lo que quieras”, que consulta un corpus aislado (perfil, experiencia, proyectos) en lugar de los papers subidos por el usuario.",
  ],
  overview: [
    "Construí este proyecto para entender cómo funciona un pipeline RAG completo en la práctica, no solo como experimento en un notebook. El punto de partida fue un agente orientado a ArXiv: buscar papers, ingerir PDFs, embeberlos en local con Ollama y Chroma, y responder preguntas sobre ese corpus.",
    "A medida que el sistema maduró, el problema interesante cambió. Quería un producto de preguntas sobre documentos que pudiera correr totalmente offline en desarrollo y desplegarse en AWS sin reescribir la aplicación por entorno. La búsqueda por palabras clave encaja mal con PDFs técnicos largos; la recuperación semántica más generación anclada es una mejor aproximación, pero solo si la arquitectura aguanta restricciones reales de nube (timeouts, secretos, cold starts, costo).",
    "El asistente de portafolio llegó después, como prueba de productización: reutilizar la misma API de búsqueda sobre una base de conocimiento curada, mantener el corpus de demo aislado y exponer el resultado como un chat que un visitante puede probar.",
  ],
  productExtension: {
    title: "Extensión Portfolio Assistant",
    paragraphs: [
      "En lugar de levantar un segundo backend, el frontend de portafolio solo llama a POST /api/search con X-RAG-Collection: portfolio.",
      "La expansión de query reescribe preguntas deícticas (“tú/tu”) solo para el embedding; la pregunta original sigue yendo al LLM. Así la recuperación sirve para un chat en primera persona sin alterar el camino de la demo.",
      "Las subidas de la demo y los documentos del portafolio comparten infraestructura, pero no índices: tablas por colección, prefijos en S3 y validación del header mantienen ambos corpus aislados.",
    ],
    image: "/projects/document-knowledge-agent-portfolio-assistant.png",
    imageAlt:
      "Widget del Portfolio Assistant abierto en el sitio con preguntas sugeridas",
    secondaryImage:
      "/projects/document-knowledge-agent-portfolio-assistant-demo.png",
    secondaryImageAlt:
      "Interfaz demo independiente del Portfolio Assistant con prompts sugeridos",
  },
  architectureFlow: [
    "Cliente React / Vite",
    "API Gateway Express",
    "Núcleo RAG FastAPI",
    "Almacén vectorial",
    "Proveedor LLM",
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
        "Validación Zod",
        "Upload multipart",
      ],
    },
    {
      title: "Núcleo RAG",
      items: [
        "Python",
        "FastAPI",
        "LangChain",
        "PyMuPDF",
        "Fragmentar → embeber → recuperar → generar",
      ],
    },
    {
      title: "Stack local",
      items: ["Ollama", "Chroma", "Filesystem", "Docker Compose"],
    },
    {
      title: "Producción",
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
    "Gateway Node delgado y núcleo RAG en Python — HTTP en el borde, pipeline en FastAPI",
    "Facades de provider (LLM, embedding, vector DB, storage) para cambiar local y producción por configuración",
    "OpenAI en producción tras una ruta previa con Bedrock; API key en SSM SecureString",
    "Ingest asíncrono solo donde el timeout de API Gateway lo obliga; la búsqueda permanece síncrona",
    "IAM en la Function URL de rag-core con firmas SigV4 desde el gateway",
    "Aurora Serverless v2 + RDS Data API para que las Lambdas no entren a la VPC",
    "Corpus de portafolio aislado sobre la misma API vía X-RAG-Collection",
  ],
  cloudArchitectureTitle: "Arquitectura Cloud",
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
      "CloudFront sirve el SPA desde S3 y puede reenviar /api/* al HTTP API. Ambas Lambdas corren imágenes de contenedor con AWS Lambda Web Adapter. El gateway valida y hace proxy; rag-core concentra parsear → fragmentar → embeber → guardar y recuperar → generar. En producción se usa OpenAI, Aurora pgvector vía Data API y S3, con IAM entre servicios en lugar de un rag-core público.",
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
      title: "Timeout duro de API Gateway frente a ingest largo de PDF",
      items: [
        "Parsear, fragmentar, embeber y guardar puede superar ~29 segundos. La solución fue desacoplar el acuse de recibo del trabajo: 202 + invocación Event, marcadores de estado en storage y polling en el UI.",
      ],
    },
    {
      title: "Fiabilidad en producción bajo restricciones de costo serverless",
      items: [
        "Aurora con capacidad mínima 0 implica latencia de resume. Las llamadas de embedding necesitaron políticas de reintento distintas. Las imágenes de Lambda requirieron flags de docker buildx porque Lambda rechaza ciertos manifiestos OCI.",
      ],
    },
    {
      title: "Los espacios vectoriales local y producción no son intercambiables",
      items: [
        "Los embeddings locales tienen 768 dimensiones (nomic-embed-text); producción usa 1536 (text-embedding-3-small). Las tablas toman EMBEDDING_DIMENSIONS de forma explícita.",
      ],
    },
    {
      title: "Evitar que dos superficies de producto se contaminen",
      items: [
        "Las subidas de la demo y los documentos del portafolio comparten infraestructura, pero no índices. Nombres de tabla, prefijos en S3 y validación del header mantienen los corpus aislados.",
      ],
    },
  ],
  futureImprovements: [
    "Autenticación de usuario final y espacios de documentos por usuario",
    "Un harness real de evaluación para calidad de retrieval y respuestas",
    "Conectar o eliminar packages/rag-ui-shared; ambos frontends son autónomos por ahora",
    "Definir el destino de las rutas ArXiv que quedan en rag-core y no se exponen por el gateway público",
  ],
  projectImpact:
    "Stack local de punta a punta con Compose, ruta AWS definida en Terraform (ECR, dos Lambdas en contenedor, HTTP API, CloudFront, S3, Aurora pgvector, SSM, alerta de presupuesto), demo en Vercel, tests del gateway con Vitest + Supertest, y un asistente de portafolio que reutiliza el mismo contrato de búsqueda. Los timeouts de la nube condicionaron el diseño de la API más que la elección del modelo.",
};
