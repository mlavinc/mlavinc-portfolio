import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab es un entorno pequeño de operaciones en AWS definido con Terraform y desplegado con GitHub Actions. No es una aplicación para usuarios finales.",
    "Es un plano de control real para aprovisionar, revisar, aplicar, observar y automatizar infraestructura con una huella modesta: una VPC, una instancia EC2 (Amazon Linux 2023), CloudWatch, SSM, SNS y una tabla DynamoDB de eventos operativos.",
  ],
  overview: [
    "La mayoría de los proyectos de portfolio muestran un servicio en marcha. Pocos muestran cómo se cambiaría con seguridad la plataforma sobre la que corre.",
    "Construí este laboratorio para practicar el ciclo operativo que importa en Cloud y Platform Engineering: infraestructura como código con estado remoto, identidad de CI sin access keys permanentes, acceso con mínimo privilegio al compute, observabilidad cuando algo falla y aprobación humana antes de terraform apply.",
    "No había requisito de producto ni stakeholder inventado. El objetivo era reproducir, en un lab compatible con Free Tier, las decisiones de equipos que tratan la infraestructura como artefacto revisable: separar plan de apply, separar bootstrap del workload y preferir SSM a abrir SSH.",
  ],
  architecture: [
    {
      title: "Plano de control",
      items: [
        "GitHub Actions",
        "GitHub OIDC",
        "Terraform",
        "Estado remoto en S3",
        "Lock en DynamoDB",
        "Roles CI plan y apply",
      ],
    },
    {
      title: "Entorno AWS",
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
      "El bootstrap se ejecuta una vez con estado local. El workload vive en environments/dev sobre el backend S3 y compone módulos en lugar de declarar recursos a mano.",
    items: [
      "Bootstrap crea el bucket S3 de estado, la tabla DynamoDB de locks, el proveedor OIDC de GitHub y los roles github-ci / github-apply",
      "Módulos reutilizables: vpc, iam, ec2, cloudwatch, dynamodb, ssm",
      "Host en subnet pública con Internet Gateway para que los agentes de SSM y CloudWatch lleguen a las APIs de AWS",
      "Security group solo con egress: sin key pair y sin SSH inbound",
      "Estado en S3 + locking en DynamoDB para colaboración segura y applies en CI",
    ],
  },
  securityDecisions: {
    intro:
      "Credenciales temporales, mínimo privilegio y menor superficie de ataque: las condiciones de trust de OIDC son parte del diseño de seguridad, no solo del YAML.",
    image: "/projects/cloud-operations-lab-security.png",
    imageAlt: "Diagrama de decisiones de seguridad de Cloud Operations Lab",
    groups: [
      {
        title: "Evitado",
        items: [
          "Access keys de AWS en CI",
          "SSH con puerto 22 abierto",
          "Un único rol IAM con privilegios excesivos",
          "Estado de Terraform sin cifrar o público",
        ],
      },
      {
        title: "Implementado",
        items: [
          "GitHub OIDC con credenciales temporales",
          "SSM Session Manager para acceso operativo",
          "Roles IAM separados para plan y apply",
          "Estado remoto cifrado y versionado en S3",
          "PassRole acotado a roles cloud-ops-lab-*",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "PR → Actions (OIDC → rol CI) → fmt / validate / plan (comentario en el PR) → merge a main → aprobación del Environment “dev” → Actions (OIDC → rol apply) → terraform apply.",
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
      "Plan usa ReadOnlyAccess más una política acotada al backend de estado",
      "La trust policy de apply coincide con repo:{org}/{repo}:environment:dev mediante StringEquals",
      "El job declara environment: dev para que los required reviewers pausen el workflow",
      "-auto-approve es intencional: el gate humano es la aprobación de GitHub, no un prompt de Terraform en CI",
    ],
  },
  operationsObservability: {
    intro:
      "user_data instala rsyslog y el CloudWatch Agent, y envía logs y métricas de memoria/disco. Una alarma de CPU notifica por SNS. Los documentos Run Command escriben ítems en DynamoDB con TTL de 30 días.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt: "Diagrama de operaciones y observabilidad de Cloud Operations Lab",
    items: [
      "CloudWatch Agent: /var/log/messages, /var/log/secure, métricas de memoria/disco",
      "Alarma de CPU al 80% en dos periodos de 5 minutos → SNS",
      "Parameter Store para config en runtime (tabla, región, entorno)",
      "SSM Run Command: health_check.sh y log_event.sh → DynamoDB con TTL",
    ],
  },
  engineeringHighlights: [
    "Separación bootstrap frente a workload para resolver el problema del huevo y la gallina del backend de estado",
    "Composición modular para reutilizar módulos en un futuro entorno prod sin copiar bloques",
    "SSM en lugar de SSH — acceso interactivo por HTTPS e IAM",
    "OIDC con dos roles y aprobación antes del apply",
    "Topología consciente del coste: una AZ, t3.micro, sin NAT, ALB ni RDS",
  ],
  techStack: [
    {
      title: "Cloud",
      items: ["AWS", "VPC", "EC2", "IAM", "S3", "DynamoDB"],
    },
    {
      title: "IaC",
      items: ["Terraform", "Módulos", "Estado remoto"],
    },
    {
      title: "CI/CD e identidad",
      items: ["GitHub Actions", "OIDC", "Environments"],
    },
    {
      title: "Operaciones",
      items: ["SSM", "CloudWatch", "SNS", "Bash"],
    },
  ],
  challengeGroups: [
    {
      title: "AL2023 y logs en fichero para CloudWatch",
      items: [
        "AL2023 usa journald y no crea /var/log/messages ni /var/log/secure. Los logs no aparecían hasta instalar rsyslog en user_data. Con replace-on-change, corregir una instancia ya existente implica reemplazarla.",
      ],
    },
    {
      title: "CRLF de Windows en documentos SSM",
      items: [
        "Los scripts llevaban \\r; Linux rechazaba #!/bin/bash\\r (exit 127). El módulo SSM normaliza CRLF a LF con replace() antes de embeber el script.",
      ],
    },
    {
      title: "count en IAM y ARNs calculados",
      items: [
        "Un count sobre dynamodb_table_arn != null fallaba en plan porque el ARN no se conoce hasta el apply. Un booleano conocido en plan (enable_ops_automation) lo resolvió.",
      ],
    },
    {
      title: "Salida del plan y .gitignore frente a var files",
      items: [
        "Planes largos necesitaron tee a /tmp/tfplan.txt con PIPESTATUS. Ignorar *.tfvars ocultaba dev.tfvars y rompía CI; ahora solo se ignoran ficheros auto-cargados.",
      ],
    },
  ],
  futureImprovements: [
    "Cablear los parámetros SSM (EventType, Message) en el Run Command de log-event",
    "Fijar metadata_options de EC2 para IMDSv2 de forma explícita",
    "Añadir una segunda composición de entorno reutilizando los mismos módulos cuando dev esté estable",
  ],
  projectImpact:
    "El lab se despliega como un stack coherente: estado remoto con locking, planes de PR como comentarios, apply protegido por el environment dev, acceso solo por SSM, CloudWatch con SNS, y escritura vía Run Command en DynamoDB con TTL. No hay demo interactiva de producto; el entregable es el entorno operable y su pipeline de cambio.",
};
