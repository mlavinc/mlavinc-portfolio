import type { ProjectCaseStudy } from "@/types/project";

export const documentKnowledgeAgentCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Plataforma Retrieval-Augmented Generation (RAG) nativa para la nube que transforma documentos en fuentes de conocimiento consultables mediante búsqueda semántica y respuestas fundamentadas por inteligencia artificial.",
    "Los usuarios cargan documentos; el sistema extrae y fragmenta su contenido, genera embeddings, los indexa para recuperación vectorial y responde preguntas en lenguaje natural utilizando el contexto recuperado.",
    "El foco de ingeniería estuvo en construir un pipeline de IA modular (más allá de un simple chatbot), combinando procesamiento documental, búsqueda vectorial, modelos fundacionales y una arquitectura serverless sobre AWS. Como extensión del mismo sistema, Portfolio Assistant integra esta capacidad RAG directamente en este portafolio mediante un asistente conversacional para los visitantes.",
  ],
  overview: [
    "Los documentos PDF no estructurados y la documentación técnica son difíciles de consultar mediante búsquedas tradicionales por palabras clave cuando se necesitan respuestas basadas en significado.",
    "Document Knowledge Agent resuelve este problema mediante un pipeline RAG compuesto por las etapas de ingesta → fragmentación → generación de embeddings → recuperación → generación de respuesta, separando las rutas síncronas de consulta de los procesos asíncronos de ingesta para evitar que tareas de larga duración bloqueen las solicitudes a la API.",
    "Portfolio Assistant no es un producto independiente. Es una extensión de Document Knowledge Agent que reutiliza la misma ruta de búsqueda sobre una base de conocimiento específica de este portafolio, ofreciendo la funcionalidad RAG a través de un widget conversacional integrado en el sitio.",
  ],
  productExtension: {
    title: "Extensión Portfolio Assistant",
    paragraphs: [
      "Como extensión de Document Knowledge Agent, integré el sistema RAG dentro de mi portafolio personal como un asistente interactivo.",
      "El asistente utiliza una base de conocimiento curada que incluye mi currículum, experiencia técnica y documentación de proyectos, permitiendo que los visitantes consulten mi trayectoria, habilidades y trabajos mediante lenguaje natural.",
      "Esta extensión demuestra cómo un sistema de IA orientado a producción puede evolucionar hacia una experiencia interactiva enfocada en el usuario final.",
    ],
    image: "/projects/document-knowledge-agent-portfolio-assistant.png",
    imageAlt:
      "Widget de chat de Portfolio Assistant abierto en el sitio del portafolio con preguntas sugeridas",
    secondaryImage:
      "/projects/document-knowledge-agent-portfolio-assistant-demo.png",
    secondaryImageAlt:
      "Interfaz demo independiente de Portfolio Assistant con prompts sugeridos",
  },
  features: [
    {
      title: "Pipeline de ingesta de documentos",
      items: [
        "Extracción de documentos",
        "Procesamiento y fragmentación del texto",
        "Generación de embeddings",
        "Indexación en la base de datos vectorial",
      ],
    },
    {
      title: "Búsqueda semántica",
      items: [
        "Recuperación basada en significado en lugar de palabras clave",
        "Obtención del contexto más relevante desde los documentos",
      ],
    },
    {
      title: "Respuestas generadas por IA",
      items: [
        "Recuperación de fragmentos relevantes",
        "Envío del contexto al modelo de lenguaje",
        "Generación de respuestas fundamentadas en la información recuperada",
      ],
    },
    {
      title: "Procesamiento asíncrono",
      items: [
        "Separación entre la ingesta documental y las consultas a la API",
        "Mayor confiabilidad y mejor experiencia de usuario",
      ],
    },
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "Capa API",
      items: ["Node.js", "Express", "TypeScript"],
    },
    {
      title: "Núcleo RAG",
      items: [
        "Python",
        "FastAPI",
        "LangChain",
        "Procesamiento documental",
        "Embeddings",
        "Pipeline de recuperación",
      ],
    },
    {
      title: "Base de Datos Vectorial",
      items: ["Almacenamiento semántico y búsqueda por similitud"],
    },
    {
      title: "Capa de Modelos de IA",
      items: [
        "Ollama para desarrollo local",
        "Modelos fundacionales de AWS Bedrock para despliegues en la nube",
      ],
    },
  ],
  engineeringHighlights: [
    "Abstracción del proveedor de modelos de IA (Ollama en desarrollo local y AWS Bedrock en producción)",
    "APIs versionadas con validación, manejo de errores y separación de servicios",
    "Separación entre ingesta asíncrona y consultas síncronas para aislar cargas de trabajo de larga duración",
    "Despliegue serverless mediante AWS Lambda, API Gateway, Amazon S3, CloudFront y Amazon ECR",
    "Infraestructura como Código (IaC) utilizando Terraform para entornos reproducibles",
    "Arquitectura optimizada en costos mediante computación bajo demanda, evitando servidores permanentemente activos",
    "Extensión Portfolio Assistant reutilizando la misma API RAG sobre una base de conocimiento independiente, integrada como un widget conversacional flotante",
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
      "El tráfico es distribuido mediante CloudFront. La aplicación web (SPA) se sirve desde Amazon S3, mientras que las solicitudes /api/* se enrutan a través de API Gateway hacia AWS Lambda. FastAPI procesa las consultas de forma síncrona y la ingesta documental de forma asíncrona, integrándose con AWS Bedrock para la generación de respuestas y con la base de datos vectorial para la recuperación semántica, eliminando la necesidad de mantener infraestructura permanentemente activa.",
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
      title: "IA/RAG",
      items: [
        "LangChain",
        "RAG",
        "Embeddings",
        "Búsqueda Vectorial",
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
    "Autenticación y espacios documentales multiusuario",
    "Control de permisos sobre documentos",
    "Pipelines de evaluación para sistemas RAG",
    "Búsqueda híbrida",
    "Monitoreo y observabilidad",
  ],
};
