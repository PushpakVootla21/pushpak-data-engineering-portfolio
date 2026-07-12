import type { SkillGroup } from "@/types/content";

const group = (id: string, title: string, description: string, displayOrder: number, names: string[], featured: string[] = []): SkillGroup => ({
  id,
  title,
  description,
  displayOrder,
  skills: names.map((name) => ({ id: `${id}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`, name, category: title, featured: featured.includes(name) })),
});

export const skillGroups: SkillGroup[] = [
  group("orchestration", "Data Orchestration", "Pipeline orchestration, parameterisation and configuration-driven data movement.", 1, ["Azure Data Factory", "Fabric Data Factory", "Metadata-driven pipelines", "Master-child pipelines", "Parameterised pipelines", "Parameterised datasets", "Dynamic expressions", "Incremental loading", "Conditional routing"], ["Azure Data Factory"]),
  group("processing", "Data Processing", "Batch transformation, validation and notebook-based processing.", 2, ["Azure Databricks", "PySpark", "SQL", "Python", "Mapping Data Flows", "Databricks Notebooks", "Fabric Notebooks"], ["Azure Databricks", "PySpark", "SQL", "Python"]),
  group("lakehouse-storage", "Lakehouse and Storage", "Cloud storage and table technologies used across Landing, Raw and curated processing.", 3, ["ADLS Gen2", "Delta Lake", "Fabric Lakehouse", "Parquet", "Azure Blob Storage", "Azure SQL Database", "SQL Server"], ["ADLS Gen2", "Delta Lake"]),
  group("quality-reliability", "Data Quality and Reliability", "Controls used to prevent invalid-data promotion and improve operational clarity.", 4, ["Schema validation", "Row-count validation", "Duplicate detection", "Null validation", "Reference-data validation", "Quarantine handling", "Rejected-record handling", "Audit metadata", "Framework logging", "Watermark control", "Retry handling", "Pipeline notifications", "Rerun-safe processing", "Archive-before-delete"]),
  group("governance-security", "Governance and Security", "Access, credential and configuration practices used across approved implementations.", 5, ["Unity Catalog", "Azure Key Vault", "Managed Identity fundamentals", "Secure linked services", "Role-based access fundamentals", "Secret separation from code", "Environment-aware configuration"], ["Unity Catalog"]),
  group("development-delivery", "Development and Delivery", "Development and documentation practices supporting maintainable data engineering.", 6, ["Git", "GitHub", "Azure DevOps fundamentals", "Technical documentation", "Data pipeline troubleshooting", "Environment configuration", "JSON configuration", "REST and HTTP ingestion"]),
].sort((a, b) => a.displayOrder - b.displayOrder);

export const coreStack = ["Microsoft Fabric", ...skillGroups.flatMap((item) => item.skills.filter((skill) => skill.featured).map((skill) => skill.name))]
  .filter((name, index, values) => values.indexOf(name) === index);
