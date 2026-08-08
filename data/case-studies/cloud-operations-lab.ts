import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudy: ProjectCaseStudy = {
  introduction: [
    "An AWS platform lab focused on Infrastructure as Code, secure CI/CD, and operational visibility.",
    "Not an end-user app — it shows how to define, review, apply, observe, and automate infrastructure with the controls cloud ops teams actually use.",
  ],
  overview: [
    "Creating a resource is easy. Changing infrastructure with control is harder: no long-lived CI keys, no improvised SSH, visibility when something breaks, and review before apply.",
    "This lab is a small but complete AWS baseline: modular Terraform, remote state, GitHub Actions with OIDC, least-privilege IAM, SSM access, and CloudWatch observability.",
  ],
  architecture: [
    {
      title: "Control Plane",
      items: [
        "GitHub Actions",
        "GitHub OIDC",
        "Terraform",
        "S3 remote state",
        "DynamoDB lock",
      ],
    },
    {
      title: "AWS Runtime",
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
      "Modular Terraform, composed by environment. Bootstrap stays separate from workload.",
    items: [
      "Reusable modules: VPC, IAM, EC2, CloudWatch, DynamoDB, SSM",
      "Bootstrap owns remote state, locks, OIDC trust, and CI/CD roles",
      "Workloads consume modules without baking backend wiring into resource definitions",
      "S3 state + DynamoDB locking for safe collaboration and CI applies",
    ],
  },
  securityDecisions: {
    intro:
      "Temporary credentials, least privilege, smaller attack surface.",
    image: "/projects/cloud-operations-lab-security.png",
    imageAlt: "Cloud Operations Lab security decisions diagram",
    groups: [
      {
        title: "Avoided",
        items: [
          "AWS access keys in CI",
          "SSH with open port 22",
          "One overpowered IAM role",
          "Unencrypted or public Terraform state",
        ],
      },
      {
        title: "Implemented",
        items: [
          "GitHub OIDC with short-lived credentials",
          "SSM Session Manager for ops access",
          "Separate plan and apply IAM roles",
          "Encrypted, versioned S3 remote state",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "Code proposes the change → CI plans it → a human approves → then Terraform apply runs.",
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
      "PRs run fmt, validate, and plan with a read-oriented OIDC role",
      "Merge to main needs GitHub Environment approval before apply",
      "Apply uses a write-scoped OIDC role",
    ],
  },
  operationsObservability: {
    intro:
      "Not create-and-forget: logs, metrics, alarms, and operational events.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt: "Cloud Operations Lab operations and observability diagram",
    items: [
      "CloudWatch Agent: logs and CPU on the EC2 host",
      "CloudWatch Alarm → SNS email",
      "SSM Run Command for health checks and ops scripts",
      "DynamoDB ops-logs for recorded operational events",
    ],
  },
  engineeringHighlights: [
    "Control plane vs AWS workload kept distinct",
    "OIDC plan/apply role separation — no static CI keys",
    "SSM operations without SSH or inbound management ports",
    "Observability via CloudWatch, SNS, and ops event logging",
  ],
  techStack: [
    {
      title: "Cloud",
      items: ["AWS", "VPC", "EC2", "IAM", "S3", "DynamoDB"],
    },
    {
      title: "IaC",
      items: ["Terraform", "Modules", "Remote State"],
    },
    {
      title: "CI/CD & Identity",
      items: ["GitHub Actions", "OIDC", "Environments"],
    },
    {
      title: "Operations",
      items: ["SSM", "CloudWatch", "SNS", "Bash"],
    },
  ],
  challengeGroups: [
    {
      title: "CI without long-lived keys",
      items: [
        "OIDC trust and separate plan/apply roles instead of static AWS credentials",
      ],
    },
    {
      title: "Access without SSH",
      items: [
        "SSM Session Manager so ops does not open port 22",
      ],
    },
    {
      title: "Safe infrastructure change",
      items: [
        "Plan on PR, human approval on main, then apply — with locked remote state",
      ],
    },
  ],
  futureImprovements: [
    "Security scanning in CI",
    "Richer alerts and dashboards",
    "Multi-account layout",
    "More reusable Terraform modules",
  ],
  projectImpact:
    "Shows platform ownership: design, secure, deploy, and operate the infrastructure applications would run on.",
};
