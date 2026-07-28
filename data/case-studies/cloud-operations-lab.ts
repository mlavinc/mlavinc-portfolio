import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab is a cloud engineering project that demonstrates the implementation of a production-oriented AWS environment using Infrastructure as Code, DevOps automation, and modern cloud management practices.",
    "The project focuses on building a secure, automated, and reproducible cloud infrastructure using Terraform, CI/CD workflows, centralized state management, and cost-aware architecture decisions.",
  ],
  overview: [
    "Cloud environments can become difficult to maintain when infrastructure is managed manually.",
    "This project explores how Cloud Engineering practices solve these challenges by treating infrastructure as software: version controlled, automated, reproducible, and securely managed.",
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
    "Infrastructure as Code practices",
    "Automated deployment workflows",
    "Cloud security fundamentals",
    "Least privilege authentication",
    "Remote Terraform state management",
    "Cost-aware cloud architecture",
    "Production-like workflows with controlled expenses",
  ],
  cloudArchitectureTitle: "Cost Optimization",
  cloudArchitecture: {
    services: ["Terraform", "GitHub Actions", "AWS"],
    description:
      "The architecture was designed for learning and demonstrations while avoiding unnecessary always-running resources. This demonstrates practical FinOps and cloud cost management awareness.",
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
