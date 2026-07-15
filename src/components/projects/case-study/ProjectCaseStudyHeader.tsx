import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TechnologyTag } from "@/components/ui/TechnologyMark";
import type { Project } from "@/types/content";

export function ProjectBreadcrumb({ project }: { project: Project }) {
  return (
    <nav className="project-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li aria-current="page">{project.title}</li>
      </ol>
    </nav>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  const architectureAsset = project.media?.find((asset) => asset.type === "architecture" && asset.featured) ?? project.media?.find((asset) => asset.type === "architecture");
  return (
    <header className="case-study-hero">
      <div className="case-study-hero-inner">
        <ProjectBreadcrumb project={project} />
        <div className="case-study-hero-grid case-study-hero-grid-single">
          <div className="case-study-hero-copy">
            <p className="eyebrow">{project.caseStudy?.heroPlatformLabel ?? project.platform} · {project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-study-summary">{project.caseStudy?.heroSummary ?? project.summary}</p>
            {project.caseStudy?.supportingStatement && <p className="case-study-supporting">{project.caseStudy.supportingStatement}</p>}
            <div className="tag-list" aria-label={`${project.title} technologies`}>
              {(project.caseStudy?.heroTechnologies ?? project.technologies).slice(0, 4).map((technology) => <TechnologyTag key={technology} technology={technology} />)}
            </div>
            <div className="case-study-actions">
              {architectureAsset && <Button href="#architecture-diagram" variant="ghost">View Architecture</Button>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ProjectOverview({ project }: { project: Project }) {
  const details = project.caseStudy;
  if (!details) return null;

  const overview = details.overviewItems ?? [
    { label: "Project type", value: details.projectType },
    { label: "Primary platform", value: project.platform },
    { label: "Data sources", value: details.dataSources.join(", ") },
    { label: "Processing approach", value: details.processingApproach },
    { label: "Target or storage", value: details.targets.join(", ") },
    { label: "Engineering focus", value: details.engineeringFocus.join(", ") },
  ].filter((item) => item.value.length > 0);

  return (
    <section id="overview" className="case-study-overview">
      <div className="case-study-section-inner">
        <h2>Project Overview</h2>
        <dl>
          {overview.map((item) => (
            <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
          ))}
        </dl>
        {!details.documentationComplete && (
          <p className="documentation-notice">
            Additional technical documentation and screenshots will be added as the case study is expanded.
          </p>
        )}
      </div>
    </section>
  );
}
