import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudy: ProjectCaseStudy = {
  introduction: [
    "I built an end-to-end ECG arrhythmia classifier that runs inference on AWS Lambda and presents results in a React SPA. A Random Forest model scores short single-lead fragments into six rhythm classes, using 22 statistical, HRV, and frequency-domain features extracted at request time.",
    "This is a portfolio project, not a clinical product. The goal was to ship a complete ML path (training, packaging, HTTP inference, UI, infrastructure) under real serverless constraints, then keep the AWS side cheap enough to create and destroy between demos.",
  ],
  overview: [
    "I wanted to answer a practical question: can a scientific Python inference stack (NumPy, SciPy, scikit-learn) run as a ZIP-deployed Lambda without containers, without always-on compute, and without drifting into a billable demo environment?",
    "Using the PhysioNet ECG Fragment Database for Dangerous Arrhythmia (2022), I trained a multiclass Random Forest on 1,016 labeled fragments and needed a way to expose it through a browser upload flow.",
    "An earlier iteration served the SPA from S3 behind CloudFront. I later moved the frontend to Vercel and left AWS responsible only for inference. That simplification is the current architecture.",
  ],
  architectureFlow: [
    "Browser",
    "Vercel React SPA",
    "Lambda Function URL",
    "Feature extraction",
    "Random Forest",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React 19", "TypeScript", "Vite", "Vercel", "TanStack Query", "Zod"],
    },
    {
      title: "Backend",
      items: [
        "Lambda Function URL",
        "Python 3.11",
        "/health · /metrics · /predict",
        "S3 model cache on cold start",
      ],
    },
    {
      title: "ML",
      items: [
        "22 statistical / HRV / frequency features",
        "Pan-Tompkins-style R-peak detection",
        "Random Forest inference",
      ],
    },
    {
      title: "Infrastructure",
      items: ["Terraform", "Artifacts S3", "IAM", "CloudWatch Logs"],
    },
  ],
  mlPipeline: {
    groups: [
      {
        title: "Dataset",
        items: [
          "PhysioNet ECG Fragment Database for Dangerous Arrhythmia (2022)",
          "1,016 labeled fragments",
          "6 rhythm classes",
        ],
      },
      {
        title: "Pipeline",
        items: [
          "Feature extraction at request time",
          "Supervised Random Forest training",
          "joblib model object in S3",
        ],
      },
      {
        title: "Model",
        items: ["Random Forest", "22 features"],
      },
      {
        title: "Results",
        items: ["Accuracy 76.96%", "Balanced accuracy 75.6%"],
      },
    ],
    note: "Per-class precision/recall/F1 and the confusion matrix are null in the committed metadata until training is re-run with the raw ECG_DB/ dataset (gitignored, not bundled).",
  },
  engineeringHighlights: [
    "ZIP Lambda instead of a container image — stay under the 250 MB unzipped limit without ECR cost",
    "Dropped wfdb and neurokit2; custom numpy WFDB reader + scipy.signal detector brought the package to ~183 MB unzipped / ~57 MB zipped",
    "Lambda Function URL instead of API Gateway for a free-tier-friendly HTTPS surface",
    "Vercel for the SPA, AWS for inference — Terraform owns only the backend",
    "S3 staging for lambda.zip because it exceeds the ~50 MB direct CreateFunction upload limit",
    "Minimal IAM: CloudWatch logging plus s3:GetObject on the single model key",
  ],
  cloudArchitectureTitle: "Cloud Architecture",
  cloudArchitecture: {
    services: [
      "AWS Lambda",
      "Lambda Function URL",
      "Amazon S3",
      "CloudWatch Logs",
      "Terraform",
      "Vercel",
    ],
    description:
      "Browser → Vercel React SPA → Lambda Function URL → feature extraction → Random Forest. The model downloads from S3 into /tmp on cold start. CORS is configured on the Function URL itself. scripts/deploy.* builds the ZIP, ensures the model object exists, applies Terraform, and health-checks the Function URL. destroy tears down AWS without touching the Vercel UI.",
  },
  techStack: [
    {
      title: "Machine Learning",
      items: ["Python", "Scikit-learn", "NumPy", "SciPy", "Random Forest"],
    },
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite", "Vercel"],
    },
    {
      title: "Cloud",
      items: ["AWS Lambda", "Function URL", "S3", "Terraform"],
    },
  ],
  challengeGroups: [
    {
      title: "Fitting the scientific stack into Lambda ZIP limits",
      items: [
        "Install manylinux x86_64 / cp311 wheels even when packaging from Windows, flatten imports, strip boto3/botocore, and zip with forward-slash paths. PowerShell Compress-Archive writes backslashes that Lambda treats as literal names.",
      ],
    },
    {
      title: "Function URL CORS and public invoke permissions",
      items: [
        "OPTIONS cannot be listed in allow_methods (AWS validation). Preflight belongs to the Function URL CORS layer. AuthType NONE needs both lambda:InvokeFunctionUrl and lambda:InvokeFunction with InvokedViaFunctionUrl — missing the second produced HTTP 403 with no CloudWatch logs.",
      ],
    },
    {
      title: "Local vs production model resolution",
      items: [
        "Locally, MODEL_LOCAL_PATH points at the joblib file. In AWS, the same loader downloads from S3 into a temp-dir cache. test_lambda.py synthesizes Function URL events for offline exercise of /health, /metrics, and /predict.",
      ],
    },
  ],
  futureImprovements: [
    "Re-run training with ECG_DB/ present so /metrics can serve per-class scores and a confusion matrix",
    "Add CI for Lambda package builds and terraform plan checks",
    "Refresh frontend architecture copy that still describes the older CloudFront + S3 path",
  ],
  projectImpact:
    "Working browser → Vercel → Lambda → model path for classify-and-visualize demos; ~183 MB / ~57 MB Lambda package; one-command AWS backend deploy/destroy. Serverless ML packaging is mostly dependency economics — what you import decides whether ZIP deploy is viable.",
};
