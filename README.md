# Pushpak Vootla - Azure Data Engineering Portfolio

Recruiter-facing Next.js portfolio presenting professional experience and five Azure Data Engineering case studies across Azure Data Factory, Azure Databricks, Microsoft Fabric, PySpark, Delta Lake, ADLS Gen2 and Unity Catalog.

## Technology Stack

- Next.js 16, React 19 and TypeScript
- Tailwind CSS and repository-level responsive styles
- Typed central profile, skill and project content
- Static SVG architecture diagrams and a generated A4 resume PDF

## Local Development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` only when testing production metadata. Copy the public, non-secret example from `.env.example`; never place credentials in a `NEXT_PUBLIC_` variable.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

There is currently no automated test suite. Content invariants run during the application build through `validatePortfolioContent()`.

## Production Build

```bash
NEXT_PUBLIC_SITE_URL=https://pushpakvootla.cloud npm run build
npm start
```

The preferred production branch and remote must be confirmed before the first push. Vercel should use standard Next.js framework detection, the committed `package-lock.json`, `npm install`, and `npm run build`.

## Deployment

See [docs/deployment.md](docs/deployment.md) and [docs/production-checklist.md](docs/production-checklist.md). Deployment, DNS, HTTPS and custom-domain status must remain pending until verified in the authorised Vercel project.

## Public Assets

- Resume: `/resume/pushpak-vootla-resume.pdf`
- Project diagrams: `/projects/<project-slug>/<asset-name>.svg`
- Optional profile image: `/images/profile/pushpak-vootla.webp` (pending owner upload)

Asset-generation and maintenance notes are in `docs/resume/`, `docs/architecture/` and `docs/profile-photo.md`.
