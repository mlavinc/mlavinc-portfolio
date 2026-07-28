import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudy: ProjectCaseStudy = {
  introduction: [
    "ECG-AI is a machine learning-powered platform designed to analyze electrocardiogram signals and classify cardiac patterns using artificial intelligence.",
    "The project combines biomedical signal processing, predictive modeling, and serverless cloud architecture to create an end-to-end AI application, from data processing and model training to cloud deployment and user interaction.",
    "The goal was to demonstrate how machine learning solutions can move beyond experimentation and become scalable software systems.",
  ],
  overview: [
    "Machine learning projects often stop at model development, but real-world AI systems require complete engineering solutions including APIs, deployment, infrastructure, and user-facing applications.",
    "ECG-AI explores how biomedical ML workloads can be integrated into a production-oriented cloud architecture.",
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
    note: "Balanced metrics were considered due to the importance of handling different cardiac classes fairly.",
  },
  engineeringHighlights: [
    "End-to-end AI engineering workflow",
    "Deployment of ML inference in a serverless environment",
    "Separation between frontend, API, and ML components",
    "Infrastructure automation with Terraform",
    "Cost-aware cloud architecture using pay-per-use services",
  ],
  cloudArchitecture: {
    services: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Terraform"],
    description:
      "Serverless execution allows the model to run only when needed, reducing operational overhead and unnecessary costs.",
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
    "Adapting a machine learning model for cloud inference",
    "Handling biomedical signal processing complexity",
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
