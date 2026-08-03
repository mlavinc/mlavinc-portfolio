import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "ECG-AI es un sistema integral de Machine Learning para clasificar patrones cardíacos a partir de señales de electrocardiograma (ECG), abarcando desde el preprocesamiento y entrenamiento del modelo hasta la inferencia serverless y una aplicación cliente desarrollada en React.",
    "El principal desafío de ingeniería consistió en convertir un flujo de trabajo de aprendizaje automático aplicado a datos biomédicos en un sistema desplegable: procesamiento de señales, extracción de características e inferencia mediante un modelo Random Forest expuesto a través de una API sobre AWS Lambda, con infraestructura administrada mediante Terraform.",
  ],
  overview: [
    "Muchos proyectos de Machine Learning terminan en notebooks o experimentos aislados. Sin embargo, llevar un modelo a producción requiere APIs, despliegue, control de costos y una clara separación entre el entrenamiento del modelo y la inferencia en tiempo de ejecución.",
    "ECG-AI aborda ese desafío utilizando el conjunto de datos PhysioNet ECG Fragment Database dentro de un pipeline supervisado que alcanza aproximadamente un 75,5 % de Balanced Accuracy y un 76,4 % de Accuracy. La inferencia se expone mediante Amazon API Gateway y AWS Lambda, permitiendo ejecutar el modelo únicamente cuando existe una solicitud.",
  ],
  architectureFlow: [
    "Aplicación Frontend",
    "API Gateway",
    "AWS Lambda",
    "Servicio de Inferencia de Machine Learning",
    "Modelo de Clasificación de ECG",
  ],
  architecture: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite"],
    },
    {
      title: "Capa API",
      items: [
        "Diseño de API REST",
        "Validación de solicitudes",
        "Comunicación con el servicio de inferencia",
      ],
    },
    {
      title: "Capa de Machine Learning",
      items: [
        "Procesamiento de señales ECG",
        "Extracción de características",
        "Clasificación mediante Random Forest",
        "Inferencia del modelo",
      ],
    },
    {
      title: "Capa Cloud",
      items: [
        "Arquitectura serverless sobre AWS",
        "Infraestructura como Código con Terraform",
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
        title: "Flujo de Procesamiento",
        items: [
          "Preprocesamiento de señales ECG",
          "Extracción de características",
          "Entrenamiento supervisado",
          "Evaluación del modelo",
        ],
      },
      {
        title: "Modelo",
        items: ["Clasificador Random Forest"],
      },
      {
        title: "Resultados",
        items: ["Balanced Accuracy: ~75,5 %", "Accuracy: ~76,4 %"],
      },
    ],
    note: "Se priorizó la Balanced Accuracy para evaluar el rendimiento de forma más representativa entre las distintas clases cardíacas.",
  },
  engineeringHighlights: [
    "Flujo completo desde el procesamiento de señales hasta la inferencia desplegada en la nube",
    "Modelo Random Forest empaquetado para ejecución serverless sobre AWS Lambda",
    "Separación clara entre frontend, API e inferencia de Machine Learning",
    "Despliegue reproducible en AWS mediante Terraform (Lambda, API Gateway y Amazon S3)",
    "Inferencia bajo demanda (pay-per-use), evitando servidores con CPU o GPU permanentemente activos",
  ],
  cloudArchitecture: {
    services: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Terraform"],
    description:
      "La inferencia se ejecuta únicamente cuando es solicitada. Amazon API Gateway expone la API y dirige las solicitudes hacia AWS Lambda, manteniendo tanto el costo como la operación alineados con el uso real del sistema, en lugar de depender de infraestructura permanentemente encendida.",
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
      title: "Desarrollo",
      items: ["Git", "Infraestructura como Código"],
    },
  ],
  challenges: [
    "Adaptar un modelo de Machine Learning a las restricciones de ejecución de AWS Lambda",
    "Integrar procesamiento de señales biomédicas dentro de un pipeline de software mantenible",
    "Diseñar una arquitectura escalable sin depender de servidores permanentemente activos",
    "Reducir la brecha entre la experimentación en ciencia de datos y una solución lista para producción",
  ],
  futureImprovements: [
    "Incorporar modelos de Deep Learning para el análisis directo de señales ECG",
    "Implementar técnicas de IA explicable (SHAP y LIME)",
    "Soporte para transmisión de ECG en tiempo real",
    "Ampliar el entrenamiento con nuevos conjuntos de datos",
    "Integrar servicios administrados de Machine Learning en AWS",
  ],
};
