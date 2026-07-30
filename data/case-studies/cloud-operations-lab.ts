import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab is an AWS platform engineering environment focused on Infrastructure as Code, secure CI/CD, and operational visibility.",
    "It is not an end-user application. It demonstrates how to define, review, apply, observe, and automate infrastructure with the same controls used in cloud operations teams.",
  ],
  overview: [
    "In real cloud environments, the hard part is rarely creating a single resource. The hard part is changing infrastructure with control: no long-lived CI credentials, no improvised SSH access, clear visibility when something fails, and review before the environment changes.",
    "Cloud Operations Lab addresses that gap with a small but complete AWS baseline: modular Terraform, remote state, GitHub Actions with OIDC, least-privilege IAM, SSM-based access, and CloudWatch observability.",
    "The result is a Cloud / Platform Engineering case study that shows how the platform under applications is provisioned, secured, and operated.",
  ],
  architecture: [
    {
      title: "Control Plane",
      items: [
        "GitHub",
        "GitHub Actions",
        "GitHub OIDC",
        "Terraform",
        "S3 remote state",
        "DynamoDB state lock",
      ],
    },
    {
      title: "AWS Runtime",
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
      "Infrastructure is defined as modular Terraform and composed by environment, with bootstrap separated from workload.",
    items: [
      "Reusable modules for VPC, IAM, EC2, CloudWatch, DynamoDB, and SSM",
      "Bootstrap creates the remote state backend, locks, OIDC trust, and CI/CD roles",
      "Workload environments consume modules without mixing state backend wiring into resource definitions",
      "S3 remote state with DynamoDB locking for safe collaboration and CI applies",
      "Environment-oriented composition for a clear, reproducible deployment model",
    ],
  },
  securityDecisions: {
    intro:
      "Security choices favor temporary credentials, least privilege, and reduced attack surface.",
    image: "/projects/cloud-operations-lab-security.png",
    imageAlt: "Cloud Operations Lab security decisions diagram",
    groups: [
      {
        title: "Avoided",
        items: [
          "AWS Access Keys in CI",
          "SSH with open port 22",
          "A single overpowered IAM role",
          "Unencrypted or public Terraform state",
        ],
      },
      {
        title: "Implemented",
        items: [
          "GitHub OIDC with short-lived credentials",
          "SSM Session Manager for operational access",
          "Separate plan and apply IAM roles",
          "Encrypted and versioned S3 remote state",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "Infrastructure changes move through review before AWS is updated: the code proposes the change, CI simulates it, a person approves it, and only then Terraform apply runs.",
    image: "/projects/cloud-operations-lab-cicd.png",
    imageAlt: "Cloud Operations Lab CI/CD workflow diagram",
    flow: [
      "Pull Request",
      "Terraform Plan",
      "Review",
      "Merge",
      "Approval",
      "Terraform Apply",
    ],
    items: [
      "Pull requests run fmt, validate, and plan with a read-oriented OIDC role",
      "Merge to main requires GitHub Environment approval before apply",
      "Apply uses a write-scoped OIDC role for controlled Terraform execution",
    ],
  },
  operationsObservability: {
    intro:
      "The environment is not create-and-forget. It reports logs, metrics, alarms, and operational events.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt: "Cloud Operations Lab operations and observability diagram",
    items: [
      "CloudWatch Agent for logs and CPU metrics on the EC2 host",
      "CloudWatch Alarm with SNS email notifications",
      "SSM Run Command automation for health checks and operational scripts",
      "DynamoDB ops-logs for recorded operational events",
    ],
  },
  featuresTitle: "Key Features",
  features: [
    {
      title: "Infrastructure as Code",
      items: [
        "Modular Terraform with environment composition",
        "Bootstrap and workload separation",
        "Remote state and locking",
      ],
    },
    {
      title: "Secure access",
      items: [
        "SSM Session Manager without SSH",
        "GitHub OIDC instead of static access keys",
        "Least-privilege IAM for instance and pipeline",
      ],
    },
    {
      title: "CI/CD for infrastructure",
      items: [
        "PR checks with Terraform plan",
        "Manual approval before apply",
        "Separate plan and apply roles",
      ],
    },
    {
      title: "Operations",
      items: [
        "CloudWatch logs, metrics, and alarms",
        "SNS notifications",
        "SSM automation with DynamoDB event logging",
      ],
    },
  ],
  engineeringHighlights: [
    "Control plane and AWS workload clearly separated",
    "Modular Terraform with reusable infrastructure building blocks",
    "OIDC-authenticated GitHub Actions with plan/apply role separation",
    "SSM-based operations without SSH or inbound management ports",
    "Observability through CloudWatch, SNS, and operational event logging",
    "Cost-aware design: small footprint without unnecessary managed layers",
  ],
  techStack: [
    {
      title: "Cloud",
      items: ["AWS", "VPC", "EC2", "IAM", "S3", "DynamoDB"],
    },
    {
      title: "Infrastructure as Code",
      items: ["Terraform", "Terraform Modules", "Remote State"],
    },
    {
      title: "CI/CD & Identity",
      items: ["GitHub Actions", "GitHub OIDC", "GitHub Environments"],
    },
    {
      title: "Operations",
      items: ["SSM", "CloudWatch", "SNS", "Bash automation"],
    },
  ],
  futureImprovements: [
    "Security scanning in the CI/CD pipeline",
    "Richer alerting policies and dashboards",
    "Multi-account AWS architecture",
    "Additional reusable Terraform modules",
  ],
  projectImpact:
    "Cloud Operations Lab complements application-focused projects by showing platform ownership: designing, securing, deploying, and operating the infrastructure those applications would run on.",
};
