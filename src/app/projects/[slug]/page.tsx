import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/projects/case-study/ProjectGallery";
import { ProjectHero, ProjectOverview } from "@/components/projects/case-study/ProjectCaseStudyHeader";
import { AdditionalCaseStudySections, ArchitectureWorkflow, DataFlowSteps, ImplementationGroups, ImplementationStatus, MetadataDesign, ProblemSection } from "@/components/projects/case-study/ProjectCaseStudyTechnical";
import { DesignDecisions, MonitoringControls, ProjectChallenges, ProjectOutcome, RecoveryConsiderations, SecurityControls, TechnologyGroups, ValidationRules } from "@/components/projects/case-study/ProjectCaseStudyReliability";
import { ProjectNavigation } from "@/components/projects/case-study/ProjectNavigation";
import { ProjectMediaAssets } from "@/components/projects/case-study/ProjectMediaAsset";
import { projects } from "@/data/projects";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const availableProjects = projects.filter((project) => project.caseStudyAvailable);

export function generateStaticParams() {
  return availableProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = availableProjects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: absoluteTitle(project.seo?.title ?? `${project.title} | Pushpak Vootla`),
    description: project.seo?.description ?? project.summary,
    openGraph: {
      title: project.seo?.openGraphTitle ?? `${project.title} — Azure Data Engineering Case Study`,
      description: project.seo?.openGraphDescription ?? project.summary,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: project.seo?.openGraphTitle ?? `${project.title} — Azure Data Engineering Case Study`,
      description: project.seo?.openGraphDescription ?? project.summary,
    },
    alternates: canonicalFor(`/projects/${project.slug}`),
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = availableProjects.findIndex((item) => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = availableProjects[projectIndex];
  const details = project.caseStudy;
  if (!details) notFound();
  const resultFlowAssets = project.media?.filter((asset) => asset.type === "flow") ?? [];
  const watermarkIndex = details.additionalSections?.findIndex((section) => section.id === "watermark-protection") ?? -1;
  const sectionsThroughWatermark = watermarkIndex >= 0 ? details.additionalSections?.slice(0, watermarkIndex + 1) : details.additionalSections;
  const sectionsAfterWatermark = watermarkIndex >= 0 ? details.additionalSections?.slice(watermarkIndex + 1) : [];

  const tableOfContents = [
    { id: "overview", label: "Overview", visible: true },
    { id: "implementation-status", label: "Status", visible: Boolean(details.implementationStatus?.length) },
    { id: "problem", label: "Problem", visible: true },
    { id: "architecture", label: "Architecture", visible: Boolean(details.architectureSummary && details.architectureLayers?.length) },
    { id: "data-flow", label: "Data Flow", visible: Boolean(details.dataFlow?.length) },
    { id: "implementation", label: "Implementation", visible: Boolean(details.implementationGroups?.length) },
    ...(details.additionalSections ?? []).map((section) => ({ id: section.id, label: section.title, visible: true })),
    { id: "metadata-design", label: "Metadata", visible: Boolean(details.metadataSummary && details.metadataResponsibilities?.length) },
    { id: "data-quality", label: "Data Quality", visible: Boolean(details.validationRules?.length) },
    { id: "security", label: details.securitySectionTitle === "Data Protection Considerations" ? "Data Protection" : "Security", visible: Boolean(details.securityControls?.length) },
    { id: "monitoring", label: "Monitoring", visible: Boolean(details.monitoringControls?.length) },
    { id: "recovery", label: "Recovery", visible: Boolean(details.recoveryConsiderations?.length) },
    { id: "decisions", label: "Decisions", visible: Boolean(details.designDecisions?.length) },
    { id: "challenges", label: "Challenges", visible: Boolean(details.challenges?.length) },
    { id: "outcome", label: "Outcome", visible: Boolean(details.outcomeSummary) },
    { id: "technology-stack", label: "Technology", visible: Boolean(details.technologyGroups?.length) },
    { id: "architecture-diagram", label: "Diagram", visible: Boolean(project.media?.some((asset) => asset.type === "architecture")) },
    { id: "project-media", label: "Screenshots", visible: Boolean(project.screenshots?.length) },
  ].filter((item) => item.visible);

  return (
    <article className="project-case-study">
      <ProjectHero project={project} />
      <nav className="case-study-toc" aria-label="Case study sections">
        <div>{tableOfContents.map((item) => <Link key={item.id} href={`#${item.id}`}>{item.label}</Link>)}</div>
      </nav>
      <ProjectOverview project={project} />
      <ImplementationStatus details={details} />
      <ProblemSection details={details} />
      <ArchitectureWorkflow details={details} />
      <ProjectMediaAssets project={project} type="architecture" sectionId="architecture-diagram" />
      <DataFlowSteps details={details} />
      <ProjectMediaAssets project={project} type="sequence" sectionId="execution-sequence-diagram" />
      <ImplementationGroups details={details} />
      <AdditionalCaseStudySections details={details} sections={sectionsThroughWatermark} />
      {resultFlowAssets.length > 0 && <ProjectMediaAssets project={project} type="flow" sectionId="result-flow-diagram" />}
      <AdditionalCaseStudySections details={details} sections={sectionsAfterWatermark} />
      <MetadataDesign details={details} />
      <ValidationRules details={details} />
      <SecurityControls details={details} />
      <MonitoringControls details={details} />
      <RecoveryConsiderations details={details} />
      <DesignDecisions details={details} />
      <ProjectChallenges details={details} />
      <ProjectOutcome details={details} />
      <TechnologyGroups details={details} />
      <ProjectGallery project={project} />
      <ProjectNavigation
        project={project}
        previousProject={availableProjects[projectIndex - 1]}
        nextProject={availableProjects[projectIndex + 1]}
      />
    </article>
  );
}
