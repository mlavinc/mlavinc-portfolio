import type { ProjectCaseStudy } from "@/types/project";

export const cloudOperationsLabCaseStudy: ProjectCaseStudy = {
  introduction: [
    "Cloud Operations Lab is a small AWS operations environment defined with Terraform and delivered through GitHub Actions. It is not an end-user application.",
    "It is a working control plane for provisioning, reviewing, applying, observing, and automating infrastructure on a modest footprint: one VPC, one EC2 host (Amazon Linux 2023), CloudWatch, SSM, SNS, and a DynamoDB ops-log table.",
  ],
  overview: [
    "Most portfolio projects show a service that runs. Fewer show how that service's platform would be changed safely.",
    "I built this to practice the operational loop that matters in Cloud and Platform Engineering: infrastructure as code with remote state, CI identity without long-lived access keys, least-privilege access to compute, observability when something misbehaves, and human approval before terraform apply.",
    "There was no product requirement and no invented business stakeholder. The goal was to reproduce, in a Free Tier-friendly lab, the decisions teams make when infrastructure is a reviewed artifact: separate plan from apply, separate bootstrap from workload, and prefer SSM over opening SSH.",
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
        "CI plan role + apply role",
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
      "Bootstrap runs once with local Terraform state. Workload lives in environments/dev on the S3 backend and composes modules instead of declaring resources inline.",
    items: [
      "Bootstrap creates the S3 state bucket, DynamoDB lock table, GitHub OIDC provider, and github-ci / github-apply IAM roles",
      "Reusable modules: vpc, iam, ec2, cloudwatch, dynamodb, ssm",
      "Host in a public subnet with an Internet Gateway so SSM and CloudWatch agents can reach AWS APIs",
      "Security group is egress-only: no key pair, no inbound SSH",
      "S3 state + DynamoDB locking for safe collaboration and CI applies",
    ],
  },
  securityDecisions: {
    intro:
      "Temporary credentials, least privilege, and a smaller attack surface — OIDC trust conditions are part of the security design, not just workflow YAML.",
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
          "Scoped PassRole limited to cloud-ops-lab-* roles",
        ],
      },
    ],
  },
  cicdWorkflow: {
    intro:
      "PR → Actions (OIDC → CI role) → fmt / validate / plan (PR comment) → merge to main → GitHub Environment “dev” approval → Actions (OIDC → apply role) → terraform apply.",
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
      "Plan uses ReadOnlyAccess plus a scoped state-backend policy",
      "Apply trust matches repo:{org}/{repo}:environment:dev with StringEquals",
      "The apply job declares environment: dev so required reviewers pause the workflow",
      "-auto-approve is intentional: the human gate is GitHub approval, not an interactive Terraform prompt in CI",
    ],
  },
  operationsObservability: {
    intro:
      "user_data installs rsyslog and the CloudWatch Agent, then ships logs and memory/disk metrics. A CPU alarm notifies via SNS. Run Command documents write DynamoDB ops items with a 30-day TTL.",
    image: "/projects/cloud-operations-lab-operations.png",
    imageAlt: "Cloud Operations Lab operations and observability diagram",
    items: [
      "CloudWatch Agent: /var/log/messages, /var/log/secure, memory/disk metrics",
      "CPU alarm at 80% over two 5-minute periods → SNS email",
      "Parameter Store for runtime config (table name, region, environment)",
      "SSM Run Command: health_check.sh and log_event.sh → DynamoDB with TTL",
    ],
  },
  engineeringHighlights: [
    "Bootstrap vs workload separation to solve the state-backend chicken-and-egg problem",
    "Modular composition so a future prod environment can reuse modules without copying resource blocks",
    "SSM instead of SSH — interactive access over HTTPS and IAM",
    "OIDC with two roles and approval before apply",
    "Cost-conscious topology: one AZ, t3.micro, no NAT, ALB, or RDS",
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
      title: "AL2023 and file-based CloudWatch logs",
      items: [
        "AL2023 uses journald and does not create /var/log/messages or /var/log/secure. Logs never appeared until user_data installed rsyslog. With replace-on-change, fixing a running instance means replacing it.",
      ],
    },
    {
      title: "Windows CRLF in SSM documents",
      items: [
        "Scripts carried \\r; Linux rejected #!/bin/bash\\r (exit 127). The SSM module normalizes CRLF to LF with replace() before embedding the script.",
      ],
    },
    {
      title: "IAM count and computed ARNs",
      items: [
        "count on dynamodb_table_arn != null failed at plan because the ARN is unknown until apply. A plan-time boolean (enable_ops_automation) fixed it while still scoping the policy to the real ARN.",
      ],
    },
    {
      title: "Plan output and .gitignore vs CI var files",
      items: [
        "Large plans needed tee to /tmp/tfplan.txt with PIPESTATUS so PR comments stay complete. Ignoring *.tfvars hid dev.tfvars and broke CI — the ignore list now covers only auto-loaded files.",
      ],
    },
  ],
  futureImprovements: [
    "Wire SSM parameters (EventType, Message) into the log-event Run Command so CLI --parameters reach the script",
    "Set EC2 metadata_options for IMDSv2 explicitly",
    "Add a second environment composition reusing the same modules once dev is stable",
  ],
  projectImpact:
    "The lab deploys as one coherent stack: remote state with locking, PR plans as comments, apply gated by the dev environment, SSM-only access, CloudWatch plus SNS, and Run Command writes into DynamoDB with TTL. There is no interactive product demo — the deliverable is the operable environment and its change pipeline.",
};
