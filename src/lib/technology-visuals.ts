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
  "Azure Data Factory": { abbreviation: "ADF", tone: "azure" },
  "Mapping Data Flow": { abbreviation: "MDF", tone: "azure" },
  "Azure Blob Storage": { abbreviation: "ABS", tone: "azure" },
  "ADLS Gen2": { abbreviation: "ADLS", tone: "azure" },
  "Azure SQL Database": { abbreviation: "SQL", tone: "azure" },
  "Azure Databricks": { abbreviation: "DBX", tone: "databricks" },
  "Unity Catalog": { abbreviation: "UC", tone: "databricks" },
  PySpark: { abbreviation: "PS", image: "/images/technologies/apache-spark.svg", tone: "spark" },
  Python: { abbreviation: "PY", image: "/images/technologies/python.svg", tone: "python" },
  "Delta Lake": { abbreviation: "DL", tone: "database" },
  SQL: { abbreviation: "SQL", tone: "database" },
  "SQL Server": { abbreviation: "SQL", tone: "database" },
  "Amazon S3": { abbreviation: "S3", tone: "aws" },
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
