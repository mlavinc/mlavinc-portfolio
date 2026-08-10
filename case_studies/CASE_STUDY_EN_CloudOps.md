# Cloud Operations Lab

Cloud Operations Lab is a small AWS operations environment defined with Terraform and delivered through GitHub Actions. It is not an end-user application. It is a working control plane for provisioning, reviewing, applying, observing, and automating infrastructure on a modest footprint: one VPC, one EC2 host (Amazon Linux 2023), CloudWatch, SSM, SNS, and a DynamoDB ops-log table.

[Architecture diagram: control plane (bootstrap, OIDC, CI/apply roles) vs workload (VPC, EC2, SSM, CloudWatch, DynamoDB)]

## Motivation / Problem

Most portfolio projects show a service that runs. Fewer show how that service's platform would be changed safely.

I built this to practice the operational loop that matters in Cloud and Platform Engineering: infrastructure as code with remote state, CI identity without long-lived access keys, least-privilege access to compute, observability when something misbehaves, and human approval before `terraform apply`. The question was practical: how do you keep a tiny AWS environment under control when changes arrive from Git, not from console clicks?

There was no product requirement and no invented business stakeholder. The goal was to reproduce, in a Free Tier-friendly lab, the decisions teams make when infrastructure is a reviewed artifact: separate plan from apply, separate bootstrap from workload, and prefer SSM over opening SSH.

## Architecture

Two planes stay separate.

**Bootstrap** runs once with local Terraform state. It creates the S3 state bucket (versioned, public access blocked, encryption, `prevent_destroy`), the DynamoDB lock table, the GitHub OIDC provider, and two IAM roles: `github-ci` for plan and `github-apply` for apply.

**Workload** lives in `environments/dev` on the S3 backend. It composes modules (`vpc`, `iam`, `ec2`, `cloudwatch`, `dynamodb`, `ssm`) instead of declaring resources inline. The host sits in a public subnet with an Internet Gateway so SSM and CloudWatch agents can reach AWS APIs. The security group is egress-only: no key pair, no inbound SSH.

```text
PR → Actions (OIDC → CI role) → fmt / validate / plan (PR comment)
  → merge to main → GitHub Environment "dev" approval
  → Actions (OIDC → apply role) → terraform apply
  → AWS + state in S3 (lock in DynamoDB)
```

On the instance, `user_data` installs rsyslog and the CloudWatch Agent, then ships `/var/log/messages`, `/var/log/secure`, and memory/disk metrics. A CPU alarm (80%, two 5-minute periods) notifies via SNS email. Parameter Store holds runtime config (table name, region, environment). Two Run Command documents embed `health_check.sh` and `log_event.sh`, which write DynamoDB items with a 30-day TTL.

[Deployment flow: PR plan comment → environment approval → apply]

## Engineering Decisions

**Bootstrap vs workload.** Creating the state backend inside the stack that depends on it is a chicken-and-egg problem. Local-state bootstrap keeps backend and CI identity out of environment composition, at the cost of a one-time manual apply.

**Modular composition.** Modules own resources; `environments/dev` only wires inputs. A future `prod` composition can reuse modules without copying resource blocks.

**SSM instead of SSH.** Interactive access uses HTTPS and IAM. No port 22, no key material in the repo. Trade-off: Session Manager plugin locally, and reachability to SSM endpoints.

**OIDC with two roles.** Plan uses `ReadOnlyAccess` plus a scoped state-backend policy. Apply uses a separate role whose trust policy matches `repo:{org}/{repo}:environment:dev` with `StringEquals`. Temporary credentials replace static keys; the Environment name must stay aligned with that condition.

**Approval before apply.** The apply job declares `environment: dev`, so required reviewers pause the workflow. `-auto-approve` is intentional: the human gate is GitHub approval, not an interactive Terraform prompt in CI.

**Scoped PassRole and instance policy.** The instance may `PutItem` on the ops table and `GetParameter` on its config path. Apply `iam:PassRole` is limited to `cloud-ops-lab-*` roles and `ec2.amazonaws.com`. The apply role still needs broad manage permissions for Terraform; the split is plan vs apply and PassRole blast radius.

**Cost-conscious topology.** One AZ, `t3.micro`, no NAT, ALB, or RDS. Operational clarity mattered more than a multi-tier network.

## Challenges

**AL2023 and file-based CloudWatch logs.** AL2023 uses journald and does not create `/var/log/messages` or `/var/log/secure`. The agent expected those paths, so logs never appeared until `user_data` installed rsyslog. With replace-on-change, fixing an already-running instance means replacing it.

**Windows CRLF in SSM documents.** Scripts carried `\r`; Linux rejected `#!/bin/bash\r` (exit 127). The SSM module normalizes CRLF to LF with `replace()` before embedding the script.

**IAM `count` and computed ARNs.** `count` on `dynamodb_table_arn != null` failed at plan because the ARN is unknown until apply. A plan-time boolean (`enable_ops_automation`) fixed it while still scoping the policy to the real ARN.

**Plan output in Actions.** Step stdout was unreliable for large plans with `continue-on-error`. The job tees to `/tmp/tfplan.txt` and exits with `${PIPESTATUS[0]}` so the PR comment has the full output and failures still fail the job.

**`.gitignore` vs CI var files.** Ignoring `*.tfvars` hid `dev.tfvars` and broke CI. The ignore list now covers only auto-loaded files (`terraform.tfvars`, `*.auto.tfvars`).

## Results

The lab deploys as one coherent stack: remote state with locking, PR plans as comments, apply gated by the `dev` environment, SSM-only access, CloudWatch plus SNS, and Run Command writes into DynamoDB with TTL. Choices stay Free Tier-oriented (small instance, PAY_PER_REQUEST DynamoDB, short log retention). There is no interactive product demo; the deliverable is the operable environment and its change pipeline.

[Screenshot placeholder: Terraform plan comment on a PR]
[Screenshot placeholder: GitHub Environment approval on apply]
[Screenshot placeholder: DynamoDB ops-logs item after health-check]

## What I Learned

OIDC trust conditions are part of the security design, not just workflow YAML. Terraform plan-time unknowns show up quickly when `count` depends on computed values. OS defaults (journald vs classic logs, CRLF vs LF) break automation in ways that look like IAM or networking until you inspect the payload. Bootstrap separation is awkward once, then simplifies every later apply.

## Future Improvements

Wire SSM parameters (`EventType`, `Message`) into the `log-event` Run Command so CLI `--parameters` reach the script. Set EC2 `metadata_options` for IMDSv2 explicitly, rather than relying only on script-side tokens. Add a second environment composition reusing the same modules once `dev` is stable.
