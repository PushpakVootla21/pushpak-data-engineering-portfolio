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

function branchingArchitecture(title, description, trunk, branches, controls) {
  const left = 80;
  const gap = 18;
  const trunkArea = 930;
  const width = (trunkArea - gap * (trunk.length - 1)) / trunk.length;
  const top = 225;
  const nodes = trunk.map((node, index) => {
    const x = left + index * (width + gap);
    const connector = index < trunk.length - 1 ? `<line x1="${x + width}" y1="${top + 92}" x2="${x + width + gap - 5}" y2="${top + 92}" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/>` : "";
    return `<g><rect x="${x}" y="${top}" width="${width}" height="184" rx="14" fill="${index % 2 ? "#eef7fa" : "#fff"}" stroke="#5c8797" stroke-width="2"/><circle cx="${x + 27}" cy="${top + 27}" r="16" fill="#087ea4"/><text x="${x + 27}" y="${top + 34}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${index + 1}</text>${lines(node, x + width / 2, top + 68, { step: 27, size: 18 })}${connector}</g>`;
  }).join("");
  const endX = left + trunkArea;
  const endY = top + 92;
  const branchSvg = branches.map((branchDefinition, branchIndex) => {
    const branch = branchDefinition.nodes;
    const y = branchIndex === 0 ? 205 : 440;
    const branchNodes = branch.map((node, index) => {
      const x = 1080 + index * 245;
      const connector = index < branch.length - 1 ? `<line x1="${x + 205}" y1="${y + 82}" x2="${x + 235}" y2="${y + 82}" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/>` : "";
      const isException = branchDefinition.tone === "exception";
      return `<g><rect x="${x}" y="${y}" width="205" height="164" rx="14" fill="${isException ? "#fff4f1" : "#edf8f4"}" stroke="${isException ? "#9b665c" : "#4f8b78"}" stroke-width="2"/>${lines(node, x + 102.5, y + 58, { step: 28, size: 19 })}${connector}</g>`;
    }).join("");
    return `<path d="M ${endX} ${endY} C 1045 ${endY}, 1045 ${y + 82}, 1072 ${y + 82}" fill="none" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/><text x="1068" y="${y - 10}" text-anchor="end" font-size="18" font-weight="700" fill="#315866">${branchDefinition.label}</text>${branchNodes}`;
  }).join("");
  const controlWidth = (1440 - 18 * (controls.length - 1)) / controls.length;
  const controlsSvg = controls.map((control, index) => { const x = 80 + index * (controlWidth + 18); return `<g><rect x="${x}" y="720" width="${controlWidth}" height="82" rx="12" fill="#fff" stroke="#8da7b1" stroke-width="2" stroke-dasharray="8 6"/>${lines([control], x + controlWidth / 2, 769, { size: 19 })}</g>`; }).join("");
  return shell(title, description, `${nodes}${branchSvg}<text x="80" y="687" font-size="24" font-weight="700" fill="#294854">Operational controls</text>${controlsSvg}`);
}

function metadataArchitecture() {
  const source = (y, number, title, detail) => `<g><rect x="80" y="${y}" width="280" height="118" rx="14" fill="#fff" stroke="#5c8797" stroke-width="2"/><circle cx="108" cy="${y + 28}" r="16" fill="#087ea4"/><text x="108" y="${y + 35}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${number}</text>${lines([title, detail], 220, y + 48, { step: 29, size: 20 })}<line x1="360" y1="${y + 59}" x2="610" y2="390" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/></g>`;
  const body = `${source(210, 1, "SQL Sources", "Database input")}${source(365, 2, "REST or HTTP", "Endpoint input")}${source(520, 3, "File Sources", "Configured files")}
  <g><rect x="610" y="300" width="330" height="180" rx="14" fill="#eef7fa" stroke="#5c8797" stroke-width="2"/>${lines(["Azure Data Factory", "Lookup - ForEach", "source-type routing"], 775, 360, { step: 31, size: 22 })}</g>
  <line x1="940" y1="390" x2="1070" y2="390" stroke="#315866" stroke-width="4" marker-end="url(#arrow)"/>
  <g><rect x="1075" y="300" width="390" height="180" rx="14" fill="#edf8f4" stroke="#4f8b78" stroke-width="2"/>${lines(["ADLS Gen2 Landing", "Organised by source", "and processing date"], 1270, 360, { step: 31, size: 22 })}</g>
  <g><rect x="610" y="180" width="330" height="82" rx="12" fill="#fff8e8" stroke="#9a7b38" stroke-width="2"/>${lines(["ADLS Metadata Configuration", "source, target and load rules"], 775, 215, { step: 25, size: 19 })}</g>
  <line x1="775" y1="262" x2="775" y2="294" stroke="#9a7b38" stroke-width="4" stroke-dasharray="8 6" marker-end="url(#arrow)"/>
  <text x="965" y="233" font-size="19" font-weight="700" fill="#725a25">Control flow</text>
  <text x="430" y="340" font-size="19" font-weight="700" fill="#315866">Business data flow</text>
  <text x="80" y="700" font-size="24" font-weight="700" fill="#294854">Operational controls</text>
  ${["Watermark processing", "Execution logging", "Retry handling", "Logic Apps notifications"].map((item, index) => `<g><rect x="${80 + index * 364}" y="730" width="346" height="72" rx="12" fill="#fff" stroke="#8da7b1" stroke-width="2" stroke-dasharray="8 6"/>${lines([item], 253 + index * 364, 773, { size: 19 })}</g>`).join("")}`;
  return shell("Metadata-Driven Multi-Source ADF Ingestion", "Configuration controls reusable orchestration while business data moves from each source to ADLS Gen2", body);
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
  const steps = ["Run quarterly prechecks", "Read framework metadata", "Copy selected SQL tables to Landing", "Start Raw-stage framework log", "Invoke Databricks Landing-to-Raw notebook", "Validate parameters, paths, files and tables", "Read Landing Parquet files", "Validate input data", "Derive quarter_code", "Write quarter partition to Raw Delta", "Create or refresh Unity Catalog table", "Validate partition, rows and Delta output", "Return structured notebook result", "Validate status and failed_count in ADF", "Update Raw-stage log", "Update watermark", "Record master success", "Make datasets available downstream"];
  const rowStarts = [0, 5, 10, 14];
  const rowLengths = [5, 5, 4, 4];
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
  const success = ["Landing Copy|Success", "Databricks|Notebook|Completed", "Structured|Result|Returned", "status =|SUCCESS|failed_count = 0", "Raw-Stage|Success Log", "Watermark|Update", "Master|Success Log"].map((value) => value.split("|"));
  const main = architecture("Result Validation and Watermark Protection", "Watermark movement occurs only after the structured Raw result passes ADF validation", success, ["Notebook activity failure", "Missing result or invalid JSON", "status is not SUCCESS", "failed_count is greater than zero"]);
  return main.replace("</g></svg>", `<rect x="210" y="735" width="1180" height="82" rx="12" fill="#fff3f1" stroke="#985b52" stroke-width="2"/><text x="800" y="770" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#743e37">Any failure: record context - stop pipeline - keep watermark - do not record master success</text></g></svg>`);
}

const assets = [
  ["public/projects/validation-first-fabric-lakehouse-ingestion/architecture.svg", branchingArchitecture("Validation-First Microsoft Fabric Lakehouse Ingestion", "Trusted office CSV files are validated before approved and quarantine paths diverge", [["Office CSV Files", "office_*.csv"], ["Fabric Data Factory", "Discovery and routing"], ["Lakehouse Landing", "Controlled arrival"], ["Fabric Notebook", "PySpark validation"]], [{ label: "Approved", tone: "approved", nodes: [["Valid Records", "approved columns"], ["Curated Lakehouse", "property_id upsert"]] }, { label: "Invalid", tone: "exception", nodes: [["Invalid Files", "schema or contract"], ["Quarantine", "retained for review"]] }], ["Pipeline notification", "Audit metadata", "Archive-before-delete", "Rerun-safe processing"])],
  ["public/projects/quarterly-policy-data-delivery-platform/architecture.svg", architecture("Quarterly Source-to-Raw Lakehouse Architecture", "Fourteen configured quarterly tables move through validated Raw processing", [["SQL Source", "Systems", "14 tables"], ["Azure Data", "Factory", "metadata", "orchestration"], ["ADLS Gen2", "Landing", "Parquet"], ["Azure", "Databricks", "PySpark", "validation"], ["Raw Delta", "Tables", "quarter", "partitions"], ["Unity Catalog", "registration", "and refresh"], ["Data Science", "curation", "notebooks"]], ["Runtime and source validation", "Master and Raw-stage logging", "Structured result validation", "Watermark and rerun control"])],
  ["public/projects/quarterly-policy-data-delivery-platform/execution-sequence.svg", readableSequenceDiagram()],
  ["public/projects/quarterly-policy-data-delivery-platform/result-watermark-flow.svg", resultFlow()],
  ["public/projects/metadata-driven-adf-ingestion/architecture.svg", metadataArchitecture()],
  ["public/projects/retail-databricks-validation-pipeline/architecture.svg", branchingArchitecture("Retail Data Validation with ADF and Databricks", "ADF stages source files; Databricks validation separates approved and rejected records", [["Amazon S3", "CSV and JSON"], ["Azure Data Factory", "Source ingestion"], ["ADLS Gen2 Landing", "Staged files"], ["Databricks PySpark", "duplicate check", "status check"]], [{ label: "Approved", tone: "approved", nodes: [["Valid Records", "approved only"], ["Azure SQL", "sales reporting"]] }, { label: "Rejected", tone: "exception", nodes: [["Rejected Records", "reason retained"], ["ADLS Gen2", "rejected-data zone"]] }], ["Key Vault credential separation", "Reference-data validation", "Processing metadata", "Rerun limitations documented"])],
  ["public/projects/movie-analytics-adf-pipeline/architecture.svg", branchingArchitecture("Movie Analytics Mapping Data Flow", "Ranking precedes aggregation and validation before release-year output routing", [["Blob Storage", "Movie CSV"], ["Derived Column", "genre derivation"], ["Window", "row ranking"], ["Aggregate", "grouped measures"], ["Assert", "quality rules"], ["Conditional Split", "year routing"]], [{ label: "Configured group", tone: "approved", nodes: [["SQL Route", "approved output"], ["Azure SQL", "analytical output"]] }, { label: "Alternate group", tone: "approved", nodes: [["ADLS Route", "approved output"], ["ADLS Gen2", "file output"]] }], ["Assert failure behaviour", "Explicit output grain", "Sink failure propagation", "Archive after success"])],
];

for (const [relativePath, content] of assets) {
  const output = join(root, relativePath);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, content, "utf8");
}

console.log(`Generated ${assets.length} architecture assets.`);
