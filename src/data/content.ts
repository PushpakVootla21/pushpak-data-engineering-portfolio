import type { PipelineStage, WorkflowStage } from "@/types/content";

export const pipelineStages: PipelineStage[] = [
  { title: "Source Systems", technologies: "SQL Server, Files, APIs" },
  { title: "Data Ingestion", technologies: "Azure Data Factory, Fabric Data Factory" },
  { title: "Validation", technologies: "Schema checks, file validation, data-quality rules" },
  { title: "Transformation", technologies: "PySpark, Mapping Data Flows, SQL" },
  { title: "Lakehouse / Analytics", technologies: "ADLS Gen2, Delta Lake, Fabric Lakehouse, Azure SQL" },
];

export const engineeringWorkflow: WorkflowStage[] = [
  { title: "Understand", description: "Clarify source structure, target requirements, data volume, refresh pattern and failure expectations." },
  { title: "Ingest", description: "Use reusable and parameterised components to move data from files, databases or APIs." },
  { title: "Validate", description: "Check schema, required fields, duplicates, reference values and record quality before promotion." },
  { title: "Transform", description: "Apply maintainable PySpark, SQL or Mapping Data Flow logic based on the platform and use case." },
  { title: "Store", description: "Organise data into landing, raw, validated, curated or medallion layers using appropriate file and table formats." },
  { title: "Monitor and Recover", description: "Capture execution status, errors and row counts, then support safe retries, quarantine handling and controlled reruns." },
];
