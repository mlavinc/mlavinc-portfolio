import type { ProjectCaseStudy } from "@/types/project";

export const ecgAiServerlessCaseStudyEs: ProjectCaseStudy = {
  introduction: [
    "Construí un clasificador de arritmias ECG de extremo a extremo: la inferencia corre en AWS Lambda y los resultados se muestran en una SPA React. Un Random Forest evalúa fragmentos cortos de una sola derivación en seis clases de ritmo, a partir de 22 features estadísticas, de HRV y del dominio frecuencial calculadas en cada request.",
    "Es un proyecto de portfolio, no un producto clínico. La meta era cerrar el ciclo completo de ML (entrenamiento, empaquetado, API HTTP, UI e infraestructura) dentro de límites reales de serverless, y dejar el lado AWS lo bastante barato como para crearlo y destruirlo entre demos.",
  ],
  overview: [
    "Quería responder una pregunta concreta: ¿se puede servir un stack científico de Python (NumPy, SciPy, scikit-learn) como Lambda empaquetada en ZIP, sin contenedores, sin cómputo siempre encendido y sin que el demo se convierta en un entorno que genere costo permanente?",
    "Con el PhysioNet ECG Fragment Database for Dangerous Arrhythmia (2022) entrené un Random Forest multiclase sobre 1.016 fragmentos etiquetados y necesitaba exponerlo con un flujo de carga desde el navegador.",
    "Hubo una iteración anterior con la SPA en S3 detrás de CloudFront. Después moví el frontend a Vercel y dejé AWS solo a cargo de la inferencia. Esa es la arquitectura actual.",
  ],
  architectureFlow: [
    "Browser",
    "SPA React en Vercel",
    "Lambda Function URL",
    "Extracción de features",
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
        "Caché del modelo en S3 en cold start",
      ],
    },
    {
      title: "ML",
      items: [
        "22 features estadísticas / HRV / frecuencia",
        "Detector de picos R estilo Pan-Tompkins",
        "Inferencia Random Forest",
      ],
    },
    {
      title: "Infraestructura",
      items: ["Terraform", "S3 de artefactos", "IAM", "CloudWatch Logs"],
    },
  ],
  mlPipeline: {
    groups: [
      {
        title: "Dataset",
        items: [
          "PhysioNet ECG Fragment Database for Dangerous Arrhythmia (2022)",
          "1.016 fragmentos etiquetados",
          "6 clases de ritmo",
        ],
      },
      {
        title: "Pipeline",
        items: [
          "Extracción de features en cada request",
          "Entrenamiento supervisado Random Forest",
          "Objeto joblib del modelo en S3",
        ],
      },
      {
        title: "Modelo",
        items: ["Random Forest", "22 features"],
      },
      {
        title: "Resultados",
        items: ["Accuracy 76,96%", "Balanced accuracy 75,6%"],
      },
    ],
    note: "Precision/recall/F1 por clase y la matriz de confusión quedan en null en los metadatos versionados hasta reentrenar con el dataset crudo ECG_DB/ (en .gitignore, no va en el repo).",
  },
  engineeringHighlights: [
    "Lambda en ZIP en lugar de imagen de contenedor — respetar el límite de 250 MB sin costo de ECR",
    "Eliminé wfdb y neurokit2; lector WFDB mínimo en numpy + detector con scipy.signal: ~183 MB descomprimidos / ~57 MB en ZIP",
    "Function URL en lugar de API Gateway para una superficie HTTPS compatible con free tier",
    "Vercel para la SPA, AWS para la inferencia — Terraform solo gestiona el backend",
    "Staging del artefacto en S3 porque lambda.zip supera el límite de ~50 MB de CreateFunction",
    "IAM mínimo: logging en CloudWatch más s3:GetObject sobre la key del modelo",
  ],
  cloudArchitectureTitle: "Arquitectura Cloud",
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
      "Browser → SPA React en Vercel → Lambda Function URL → extracción de features → Random Forest. El modelo se descarga de S3 a /tmp en cold start. El CORS vive en la Function URL. scripts/deploy.* construye el ZIP, asegura el objeto del modelo, aplica Terraform y hace health-check. destroy baja AWS sin tocar la UI en Vercel.",
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
      title: "Meter el stack científico en los límites del ZIP de Lambda",
      items: [
        "Instalar wheels manylinux x86_64 / cp311 aunque se empaquete desde Windows, aplanar imports, eliminar boto3/botocore y zippear con paths en forward slash. Compress-Archive de PowerShell escribe backslashes que Lambda interpreta como nombres literales.",
      ],
    },
    {
      title: "CORS de Function URL y permisos de invoke público",
      items: [
        "Incluir OPTIONS en allow_methods falla la validación de AWS. El preflight lo resuelve la capa CORS de la Function URL. AuthType NONE exige tanto lambda:InvokeFunctionUrl como lambda:InvokeFunction con InvokedViaFunctionUrl.",
      ],
    },
    {
      title: "Resolución del modelo en local vs producción",
      items: [
        "En local, MODEL_LOCAL_PATH apunta al joblib. En AWS, el mismo loader descarga desde S3 a un cache temporal. test_lambda.py sintetiza eventos de Function URL para ejercitar /health, /metrics y /predict sin credenciales.",
      ],
    },
  ],
  futureImprovements: [
    "Reentrenar con ECG_DB/ presente para que /metrics sirva scores por clase y matriz de confusión",
    "Añadir CI para builds del paquete Lambda y chequeos de terraform plan",
    "Actualizar el copy de arquitectura del frontend que todavía describe CloudFront + S3",
  ],
  projectImpact:
    "Camino operativo browser → Vercel → Lambda → modelo; paquete Lambda ~183 MB / ~57 MB; deploy/destroy del backend AWS en un comando. Empaquetar ML en serverless es, en buena parte, economía de dependencias: lo que importas decide si el deploy por ZIP es viable.",
};
