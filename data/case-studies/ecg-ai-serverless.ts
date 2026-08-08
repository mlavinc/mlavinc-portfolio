import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudy: ProjectCaseStudy = {
  introduction: [
    "End-to-end ECG classification: signal preprocessing and model training through serverless inference and a React client.",
    "The hard part was turning a biomedical ML workflow into deployable software — feature extraction and Random Forest inference behind an API on AWS Lambda, with Terraform-managed infrastructure.",
  ],
  overview: [
    "Many ML projects stop at notebooks. Production needs an API, cost control, and a clean split between training-time work and runtime inference.",
    "PhysioNet ECG data feeds a supervised pipeline (~75.5% balanced accuracy, ~76.4% accuracy). Inference is served through API Gateway and Lambda so compute runs only on demand.",
  ],
  architectureFlow: [
    "React Client",
    "API Gateway",
    "AWS Lambda",
    "ML Inference",
    "ECG Model",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API",
      items: ["REST", "Request validation", "Inference handoff"],
    },
    {
      title: "ML",
      items: [
        "ECG preprocessing",
        "Feature extraction",
        "Random Forest inference",
      ],
    },
    {
      title: "Cloud",
      items: ["Lambda", "API Gateway", "S3", "Terraform"],
    },
  ],
  mlPipeline: {
    groups: [
      {
        title: "Dataset",
        items: ["PhysioNet ECG Fragment Database"],
      },
      {
        title: "Pipeline",
        items: [
          "Signal preprocessing",
          "Feature extraction",
          "Supervised training",
          "Evaluation",
        ],
      },
      {
        title: "Model",
        items: ["Random Forest"],
      },
      {
        title: "Results",
        items: ["Balanced Accuracy ~75.5%", "Accuracy ~76.4%"],
      },
    ],
    note: "Balanced accuracy was prioritized so performance is judged fairly across cardiac classes.",
  },
  engineeringHighlights: [
    "Notebook-to-service path: signal processing packaged for Lambda inference",
    "Frontend, API, and ML concerns kept separate",
    "Terraform for reproducible Lambda, API Gateway, and S3 setup",
    "Pay-per-use inference — no always-on training or serving boxes",
  ],
  cloudArchitecture: {
    services: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Terraform"],
    description:
      "API Gateway fronts Lambda. Inference runs only when requested, so cost tracks usage instead of idle capacity.",
  },
  techStack: [
    {
      title: "Machine Learning",
      items: ["Python", "Scikit-learn", "NumPy", "Pandas", "Random Forest"],
    },
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "Cloud",
      items: ["AWS Lambda", "API Gateway", "S3", "Terraform"],
    },
  ],
  challengeGroups: [
    {
      title: "ML under Lambda constraints",
      items: [
        "Packaging feature extraction and Random Forest inference for a serverless runtime",
      ],
    },
    {
      title: "Biomedical signal → software pipeline",
      items: [
        "Moving ECG preprocessing out of ad-hoc notebooks into a repeatable service path",
      ],
    },
    {
      title: "Scale without always-on servers",
      items: [
        "API Gateway + Lambda so idle time does not mean paying for compute",
      ],
    },
  ],
  futureImprovements: [
    "Deep learning on raw waveforms",
    "Explainability (SHAP / LIME)",
    "Real-time ECG streaming",
    "Broader datasets",
  ],
};
