import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudy: ProjectCaseStudy = {
  introduction: [
    "ECG-AI is an end-to-end machine learning system for classifying cardiac patterns from electrocardiogram signals — from preprocessing and model training through serverless inference and a React client.",
    "The main engineering challenge was packaging a biomedical ML workflow as deployable software: feature extraction and Random Forest inference behind an API, running on AWS Lambda with Terraform-managed infrastructure.",
  ],
  overview: [
    "Many ML projects stop at notebooks. Production AI needs APIs, deployment, cost controls, and a clear separation between training-time experimentation and runtime inference.",
    "ECG-AI bridges that gap: PhysioNet ECG data feeds a supervised pipeline (balanced accuracy ~75.5%, accuracy ~76.4%), and inference is served through API Gateway and Lambda so compute runs only on demand.",
  ],
  architectureFlow: [
    "Frontend Application",
    "API Gateway",
    "AWS Lambda",
    "Machine Learning Inference Service",
    "ECG Classification Model",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API Layer",
      items: [
        "REST API design",
        "Request validation",
        "Communication with inference service",
      ],
    },
    {
      title: "Machine Learning Layer",
      items: [
        "ECG signal processing",
        "Feature extraction",
        "Random Forest classification",
        "Model inference",
      ],
    },
    {
      title: "Cloud Layer",
      items: [
        "AWS serverless architecture",
        "Infrastructure as Code with Terraform",
      ],
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
          "ECG signal preprocessing",
          "Feature extraction",
          "Supervised learning",
          "Model evaluation",
        ],
      },
      {
        title: "Model",
        items: ["Random Forest classifier"],
      },
      {
        title: "Results",
        items: ["Balanced Accuracy: ~75.5%", "Accuracy: ~76.4%"],
      },
    ],
    note: "Balanced metrics were prioritized to evaluate performance fairly across cardiac classes.",
  },
  engineeringHighlights: [
    "End-to-end path from signal processing to cloud-hosted inference",
    "Random Forest model packaged for serverless execution on AWS Lambda",
    "Clear separation of frontend, API, and ML inference concerns",
    "Terraform for reproducible AWS deployment (Lambda, API Gateway, S3)",
    "Pay-per-use inference to avoid always-on GPU/CPU servers",
  ],
  cloudArchitecture: {
    services: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Terraform"],
    description:
      "Inference runs only when requested. API Gateway fronts Lambda, keeping operational overhead and cost aligned with actual usage rather than idle capacity.",
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
    {
      title: "Development",
      items: ["Git", "Infrastructure as Code"],
    },
  ],
  challenges: [
    "Adapting a machine learning model for cloud inference constraints",
    "Handling biomedical signal processing complexity in a software pipeline",
    "Designing scalable architecture without always-running servers",
    "Bridging data science experimentation with software engineering practices",
  ],
  futureImprovements: [
    "Deep learning approaches for raw ECG waveform analysis",
    "Explainable AI techniques such as SHAP/LIME",
    "Real-time ECG streaming",
    "Expanded datasets",
    "Managed ML services integration",
  ],
};
