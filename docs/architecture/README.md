# Architecture Diagrams

The SVG diagrams under `public/projects/` are generated public portfolio assets. They use general technical labels only and must not contain environment names, private object names, credentials, employer-specific names, or internal identifiers.

## Project Mapping

- `validation-first-fabric-lakehouse-ingestion/architecture.svg` - Microsoft Fabric validation-first ingestion
- `quarterly-policy-data-delivery-platform/architecture.svg` - quarterly source-to-Raw architecture
- `quarterly-policy-data-delivery-platform/execution-sequence.svg` - ordered quarterly execution
- `quarterly-policy-data-delivery-platform/result-watermark-flow.svg` - result validation and watermark controls
- `metadata-driven-adf-ingestion/architecture.svg` - metadata-driven ADF ingestion
- `retail-databricks-validation-pipeline/architecture.svg` - retail validation with ADF and Databricks
- `movie-analytics-adf-pipeline/architecture.svg` - movie Mapping Data Flow

Public URLs follow `/projects/<project-slug>/<filename>.svg`.

## Updating

1. Edit `scripts/generate-architecture-assets.mjs` using approved terminology from central project data.
2. Run `node scripts/generate-architecture-assets.mjs`.
3. Review every SVG for accurate labels, readable connectors, and private information.
4. Update titles, captions, and alt text only in `src/data/projects.ts`.
5. Run the site checks and open every direct SVG URL.

The generator uses a 1600 x 900 viewBox, system fonts, high-contrast text, numbered nodes, textual success/failure labels, and consistent arrows. SVGs contain no scripts, remote resources, external fonts, base64 images, animation, or proprietary service logos.
