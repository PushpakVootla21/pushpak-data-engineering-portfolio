import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const lines = (items, x, y, options = {}) => items.map((item, index) => `<text x="${x}" y="${y + index * (options.step ?? 30)}" text-anchor="${options.anchor ?? "middle"}" font-size="${options.size ?? 22}" font-weight="${index === 0 ? 700 : 500}" fill="${options.fill ?? "#18313c"}">${escape(item)}</text>`).join("");

const shell = (title, description, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
<title id="title">${escape(title)}</title><desc id="desc">${escape(description)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#315866"/></marker></defs>
<rect width="1600" height="900" fill="#ffffff"/><rect x="45" y="42" width="1510" height="816" rx="24" fill="#f7fafb" stroke="#b9cdd5" stroke-width="2"/>
<text x="90" y="105" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#142a34">${escape(title)}</text>
<text x="90" y="145" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#536d77">${escape(description)}</text>
<g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>`;

function architecture(title, description, nodes, controls) {
  const left = 80;
  const gap = 24;
  const width = (1440 - gap * (nodes.length - 1)) / nodes.length;
  const top = 235;
  const nodeSvg = nodes.map((node, index) => {
    const x = left + index * (width + gap);
    const connector = index < nodes.length - 1 ? `<line x1="${x + width}" y1="${top + 105}" x2="${x + width + gap - 5}" y2="${top + 105}" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/>` : "";
    return `<g><rect x="${x}" y="${top}" width="${width}" height="210" rx="14" fill="${index % 2 ? "#eef7fa" : "#ffffff"}" stroke="#5c8797" stroke-width="2"/><circle cx="${x + 30}" cy="${top + 30}" r="17" fill="#087ea4"/><text x="${x + 30}" y="${top + 38}" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">${index + 1}</text>${lines(node, x + width / 2, top + 78, { step: 30, size: 22 })}${connector}</g>`;
  }).join("");
  const controlWidth = (1440 - 18 * (controls.length - 1)) / controls.length;
  const controlsSvg = controls.map((control, index) => { const x = 80 + index * (controlWidth + 18); return `<g><rect x="${x}" y="585" width="${controlWidth}" height="105" rx="12" fill="#fff" stroke="#8da7b1" stroke-width="2" stroke-dasharray="8 6"/>${lines([control], x + controlWidth / 2, 647, { size: 20 })}</g>`; }).join("");
  return shell(title, description, `${nodeSvg}<text x="80" y="548" font-size="25" font-weight="700" fill="#294854">Operational controls</text>${controlsSvg}`);
}

// Kept as a compact-layout reference for future diagram variants.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sequenceDiagram() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const steps = ["Run quarterly prechecks", "Read framework metadata", "Copy selected SQL tables to Landing", "Start Raw-stage framework log", "Invoke Databricks Landing-to-Raw notebook", "Validate parameters, paths, files and tables", "Read Parquet and validate input data", "Derive quarter_code", "Write quarter partition to Raw Delta", "Create or refresh Unity Catalog table", "Validate partition, rows and Delta output", "Return structured notebook result", "Validate status and failed_count in ADF", "Update Raw-stage log", "Update watermark", "Record master success", "Make datasets available downstream"];
  const cards = steps.map((step, index) => { const row = index < 9 ? 0 : 1; const column = row === 0 ? index : index - 9; const count = row === 0 ? 9 : 8; const width = row === 0 ? 148 : 169; const gap = 12; const x = 80 + column * (width + gap); const y = row === 0 ? 230 : 500; return `<g><rect x="${x}" y="${y}" width="${width}" height="175" rx="12" fill="${index % 2 ? "#eef7fa" : "#fff"}" stroke="#648b99" stroke-width="2"/><text x="${x + 18}" y="${y + 35}" font-size="21" font-weight="700" fill="#087ea4">${index + 1}</text>${lines(step.split(/ (?=[A-Z]|and |to |the |Raw|SQL|status)/).reduce((acc, part) => { const last = acc.at(-1) ?? ""; if ((last + " " + part).length > 20) acc.push(part); else acc[acc.length - 1] = `${last} ${part}`.trim(); return acc; }, [""]).filter(Boolean).slice(0, 4), x + width / 2, y + 72, { size: 18, step: 24 })}</g>`; }).join("");
  /* eslint-enable @typescript-eslint/no-unused-vars */
  return shell("Quarterly ADF and Databricks Execution Sequence", "Numbered source-to-Raw execution from prechecks to downstream availability", cards);
}

function readableSequenceDiagram() {
  const steps = ["Run quarterly prechecks", "Read framework metadata", "Copy selected SQL tables to Landing", "Start Raw-stage framework log", "Invoke Databricks Landing-to-Raw notebook", "Validate parameters, paths, files and tables", "Read Parquet and validate input data", "Derive quarter_code", "Write quarter partition to Raw Delta", "Create or refresh Unity Catalog table", "Validate partition, rows and Delta output", "Return structured notebook result", "Validate status and failed_count in ADF", "Update Raw-stage log", "Update watermark", "Record master success", "Make datasets available downstream"];
  const rowStarts = [0, 5, 9, 13];
  const rowLengths = [5, 4, 4, 4];
  const wrap = (value, max = 24) => value.split(" ").reduce((result, word) => {
    const current = result.at(-1) ?? "";
    if (!current || `${current} ${word}`.length <= max) result[result.length - 1] = `${current} ${word}`.trim();
    else result.push(word);
    return result;
  }, [""]).filter(Boolean);
  const cards = steps.map((step, index) => {
    const row = rowStarts.findIndex((start, rowIndex) => index >= start && index < start + rowLengths[rowIndex]);
    const column = index - rowStarts[row];
    const count = rowLengths[row];
    const gap = 18;
    const width = (1440 - gap * (count - 1)) / count;
    const x = 80 + column * (width + gap);
    const y = 205 + row * 160;
    return `<g><rect x="${x}" y="${y}" width="${width}" height="128" rx="12" fill="${index % 2 ? "#eef7fa" : "#fff"}" stroke="#648b99" stroke-width="2"/><circle cx="${x + 27}" cy="${y + 27}" r="16" fill="#087ea4"/><text x="${x + 27}" y="${y + 34}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${index + 1}</text>${lines(wrap(step, 21), x + width / 2, y + 62, { size: 20, step: 22 })}</g>`;
  }).join("");
  return shell("Quarterly ADF and Databricks Execution Sequence", "Numbered source-to-Raw execution from prechecks to downstream availability", cards);
}

function resultFlow() {
  const success = ["Landing Copy|Success", "Databricks Notebook|Completed", "Structured Result|Returned", "status = SUCCESS|failed_count = 0", "Raw-Stage|Success Log", "Watermark|Update", "Master|Success Log"].map((value) => value.split("|"));
  const main = architecture("Result Validation and Watermark Protection", "Watermark movement occurs only after the structured Raw result passes ADF validation", success, ["Notebook activity failure", "Missing result or invalid JSON", "status is not SUCCESS", "failed_count is greater than zero"]);
  return main.replace("</g></svg>", `<rect x="210" y="735" width="1180" height="82" rx="12" fill="#fff3f1" stroke="#985b52" stroke-width="2"/><text x="800" y="770" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#743e37">Any failure: record context - stop pipeline - keep watermark - do not record master success</text></g></svg>`);
}

const assets = [
  ["public/projects/validation-first-fabric-lakehouse-ingestion/architecture.svg", architecture("Validation-First Microsoft Fabric Lakehouse Ingestion", "Trusted office CSV files are validated before curated Lakehouse promotion", [["Office CSV Files", "office_*.csv"], ["Fabric Data Factory", "Discovery and orchestration"], ["Lakehouse Landing", "Controlled arrival"], ["Fabric Notebook", "PySpark validation"], ["Valid Data", "property_id upsert"], ["Invalid Data", "Quarantine context"], ["Trusted Lakehouse", "Curated output"]], ["Pipeline notification", "Audit metadata", "Archive-before-delete", "Rerun-safe processing"])],
  ["public/projects/quarterly-policy-data-delivery-platform/architecture.svg", architecture("Quarterly Source-to-Raw Lakehouse Architecture", "Fourteen configured quarterly tables move through validated Raw processing", [["SQL Source Systems", "14 configured tables"], ["Azure Data Factory", "Metadata orchestration"], ["ADLS Gen2 Landing", "Parquet"], ["Azure Databricks", "PySpark validation"], ["Raw Delta Tables", "Partition-aware quarters"], ["Unity Catalog", "Registration and refresh"], ["Data Science", "Curation notebooks"]], ["Runtime and source validation", "Master and Raw-stage logging", "Structured result validation", "Watermark and rerun control"])],
  ["public/projects/quarterly-policy-data-delivery-platform/execution-sequence.svg", readableSequenceDiagram()],
  ["public/projects/quarterly-policy-data-delivery-platform/result-watermark-flow.svg", resultFlow()],
  ["public/projects/metadata-driven-adf-ingestion/architecture.svg", architecture("Metadata-Driven Multi-Source ADF Ingestion", "Reusable orchestration routes configured source types into organised ADLS Gen2 storage", [["SQL Sources", "Database input"], ["REST or HTTP", "Endpoint input"], ["File Sources", "Configured files"], ["ADLS Metadata", "Source and target rules"], ["Azure Data Factory", "Lookup - ForEach - routing"], ["ADLS Gen2", "Organised output"]], ["Watermark processing", "Execution logging", "Retry handling", "Logic Apps notifications"])],
  ["public/projects/retail-databricks-validation-pipeline/architecture.svg", architecture("Retail Data Validation with ADF and Databricks", "Order data is staged, validated and separated into approved and rejected paths", [["Amazon S3", "Orders CSV", "Order Items JSON"], ["Azure Data Factory", "Source ingestion"], ["ADLS Gen2 Landing", "Staged source files"], ["Databricks PySpark", "order_id duplicates", "order_status reference"], ["Valid Records", "Approved reporting target"], ["Rejected Records", "ADLS rejected-data zone"]], ["Azure Key Vault credential separation", "Required-field validation", "Processing metadata", "Rejected-record preservation"])],
  ["public/projects/movie-analytics-adf-pipeline/architecture.svg", architecture("Movie Analytics Mapping Data Flow", "Row-level ranking precedes grouped aggregation and conditional output routing", [["Azure Blob Storage", "Movie CSV"], ["Derived Column", "Genre derivation"], ["Window", "Row-level ranking"], ["Aggregate", "Grouped measures"], ["Assert", "Validation rules"], ["Conditional Split", "Output routing"], ["SQL and ADLS", "Valid and rejected outputs"]], ["Source projection", "Explicit output grain", "Sink failure propagation", "Processed-file archive"])],
];

for (const [relativePath, content] of assets) {
  const output = join(root, relativePath);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, content, "utf8");
}

console.log(`Generated ${assets.length} architecture assets.`);
