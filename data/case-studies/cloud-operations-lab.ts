import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab is a hands-on AWS environment built to practice production-oriented Cloud Engineering: Infrastructure as Code, secure CI/CD, and cost-aware operations.",
    "The core trade-off was clear — favor reproducibility and security (Terraform modules, remote state, OIDC-based auth) while keeping spend low by deploying and destroying resources on demand.",
  ],
  overview: [
    "Manually managed cloud resources drift, hide configuration, and create security risk through long-lived credentials.",
    "This project treats infrastructure as software: Terraform defines the environment, GitHub Actions deploys it, S3/DynamoDB manage remote state and locking, and GitHub OIDC assumes IAM roles with temporary credentials instead of static keys.",
  ],
  featuresTitle: "Solution",
  featuresIntro:
    "The project implements an AWS infrastructure workflow where resources are:",
  features: [
    {
      title: "Workflow",
      items: [
        "Defined using Terraform",
        "Managed through version control",
        "Deployed using automated CI/CD pipelines",
        "Protected with identity-based authentication",
        "Created and destroyed on demand to control costs",
      ],
    },
  ],
  architecture: [
    {
      title: "Infrastructure as Code",
      items: [
        "Terraform modular architecture",
        "Reusable modules",
        "Reproducible deployments",
      ],
    },
    {
      title: "Remote State",
      items: [
        "Amazon S3 for Terraform state storage",
        "Amazon DynamoDB for state locking",
      ],
    },
    {
      title: "CI/CD Security",
      items: [
        "GitHub Actions",
        "GitHub OpenID Connect (OIDC)",
        "AWS IAM role-based authentication",
        "Temporary credentials instead of static keys",
      ],
    },
    {
      title: "AWS Environment",
      items: [
        "Networking foundations",
        "Compute resources",
        "IAM permissions",
        "Secure administration using AWS Systems Manager Session Manager",
      ],
    },
  ],
  engineeringHighlights: [
    "Modular Terraform for reusable, reproducible AWS environments",
    "Remote state in S3 with DynamoDB locking to prevent concurrent apply conflicts",
    "GitHub Actions CI/CD authenticated via OIDC — no long-lived access keys",
    "Least-privilege IAM roles for pipeline and runtime access",
    "Session Manager for secure administration without exposing SSH",
    "Deploy → validate → destroy workflow to control cloud cost",
  ],
  cloudArchitectureTitle: "Cost Optimization",
  cloudArchitecture: {
    services: ["Terraform", "GitHub Actions", "AWS"],
    description:
      "The environment is intentionally ephemeral: infrastructure is provisioned for validation, then destroyed. That FinOps-minded choice keeps the architecture production-like without paying for idle compute.",
    workflow: [
      "Deploy when needed",
      "Validate functionality",
      "Destroy resources afterwards",
    ],
  },
  techStack: [
    {
      title: "Cloud",
      items: ["AWS"],
    },
    {
      title: "Infrastructure",
      items: [
        "Terraform",
        "Terraform Modules",
        "Amazon S3",
        "Amazon DynamoDB",
        "Amazon IAM",
        "Amazon EC2",
      ],
    },
    {
      title: "DevOps",
      items: ["GitHub Actions", "GitHub OIDC", "CI/CD"],
    },
    {
      title: "Operations",
      items: ["AWS Systems Manager", "Git", "PowerShell"],
    },
  ],
  futureImprovements: [
    "CloudWatch monitoring and alerting",
    "Centralized logging",
    "Security scanning in CI/CD",
    "Multi-account AWS architecture",
    "Kubernetes workloads",
  ],
};
