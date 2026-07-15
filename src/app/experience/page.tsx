import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { profile } from "@/lib/site";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("Professional Experience | Pushpak Vootla"),
  description: "Professional experience across Azure Data Engineering development, pipeline orchestration, Databricks processing, data validation and pipeline support.",
  alternates: canonicalFor("/experience"),
};

const connectionCards = [
  { title: "Pipeline Development", description: "Current work centres on Azure Data Factory, Databricks, PySpark, Delta Lake, validation and reliable data delivery." },
  { title: "Reliability and Support", description: "Pipeline observability, issue investigation and controlled recovery inform how I develop and support data workflows." },
  { title: "Continuous Platform Development", description: "Hands-on portfolio projects extend my experience across Microsoft Fabric, lakehouse ingestion, Mapping Data Flows and metadata-driven architecture." },
];

export default function ExperiencePage() {
  const currentRole = profile.experience.filter((entry) => entry.current);
  const earlyCareer = profile.experience.filter((entry) => !entry.current);

  return (
    <>
      <header className="profile-page-hero">
        <div className="profile-page-inner">
          <p className="eyebrow">Experience</p>
          <h1>Professional Experience</h1>
          <p className="profile-page-lead">Professional experience across Azure data pipeline development, cloud platform learning and enterprise data delivery.</p>
          <p className="profile-page-supporting">My current focus is Azure Data Engineering, with practical work across pipeline orchestration, Databricks processing, data validation, framework logging, watermark controls and downstream data readiness.</p>
        </div>
      </header>
      <SectionContainer eyebrow="Current Role" title="Azure Data Engineering Development and Pipeline Reliability">
        <ExperienceTimeline entries={currentRole} />
      </SectionContainer>
      <SectionContainer className="section-muted" eyebrow="Foundation" title="Early-Career Training and Project Experience" description="These overlapping entries represent a Wipro project-trainee period and its assigned StackRoute training programme.">
        <ExperienceTimeline entries={earlyCareer} compact />
      </SectionContainer>
      <SectionContainer eyebrow="Experience in Practice" title="How My Experience Connects">
        <div className="card-grid three-columns">
          {connectionCards.map((card) => <article className="content-card" key={card.title}><h3>{card.title}</h3><p>{card.description}</p></article>)}
        </div>
        <div className="section-action"><Button href="/projects">Explore Data Engineering Projects</Button></div>
      </SectionContainer>
    </>
  );
}
