import type { ContentCard, PipelineStage, WorkflowStage } from "@/types/content";

export const pipelineStages: PipelineStage[] = [
  { title: "Source Systems", technologies: "SQL Server, Files, APIs" },
  { title: "Data Ingestion", technologies: "Azure Data Factory, Fabric Data Factory" },
  { title: "Validation", technologies: "Schema checks, file validation, data-quality rules" },
  { title: "Transformation", technologies: "PySpark, Mapping Data Flows, SQL" },
  { title: "Lakehouse / Analytics", technologies: "ADLS Gen2, Delta Lake, Fabric Lakehouse, Azure SQL" },
];

export const capabilities: ContentCard[] = [
  { title: "Metadata-Driven Ingestion", description: "Reusable ingestion patterns using configuration, parameters and dynamic source-to-target processing.", items: ["Configurable source processing", "Parameterised datasets", "Dynamic file and table handling"] },
  { title: "Incremental Processing", description: "Loading patterns that process new or changed records without repeatedly reloading complete datasets.", items: ["Watermark-based ingestion", "Business-key processing", "Controlled load tracking"] },
  { title: "Data Transformation", description: "Transformation workflows using PySpark, SQL and Azure Data Factory Mapping Data Flows.", items: ["PySpark transformations", "SQL processing", "Aggregation and routing", "Bronze, Silver and Gold patterns"] },
  { title: "Data Quality and Validation", description: "Validation controls that identify invalid records before they enter trusted or reporting datasets.", items: ["Schema validation", "Duplicate detection", "Null and reference-data checks", "Quarantine and discarded-data handling"] },
  { title: "Pipeline Reliability", description: "Operational controls designed to make failures visible and reruns safer.", items: ["Error handling and retry logic", "Logging and notifications", "Archive-before-delete", "Idempotent processing patterns"] },
  { title: "Secure Connectivity", description: "Secure handling of credentials and service access across Azure data platforms.", items: ["Azure Key Vault", "Managed Identity", "Access control and governance fundamentals", "Secure linked services"] },
];

export const engineeringWorkflow: WorkflowStage[] = [
  { title: "Understand", description: "Clarify source structure, target requirements, data volume, refresh pattern and failure expectations." },
  { title: "Ingest", description: "Use reusable and parameterised components to move data from files, databases or APIs." },
  { title: "Validate", description: "Check schema, required fields, duplicates, reference values and record quality before promotion." },
  { title: "Transform", description: "Apply maintainable PySpark, SQL or Mapping Data Flow logic based on the platform and use case." },
  { title: "Store", description: "Organise data into landing, raw, validated, curated or medallion layers using appropriate file and table formats." },
  { title: "Monitor and Recover", description: "Capture execution status, errors and row counts, then support safe retries, quarantine handling and controlled reruns." },
];

export const projectCapabilities: ContentCard[] = [
  { title: "Ingestion Design", description: "File, database, API and multi-source ingestion using parameterised and metadata-driven workflows." },
  { title: "Data Validation", description: "Schema checks, duplicate detection, reference-data validation and controlled invalid-record handling." },
  { title: "Transformation", description: "PySpark, SQL and Mapping Data Flow transformations including filtering, aggregation and conditional routing." },
  { title: "Lakehouse and Storage", description: "ADLS Gen2, Delta Lake, Fabric Lakehouse and Azure SQL storage patterns." },
  { title: "Pipeline Reliability", description: "Retry handling, monitoring, notifications, secure credentials, archival controls and safe rerun considerations." },
];
