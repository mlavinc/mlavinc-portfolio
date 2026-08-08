import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Clasificación de ECG de extremo a extremo: preprocesamiento y entrenamiento hasta inferencia serverless y un cliente React.",
    "El reto fue convertir un flujo de ML biomédico en software desplegable — extracción de features e inferencia Random Forest detrás de una API en AWS Lambda, con infraestructura en Terraform.",
  ],
  overview: [
    "Muchos proyectos de ML terminan en notebooks. Producción exige API, control de costos y una separación clara entre entrenamiento e inferencia en runtime.",
    "Datos PhysioNet ECG alimentan un pipeline supervisado (~75,5 % balanced accuracy, ~76,4 % accuracy). La inferencia se sirve con API Gateway y Lambda: compute solo bajo demanda.",
  ],
  architectureFlow: [
    "Cliente React",
    "API Gateway",
    "AWS Lambda",
    "Inferencia ML",
    "Modelo ECG",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "API",
      items: ["REST", "Validación de requests", "Handoff a inferencia"],
    },
    {
      title: "ML",
      items: [
        "Preprocesamiento ECG",
        "Extracción de features",
        "Inferencia Random Forest",
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
          "Preprocesamiento de señal",
          "Extracción de features",
          "Entrenamiento supervisado",
          "Evaluación",
        ],
      },
      {
        title: "Modelo",
        items: ["Random Forest"],
      },
      {
        title: "Resultados",
        items: ["Balanced Accuracy ~75,5 %", "Accuracy ~76,4 %"],
      },
    ],
    note: "Se priorizó balanced accuracy para juzgar el rendimiento de forma justa entre clases cardíacas.",
  },
  engineeringHighlights: [
    "De notebook a servicio: procesamiento de señal empaquetado para inferencia en Lambda",
    "Frontend, API y ML mantenidos como concerns separados",
    "Terraform para un setup reproducible de Lambda, API Gateway y S3",
    "Inferencia pay-per-use — sin cajas de training o serving siempre encendidas",
  ],
  cloudArchitecture: {
    services: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Terraform"],
    description:
      "API Gateway frente a Lambda. La inferencia corre solo cuando hay request; el costo sigue el uso, no la capacidad idle.",
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
      title: "ML bajo restricciones de Lambda",
      items: [
        "Empaquetar extracción de features e inferencia Random Forest para un runtime serverless",
      ],
    },
    {
      title: "Señal biomédica → pipeline de software",
      items: [
        "Sacar el preprocesamiento ECG de notebooks ad-hoc a un camino de servicio repetible",
      ],
    },
    {
      title: "Escalar sin servidores siempre activos",
      items: [
        "API Gateway + Lambda para que el idle no signifique pagar compute",
      ],
    },
  ],
  futureImprovements: [
    "Deep learning sobre waveforms crudas",
    "Explicabilidad (SHAP / LIME)",
    "Streaming de ECG en tiempo real",
    "Datasets más amplios",
  ],
};
