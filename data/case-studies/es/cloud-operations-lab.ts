import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab es un entorno de Platform Engineering sobre AWS enfocado en Infraestructura como Código (IaC), CI/CD seguro y observabilidad operacional.",
    "No es una aplicación para usuarios finales. Su propósito es demostrar cómo definir, revisar, desplegar, supervisar y automatizar infraestructura utilizando las mismas prácticas empleadas por equipos de operaciones cloud.",
  ],
  overview: [
    "En entornos cloud reales, el desafío rara vez consiste en crear un único recurso. El verdadero reto es modificar la infraestructura de forma controlada: sin credenciales permanentes en CI, sin accesos SSH improvisados, con visibilidad completa cuando ocurre un problema y con procesos de revisión antes de aplicar cualquier cambio.",
    "Cloud Operations Lab aborda ese escenario mediante una base sólida sobre AWS que combina Terraform modular, estado remoto, GitHub Actions con autenticación OIDC, IAM de mínimo privilegio, acceso operativo mediante Systems Manager (SSM) y observabilidad con CloudWatch.",
    "El resultado es un caso de estudio de Ingeniería Cloud / Platform Engineering que demuestra cómo se aprovisiona, protege y opera la infraestructura sobre la que se ejecutan las aplicaciones.",
  ],
  architecture: [
    {
      title: "Plano de Control",
      items: [
        "GitHub",
        "GitHub Actions",
        "GitHub OIDC",
        "Terraform",
        "Estado remoto en S3",
        "Bloqueo de estado mediante DynamoDB",
      ],
    },
    {
      title: "Entorno de Ejecución en AWS",
      items: [
        "VPC",
        "EC2 (Amazon Linux 2023)",
        "IAM instance profile",
        "SSM Session Manager",
        "CloudWatch",
        "SNS",
        "DynamoDB ops-logs",
      ],
    },
  ],
  infrastructureAsCode: {
    intro:
      "La infraestructura está definida mediante módulos reutilizables de Terraform y organizada por entornos, manteniendo separada la fase de bootstrap de las cargas de trabajo.",
    items: [
      "Módulos reutilizables para VPC, IAM, EC2, CloudWatch, DynamoDB y SSM",
      "El bootstrap crea el backend del estado remoto, el mecanismo de bloqueo, la confianza OIDC y los roles utilizados por CI/CD",
      "Los entornos consumen los módulos sin mezclar la configuración del backend con la definición de recursos",
      "Estado remoto en S3 con bloqueo mediante DynamoDB para permitir colaboración segura y despliegues automatizados",
      "Organización por entornos para obtener despliegues reproducibles y fáciles de mantener",
    ],
  },
  securityDecisions: {
    intro:
      "Las decisiones de seguridad priorizan credenciales temporales, el principio de mínimo privilegio y una superficie de ataque reducida.",
    image: "/projects/cloud-operations-lab-security.png",
    imageAlt: "Diagrama de decisiones de seguridad de Cloud Operations Lab",
    groups: [
      {
        title: "Evitado",
        items: [
          "Access Keys de AWS en CI",
          "SSH con el puerto 22 expuesto",
          "Un único rol IAM con privilegios excesivos",
          "Estado de Terraform público o sin cifrado",
        ],
      },
      {
        title: "Implementado",
        items: [
          "GitHub OIDC con credenciales temporales",
          "SSM Session Manager para acceso operativo",
          "Roles IAM independientes para plan y apply",
          "Estado remoto cifrado y versionado en S3",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "Los cambios en la infraestructura pasan por un proceso de revisión antes de aplicarse en AWS. El código propone el cambio, el pipeline ejecuta una simulación, un revisor aprueba la modificación y solo entonces se ejecuta Terraform Apply.",
    image: "/projects/cloud-operations-lab-cicd.png",
    imageAlt: "Diagrama del flujo CI/CD de Cloud Operations Lab",
    flow: [
      "Pull Request",
      "Terraform Plan",
      "Revisión",
      "Merge",
      "Aprobación",
      "Terraform Apply",
    ],
    items: [
      "Los Pull Requests ejecutan fmt, validate y plan utilizando un rol OIDC de solo lectura",
      "Los cambios en la rama principal requieren aprobación mediante GitHub Environments antes del despliegue",
      "Terraform Apply utiliza un rol OIDC con permisos de escritura específicamente acotados para el despliegue controlado de infraestructura",
    ],
  },
  operationsObservability: {
    intro:
      "El entorno no se limita a crear infraestructura; también proporciona monitoreo, métricas, alertas y automatización operacional.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt:
      "Diagrama de operaciones y observabilidad de Cloud Operations Lab",
    items: [
      "CloudWatch Agent para registros y métricas de CPU de la instancia EC2",
      "Alarmas de CloudWatch con notificaciones por SNS",
      "Automatización mediante SSM Run Command para verificaciones de estado y tareas operacionales",
      "Registro de eventos operacionales en DynamoDB (ops-logs)",
    ],
  },
  featuresTitle: "Características Principales",
  features: [
    {
      title: "Infraestructura como Código",
      items: [
        "Terraform modular con composición por entornos",
        "Separación entre bootstrap y cargas de trabajo",
        "Estado remoto y mecanismo de bloqueo",
      ],
    },
    {
      title: "Acceso seguro",
      items: [
        "SSM Session Manager sin necesidad de SSH",
        "GitHub OIDC en reemplazo de Access Keys estáticas",
        "IAM basado en el principio de mínimo privilegio para instancias y pipelines",
      ],
    },
    {
      title: "CI/CD para infraestructura",
      items: [
        "Validaciones automáticas mediante Terraform Plan",
        "Aprobación manual antes de aplicar cambios",
        "Roles independientes para planificación y despliegue",
      ],
    },
    {
      title: "Operaciones",
      items: [
        "Registros, métricas y alarmas mediante CloudWatch",
        "Notificaciones con SNS",
        "Automatización mediante SSM y registro de eventos en DynamoDB",
      ],
    },
  ],
  engineeringHighlights: [
    "Separación clara entre el plano de control y la infraestructura desplegada en AWS",
    "Terraform modular basado en componentes reutilizables",
    "GitHub Actions autenticado mediante OIDC con separación de roles para Plan y Apply",
    "Operación remota mediante Systems Manager sin necesidad de SSH ni puertos de administración abiertos",
    "Observabilidad mediante CloudWatch, SNS y registro de eventos operacionales",
    "Arquitectura optimizada en costos, evitando servicios administrados innecesarios",
  ],
  techStack: [
    {
      title: "Cloud",
      items: ["AWS", "VPC", "EC2", "IAM", "S3", "DynamoDB"],
    },
    {
      title: "Infraestructura como Código",
      items: ["Terraform", "Módulos de Terraform", "Estado Remoto"],
    },
    {
      title: "CI/CD e Identidad",
      items: ["GitHub Actions", "GitHub OIDC", "GitHub Environments"],
    },
    {
      title: "Operaciones",
      items: ["SSM", "CloudWatch", "SNS", "Automatización con Bash"],
    },
  ],
  futureImprovements: [
    "Integrar análisis de seguridad dentro del pipeline CI/CD",
    "Dashboards y políticas de alertas más completas",
    "Arquitectura AWS multi-cuenta",
    "Nuevos módulos reutilizables de Terraform",
  ],
  projectImpact:
    "Cloud Operations Lab complementa los proyectos centrados en desarrollo de aplicaciones al demostrar la capacidad de diseñar, proteger, desplegar y operar la infraestructura sobre la que dichas aplicaciones se ejecutan.",
};
