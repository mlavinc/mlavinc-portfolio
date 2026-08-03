import type { ExperienceCaseStudy } from "@/types/experience";
import type { Localized } from "@/types/i18n";

const nestleImages = {
  iad: [
    "/experience/nestle/1-IAD-Nestle.jpg",
    "/experience/nestle/2-IAD-Nestle.jpg",
    "/experience/nestle/3-IAD-Nestle.jpg",
    "/experience/nestle/4-IAD-Nestle.jpg",
  ],
  she: [
    "/experience/nestle/1-SHE-Nestle.jpg",
    "/experience/nestle/2-SHE-Nestle.jpg",
    "/experience/nestle/3-SHE-Nestle.jpg",
    "/experience/nestle/4-SHE-Nestle.jpg",
    "/experience/nestle/5-SHE-Nestle.jpg",
    "/experience/nestle/6-SHE-Nestle.jpg",
  ],
  electric: [
    "/experience/nestle/1-Electric-Nestle.jpg",
    "/experience/nestle/2-Electric-Nestle.jpg",
    "/experience/nestle/3-Electric-Nestle.jpg",
  ],
  ndc: [
    "/experience/nestle/1-NDC-Nestle.jpg",
    "/experience/nestle/2-NDC-Nestle.jpg",
    "/experience/nestle/3-NDC-Nestle.jpg",
  ],
  caps: ["/experience/nestle/Totem-Nestle.jpg"],
};

export const nestleCaseStudy: Localized<ExperienceCaseStudy> = {
  en: {
    introduction: [
      "During a five-month internship at Nestlé Chile (Feb–Jul 2025), I worked within the Digital & New Tech team delivering internal enterprise applications used across real business operations.",
      "The work centered on solution design, workflow automation, stakeholder collaboration, and system integration—turning operational requirements from HR, SH&E, technical, and commercial teams into maintainable digital solutions.",
    ],
    overview: [
      "Nestlé Chile needed to digitalize fragmented operational processes that still relied on paper forms, shared spreadsheets, and disconnected tools.",
      "As part of Digital & New Tech, I collaborated with business stakeholders to understand process constraints, design practical solutions, and deliver applications that improved traceability, reporting, and day-to-day execution.",
      "The engagement also included contributing to a growing Power Platform delivery cell in Chile, focused on enterprise automation and digital transformation rather than isolated one-off forms.",
    ],
    impact: [
      "Delivered multiple internal applications adopted by operational teams across Nestlé Chile.",
      "Improved process traceability for contractor control, onboarding compliance, performance evaluations, and technical documentation.",
      "Automated recurring reporting and document generation, reducing manual follow-up work for business users.",
      "Collaborated directly with stakeholders to translate operational needs into reliable digital workflows.",
    ],
    solutions: [
      {
        id: "iad",
        name: "IAD — Performance Evaluation",
        problem:
          "HR relied on an outdated performance-evaluation application (IAD) that no longer aligned with current data, reporting needs, or a clear evaluation workflow.",
        solution:
          "Redesigned and delivered a modern evaluation application that supports collaborator assessments, feedback capture, PDF report generation, and automated distribution of results to evaluators and evaluated employees.",
        architecture: [
          "Stakeholder workshops with HR to map evaluation roles, scoring flow, and reporting outputs.",
          "Application screens for evaluation capture, feedback notes, and result review.",
          "Automated document generation and email delivery of evaluation reports.",
          "Centralized storage of evaluation records for auditability and semester-based process updates.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Replaced a critical legacy HR evaluation tool with a maintainable digital workflow.",
          "Improved traceability of performance evaluations and feedback.",
          "Reduced time spent generating and distributing evaluation reports.",
        ],
        images: nestleImages.iad,
      },
      {
        id: "she",
        name: "SH&E — Contractor Control",
        problem:
          "Safety, Health & Environment (SH&E) managed contractor information, induction status, and site access in a fragmented, largely manual way—limiting traceability and compliance visibility.",
        solution:
          "Built a contractor-control application for real-time lookup by RUT, induction verification, entry/exit logging, weekly attendance reporting, and on-demand PDF export.",
        architecture: [
          "Contractor lookup by RUT with induction date, validity, site, and contract status.",
          "Real-time entry and exit registration stored in SharePoint lists.",
          "Power Automate weekly report covering the previous seven days of access activity.",
          "In-app PDF export for day-specific inspections and validations.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Centralized contractor verification and site-access tracking for SH&E.",
          "Strengthened compliance traceability for inductions and site entries.",
          "Reduced dependence on manual registers and ad-hoc reporting.",
        ],
        images: nestleImages.she,
      },
      {
        id: "electric",
        name: "Electric Tools — Digital Handover",
        problem:
          "The electrical team tracked contractor tool handovers with physical forms, creating gaps in document control, retrieval speed, and audit readiness.",
        solution:
          "Digitized the full handover process: structured data capture, validation, automatic PDF generation with dynamic naming, SharePoint archival, and email notification to technical owners.",
        architecture: [
          "Digital form aligned to the original physical contract fields.",
          "Validation for company, contractor, tool type, condition, and observations.",
          "Automated PDF generation named by contractor and date.",
          "SharePoint archival plus simultaneous email delivery to technical stakeholders.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Replaced paper-based tool contracts with a searchable digital trail.",
          "Improved availability of records for inspections and technical validation.",
          "Reduced delays caused by missing or incomplete physical documentation.",
        ],
        images: nestleImages.electric,
      },
      {
        id: "ndc",
        name: "NDC — Onboarding & Compliance Tracking",
        problem:
          "At Nestlé Development Center (NDC), onboarding, handover, and QSHE activities were tracked without a standardized digital structure, making ownership, deadlines, and audit evidence hard to manage.",
        solution:
          "Delivered an activity-tracking application for onboarding, handover, and QSHE plans—with assignees, due dates, evidence attachments, comments, status visibility, and automated reminders.",
        architecture: [
          "Process creation with worker assignment across onboarding, handover, and QSHE plans.",
          "Selectable predefined activity catalogs (~20 tasks per category).",
          "Due-date tracking, completion dates, responsible owners, comments, and evidence uploads.",
          "Power Automate reminders before activity deadlines, with SharePoint as the system of record.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Digitized NDC onboarding and compliance follow-up for workers and contractors.",
          "Improved audit readiness through complete activity traceability.",
          "Increased completion discipline through automated reminders.",
        ],
        images: nestleImages.ndc,
      },
      {
        id: "caps",
        name: "CAPS — Safety Process Attendance",
        problem:
          "HR needed a more usable CAPS (Control of Attendance to Safety Processes) experience. The previous interface had low adoption due to rigid interaction and limited flexibility.",
        solution:
          "Redesigned and prototyped a CAPS application with clearer navigation, role-aware registration flows, and a UX-focused interface intended for HR validation and future expansion—including kiosk/totem usage contexts.",
        architecture: [
          "Structured navigation menus for CAPS process registration.",
          "User and category-based attendance capture.",
          "Interface redesign oriented to adoption and operational clarity.",
          "Modular foundation prepared for HR validation and later production rollout.",
        ],
        technologies: ["Power Apps", "SharePoint", "Microsoft 365"],
        businessImpact: [
          "Delivered a functional prototype well received by HR for validation.",
          "Established a clearer digital foundation for CAPS process attendance.",
          "Improved usability compared with the previous rigid interface.",
        ],
        images: nestleImages.caps,
      },
    ],
    additionalContributions: [
      {
        title: "Savory — POP Inventory with Document AI",
        paragraph:
          "Supported Trade Marketing (Savory) by contributing to an inventory application for POP materials, exploring AI Builder to extract invoice line items and reduce manual stock entry into SharePoint-backed workflows.",
      },
      {
        title: "NesGen Accelerator & Corporate AI Exploration",
        paragraph:
          "Participated in exploratory sessions around Nestlé’s internal AI tooling (NesGPT / NesGen Accelerator), evaluating safe integration patterns with Power Platform flows and documenting potential acceleration use cases for future internal applications.",
      },
    ],
    techStack: [
      {
        title: "Platform",
        items: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
      },
      {
        title: "Engineering Practices",
        items: [
          "Solution design",
          "Workflow automation",
          "System integration",
          "Stakeholder collaboration",
        ],
      },
      {
        title: "Additional",
        items: ["Python", "AI Builder", "ServiceNow"],
      },
    ],
    lessonsLearned: [
      "Enterprise delivery depends as much on stakeholder alignment as on implementation speed.",
      "Clear process modeling is required before automating reporting, reminders, or document generation.",
      "Maintainable internal software needs explicit ownership of data structures and operational handoff.",
      "Digital transformation in large organizations succeeds when solutions fit existing governance and day-to-day workflows.",
    ],
  },
  es: {
    introduction: [
      "Durante una práctica profesional de cinco meses en Nestlé Chile (feb–jul 2025), formé parte del equipo Digital & New Tech entregando aplicaciones empresariales internas usadas en operaciones reales del negocio.",
      "El trabajo se centró en diseño de soluciones, automatización de flujos, colaboración con stakeholders e integración de sistemas: transformar requerimientos operativos de RRHH, SH&E, áreas técnicas y comerciales en soluciones digitales mantenibles.",
    ],
    overview: [
      "Nestlé Chile necesitaba digitalizar procesos operativos fragmentados que aún dependían de formularios en papel, planillas compartidas y herramientas desconectadas.",
      "Dentro de Digital & New Tech, colaboré con stakeholders de negocio para entender restricciones del proceso, diseñar soluciones prácticas y entregar aplicaciones que mejoraran la trazabilidad, el reporting y la ejecución diaria.",
      "La experiencia también incluyó contribuir a una célula emergente de entrega con Power Platform en Chile, enfocada en automatización empresarial y transformación digital, más allá de formularios aislados.",
    ],
    impact: [
      "Entregué múltiples aplicaciones internas adoptadas por equipos operativos en Nestlé Chile.",
      "Mejoré la trazabilidad de procesos de control de contratistas, cumplimiento de onboarding, evaluaciones de desempeño y documentación técnica.",
      "Automaticé reporting recurrente y generación de documentos, reduciendo seguimiento manual para usuarios de negocio.",
      "Colaboré directamente con stakeholders para traducir necesidades operativas en flujos digitales confiables.",
    ],
    solutions: [
      {
        id: "iad",
        name: "IAD — Evaluación de Desempeño",
        problem:
          "RRHH dependía de una aplicación obsoleta de evaluación de desempeño (IAD) que ya no se alineaba con datos actuales, necesidades de reporting ni un flujo de evaluación claro.",
        solution:
          "Rediseñé y entregué una aplicación moderna de evaluación que permite valorar colaboradores, registrar retroalimentación, generar reportes PDF y distribuir automáticamente los resultados al evaluador y al evaluado.",
        architecture: [
          "Talleres con RRHH para mapear roles, flujo de evaluación y salidas de reporting.",
          "Pantallas para captura de evaluación, notas de feedback y revisión de resultados.",
          "Generación automatizada de documentos y envío por correo de informes.",
          "Almacenamiento centralizado de evaluaciones para auditoría y actualización semestral del proceso.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Reemplazó una herramienta crítica heredada de RRHH por un flujo digital mantenible.",
          "Mejoró la trazabilidad de evaluaciones y feedback.",
          "Redujo el tiempo dedicado a generar y distribuir reportes de evaluación.",
        ],
        images: nestleImages.iad,
      },
      {
        id: "she",
        name: "SH&E — Control de Contratistas",
        problem:
          "Seguridad, Salud y Medioambiente (SH&E) gestionaba información de contratistas, estado de inducción e ingresos a instalaciones de forma fragmentada y mayormente manual, limitando la trazabilidad y la visibilidad de cumplimiento.",
        solution:
          "Desarrollé una aplicación de control de contratistas para consulta en tiempo real por RUT, verificación de inducción, registro de ingresos/salidas, reporting semanal de asistencia y exportación PDF bajo demanda.",
        architecture: [
          "Consulta de contratistas por RUT con fecha de inducción, vigencia, site y estado de contrato.",
          "Registro en tiempo real de ingresos y salidas almacenado en listas de SharePoint.",
          "Reporte semanal automatizado con Power Automate sobre los últimos siete días de accesos.",
          "Exportación PDF desde la app para inspecciones y validaciones por día.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Centralizó la verificación de contratistas y el seguimiento de accesos para SH&E.",
          "Fortaleció la trazabilidad de cumplimiento en inducciones e ingresos.",
          "Redujo la dependencia de registros manuales y reportes ad hoc.",
        ],
        images: nestleImages.she,
      },
      {
        id: "electric",
        name: "Herramientas Eléctricas — Entrega Digital",
        problem:
          "El equipo eléctrico controlaba la entrega de herramientas a contratistas con formularios físicos, generando brechas en control documental, velocidad de recuperación y preparación para fiscalizaciones.",
        solution:
          "Digitalicé el proceso completo de entrega: captura estructurada, validación, generación automática de PDF con nombre dinámico, archivado en SharePoint y notificación por correo a responsables técnicos.",
        architecture: [
          "Formulario digital alineado a los campos del contrato físico original.",
          "Validación de empresa, contratista, tipo de herramienta, estado y observaciones.",
          "Generación automática de PDF nombrado por contratista y fecha.",
          "Archivado en SharePoint y envío simultáneo por correo a stakeholders técnicos.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Reemplazó contratos en papel por un registro digital consultable.",
          "Mejoró la disponibilidad de antecedentes para inspecciones y validación técnica.",
          "Redujo retrasos por documentación física incompleta o extraviada.",
        ],
        images: nestleImages.electric,
      },
      {
        id: "ndc",
        name: "NDC — Onboarding y Cumplimiento",
        problem:
          "En Nestlé Development Center (NDC), las actividades de onboarding, handover y QSHE se seguían sin una estructura digital estandarizada, dificultando responsables, plazos y evidencia para auditorías.",
        solution:
          "Entregué una aplicación de seguimiento para planes de onboarding, handover y QSHE, con responsables, fechas límite, evidencia adjunta, comentarios, visibilidad de estado y recordatorios automáticos.",
        architecture: [
          "Creación de procesos con asignación de trabajadores para onboarding, handover y QSHE.",
          "Catálogos de actividades predefinidas (~20 tareas por categoría).",
          "Seguimiento de vencimientos, fechas de cumplimiento, responsables, comentarios y evidencias.",
          "Recordatorios con Power Automate antes del vencimiento, usando SharePoint como sistema de registro.",
        ],
        technologies: [
          "Power Apps",
          "Power Automate",
          "SharePoint",
          "Microsoft 365",
        ],
        businessImpact: [
          "Digitalizó el seguimiento de onboarding y cumplimiento en NDC para trabajadores y contratistas.",
          "Mejoró la preparación para auditorías mediante trazabilidad completa de actividades.",
          "Aumentó la disciplina de cumplimiento gracias a recordatorios automáticos.",
        ],
        images: nestleImages.ndc,
      },
      {
        id: "caps",
        name: "CAPS — Asistencia a Procesos de Seguridad",
        problem:
          "RRHH necesitaba una experiencia CAPS (Control de Asistencia a Procesos de Seguridad) más usable. La interfaz anterior tenía baja adopción por su rigidez y poca flexibilidad.",
        solution:
          "Rediseñé y prototipé una aplicación CAPS con navegación más clara, flujos de registro por usuario/categoría y una interfaz enfocada en UX, pensada para validación de RRHH y expansión futura—incluyendo contextos de tótem/kiosco.",
        architecture: [
          "Menús de navegación estructurados para registro de procesos CAPS.",
          "Captura de asistencia por usuario y categoría.",
          "Rediseño de interfaz orientado a adopción y claridad operativa.",
          "Base modular preparada para validación de RRHH y posterior puesta en producción.",
        ],
        technologies: ["Power Apps", "SharePoint", "Microsoft 365"],
        businessImpact: [
          "Entregué un prototipo funcional bien recibido por RRHH para validación.",
          "Establecí una base digital más clara para el control de asistencia CAPS.",
          "Mejoré la usabilidad respecto de la interfaz rígida anterior.",
        ],
        images: nestleImages.caps,
      },
    ],
    additionalContributions: [
      {
        title: "Savory — Inventario POP con IA documental",
        paragraph:
          "Apoyé a Trade Marketing (Savory) en una aplicación de inventario de material POP, explorando AI Builder para extraer ítems de facturas y reducir la digitación manual en flujos respaldados por SharePoint.",
      },
      {
        title: "NesGen Accelerator y exploración de IA corporativa",
        paragraph:
          "Participé en sesiones exploratorias sobre herramientas internas de IA de Nestlé (NesGPT / NesGen Accelerator), evaluando patrones seguros de integración con flujos de Power Platform y documentando casos de uso para acelerar futuras aplicaciones internas.",
      },
    ],
    techStack: [
      {
        title: "Plataforma",
        items: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
      },
      {
        title: "Prácticas de Ingeniería",
        items: [
          "Diseño de soluciones",
          "Automatización de flujos",
          "Integración de sistemas",
          "Colaboración con stakeholders",
        ],
      },
      {
        title: "Adicional",
        items: ["Python", "AI Builder", "ServiceNow"],
      },
    ],
    lessonsLearned: [
      "La entrega empresarial depende tanto del alineamiento con stakeholders como de la velocidad de implementación.",
      "Es necesario modelar el proceso con claridad antes de automatizar reporting, recordatorios o generación de documentos.",
      "El software interno mantenible requiere ownership explícito de estructuras de datos y traspaso operativo.",
      "La transformación digital en organizaciones grandes funciona cuando las soluciones encajan en la gobernanza y los flujos diarios existentes.",
    ],
  },
};
