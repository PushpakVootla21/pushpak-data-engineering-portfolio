export type TechnologyTone = "fabric" | "azure" | "databricks" | "spark" | "python" | "database" | "aws" | "neutral";

export interface TechnologyVisual {
  abbreviation: string;
  image?: string;
  tone: TechnologyTone;
}

const technologyVisuals: Record<string, TechnologyVisual> = {
  "Microsoft Fabric": { abbreviation: "MF", image: "/images/technologies/microsoft-fabric.svg", tone: "fabric" },
  "Fabric Data Factory": { abbreviation: "FDF", image: "/images/technologies/microsoft-fabric.svg", tone: "fabric" },
  "Fabric Lakehouse": { abbreviation: "FL", image: "/images/technologies/microsoft-fabric.svg", tone: "fabric" },
  "Fabric Notebook": { abbreviation: "FN", image: "/images/technologies/microsoft-fabric.svg", tone: "fabric" },
  "Azure Data Factory": { abbreviation: "ADF", image: "/images/technologies/azure-data-factory.svg", tone: "azure" },
  "Mapping Data Flow": { abbreviation: "MDF", image: "/images/technologies/azure-data-factory.svg", tone: "azure" },
  "Azure Blob Storage": { abbreviation: "ABS", image: "/images/technologies/adls-gen2.svg", tone: "azure" },
  "ADLS Gen2": { abbreviation: "ADLS", image: "/images/technologies/adls-gen2.svg", tone: "azure" },
  "Azure SQL Database": { abbreviation: "SQL", image: "/images/technologies/azure-sql-database.svg", tone: "azure" },
  "Azure Databricks": { abbreviation: "DBX", image: "/images/technologies/azure-databricks.svg", tone: "databricks" },
  "Unity Catalog": { abbreviation: "UC", image: "/images/technologies/azure-databricks.svg", tone: "databricks" },
  PySpark: { abbreviation: "PS", image: "/images/technologies/apache-spark.svg", tone: "spark" },
  Python: { abbreviation: "PY", image: "/images/technologies/python.svg", tone: "python" },
  "Delta Lake": { abbreviation: "DL", image: "/images/technologies/delta-lake-mark.svg", tone: "database" },
  SQL: { abbreviation: "SQL", image: "/images/technologies/azure-sql-database.svg", tone: "database" },
  "SQL Server": { abbreviation: "SQL", image: "/images/technologies/sql-server.svg", tone: "database" },
  "Amazon S3": { abbreviation: "S3", image: "/images/technologies/amazon-s3.svg", tone: "aws" },
  "HTTP / REST": { abbreviation: "API", tone: "neutral" },
};

function createAbbreviation(technology: string) {
  const words = technology.match(/[A-Za-z0-9]+/g) ?? [];
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words.slice(0, 4).map((word) => word[0]).join("").toUpperCase();
}

export function getTechnologyVisual(technology: string): TechnologyVisual {
  return technologyVisuals[technology] ?? { abbreviation: createAbbreviation(technology), tone: "neutral" };
}
