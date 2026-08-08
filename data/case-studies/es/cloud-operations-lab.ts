import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Lab de plataforma AWS enfocado en Infraestructura como Código, CI/CD seguro y visibilidad operacional.",
    "No es una app de usuario final — muestra cómo definir, revisar, aplicar, observar y automatizar infraestructura con los controles que usan equipos de cloud ops.",
  ],
  overview: [
    "Crear un recurso es fácil. Cambiar infraestructura con control es más difícil: sin keys permanentes en CI, sin SSH improvisado, con visibilidad cuando algo falla y revisión antes del apply.",
    "Este lab es una baseline AWS pequeña pero completa: Terraform modular, estado remoto, GitHub Actions con OIDC, IAM de mínimo privilegio, acceso SSM y observabilidad con CloudWatch.",
  ],
  architecture: [
    {
      title: "Plano de Control",
      items: [
        "GitHub Actions",
        "GitHub OIDC",
        "Terraform",
        "Estado remoto en S3",
        "Lock en DynamoDB",
      ],
    },
    {
      title: "Runtime AWS",
      items: [
        "VPC",
        "EC2 (Amazon Linux 2023)",
        "SSM Session Manager",
        "CloudWatch",
        "SNS",
        "DynamoDB ops-logs",
      ],
    },
  ],
  infrastructureAsCode: {
    intro:
      "Terraform modular, compuesto por entorno. El bootstrap queda separado del workload.",
    items: [
      "Módulos reutilizables: VPC, IAM, EC2, CloudWatch, DynamoDB, SSM",
      "Bootstrap posee estado remoto, locks, trust OIDC y roles de CI/CD",
      "Los workloads consumen módulos sin mezclar el wiring del backend en las definiciones",
      "Estado en S3 + lock en DynamoDB para colaboración segura y applies en CI",
    ],
  },
  securityDecisions: {
    intro:
      "Credenciales temporales, mínimo privilegio, menor superficie de ataque.",
    image: "/projects/cloud-operations-lab-security.png",
    imageAlt: "Diagrama de decisiones de seguridad de Cloud Operations Lab",
    groups: [
      {
        title: "Evitado",
        items: [
          "Access keys de AWS en CI",
          "SSH con puerto 22 abierto",
          "Un rol IAM con privilegios excesivos",
          "Estado de Terraform sin cifrar o público",
        ],
      },
      {
        title: "Implementado",
        items: [
          "GitHub OIDC con credenciales de corta duración",
          "SSM Session Manager para acceso ops",
          "Roles IAM separados para plan y apply",
          "Estado remoto cifrado y versionado en S3",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "El código propone el cambio → CI lo planea → una persona aprueba → entonces corre Terraform apply.",
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
      "Los PRs ejecutan fmt, validate y plan con un rol OIDC de lectura",
      "Merge a main requiere aprobación de GitHub Environment antes del apply",
      "Apply usa un rol OIDC con permisos de escritura acotados",
    ],
  },
  operationsObservability: {
    intro:
      "No es create-and-forget: logs, métricas, alarmas y eventos operacionales.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt:
      "Diagrama de operaciones y observabilidad de Cloud Operations Lab",
    items: [
      "CloudWatch Agent: logs y CPU en el host EC2",
      "Alarma CloudWatch → email SNS",
      "SSM Run Command para health checks y scripts ops",
      "DynamoDB ops-logs para eventos operacionales registrados",
    ],
  },
  engineeringHighlights: [
    "Plano de control vs workload AWS claramente separados",
    "Separación de roles OIDC plan/apply — sin keys estáticas en CI",
    "Operaciones con SSM sin SSH ni puertos de administración abiertos",
    "Observabilidad con CloudWatch, SNS y logging de eventos ops",
  ],
  techStack: [
    {
      title: "Cloud",
      items: ["AWS", "VPC", "EC2", "IAM", "S3", "DynamoDB"],
    },
    {
      title: "IaC",
      items: ["Terraform", "Módulos", "Estado Remoto"],
    },
    {
      title: "CI/CD e Identidad",
      items: ["GitHub Actions", "OIDC", "Environments"],
    },
    {
      title: "Operaciones",
      items: ["SSM", "CloudWatch", "SNS", "Bash"],
    },
  ],
  challengeGroups: [
    {
      title: "CI sin keys de larga duración",
      items: [
        "Trust OIDC y roles plan/apply separados en lugar de credenciales AWS estáticas",
      ],
    },
    {
      title: "Acceso sin SSH",
      items: [
        "SSM Session Manager para que ops no abra el puerto 22",
      ],
    },
    {
      title: "Cambio de infraestructura seguro",
      items: [
        "Plan en PR, aprobación humana en main, luego apply — con estado remoto bloqueado",
      ],
    },
  ],
  futureImprovements: [
    "Security scanning en CI",
    "Alertas y dashboards más ricos",
    "Diseño multi-cuenta",
    "Más módulos Terraform reutilizables",
  ],
  projectImpact:
    "Demuestra ownership de plataforma: diseñar, asegurar, desplegar y operar la infraestructura sobre la que correrían las aplicaciones.",
};
