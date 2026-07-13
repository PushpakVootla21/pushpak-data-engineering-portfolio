import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { projects } from "@/data/projects";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("Azure Data Engineering Projects | Pushpak Vootla"),
  description:
    "Explore Azure data engineering projects using Microsoft Fabric, Azure Data Factory, Azure Databricks, PySpark, Delta Lake, data validation and metadata-driven ingestion patterns.",
  openGraph: {
    title: "Azure Data Engineering Projects — Pushpak Vootla",
    description:
      "Hands-on Microsoft Fabric, Azure Data Factory and Azure Databricks projects covering ingestion, validation, transformation and pipeline reliability.",
    type: "website",
  },
  alternates: canonicalFor("/projects"),
};

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-intro">
        <div className="projects-intro-inner">
          <p className="eyebrow">Selected Work</p>
          <h1>Azure Data Engineering Projects</h1>
          <p className="projects-lead">
            Compare five hands-on case studies across Microsoft Fabric, Azure
            Data Factory and Azure Databricks, covering ingestion,
            transformation, lakehouse storage, validation and pipeline
            reliability.
          </p>
        </div>
      </section>

      <SectionContainer id="project-list" eyebrow="Project Library" title="Filter by Azure Platform">
        <ProjectFilter projects={projects} />
      </SectionContainer>

      <SectionContainer className="contact-section">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Interested in My Azure Data Engineering Experience?</h2>
            <p>
              Review my experience and resume, or contact me regarding relevant
              Azure Data Engineering opportunities.
            </p>
          </div>
          <div className="contact-actions">
            <Button href="/experience">View Experience</Button>
            <Button href="/contact" variant="secondary">Contact Me</Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
