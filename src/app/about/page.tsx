import Image from "next/image";
import type { Metadata } from "next";
import { Braces, Database, GitBranch, LockKeyhole, ShieldCheck, Workflow } from "lucide-react";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { TechnologyTag } from "@/components/ui/TechnologyMark";
import { profile } from "@/lib/site";
import { skillGroups } from "@/data/skills";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("About Pushpak Vootla | Azure Data Engineer"),
  description: "Learn about Pushpak Vootla’s Azure Data Engineering development experience and hands-on work with ADF, Databricks, PySpark, Delta Lake and Microsoft Fabric.",
  alternates: canonicalFor("/about"),
};

const principles = [
  { title: "Understand the Data Contract", description: "Clarify the source structure, refresh pattern, expected output and downstream dependency before implementation." },
  { title: "Validate Before Promotion", description: "Apply schema, file, record and business-rule checks before data reaches a trusted layer." },
  { title: "Design for Supportability", description: "Capture execution status, failure context, row counts and stage-level information needed to investigate pipeline issues." },
  { title: "Protect Reruns and Watermarks", description: "Ensure repeated processing and incremental state changes follow controlled success conditions." },
  { title: "Keep the Design Explainable", description: "Use clear configuration, consistent naming and documentation so the pipeline can be understood and maintained." },
];

const skillGroupIcons = {
  orchestration: Workflow,
  processing: Braces,
  "lakehouse-storage": Database,
  "quality-reliability": ShieldCheck,
  "governance-security": LockKeyhole,
  "development-delivery": GitBranch,
};

export default function AboutPage() {
  return (
    <>
      <header className="profile-page-hero">
        <div className={`profile-page-inner about-hero-layout${profile.profileImage ? " has-image" : ""}`}>
          <div>
            <p className="eyebrow">Professional Profile</p>
            <h1>About Me</h1>
            <h2>Azure Data Engineering with a Development and Reliability Focus</h2>
            <div className="about-narrative">
              <p>I am an Azure Data Engineer based in {profile.shortLocation} with more than three years of professional experience. My current direction centres on building dependable ingestion and lakehouse workflows across Azure data platforms.</p>
              <p>My work is development-focused: I build metadata-driven ingestion, Databricks processing, Delta Lake pipelines and validation controls. I also support pipeline issue investigation and resolution so data delivery remains dependable.</p>
              <p>Alongside professional implementation work, I develop portfolio case studies to explore Microsoft Fabric, Mapping Data Flows, validation-first ingestion and maintainable data-quality controls.</p>
            </div>
          </div>
          {profile.profileImage && <Image className="profile-photo" src={profile.profileImage} alt="Pushpak Vootla, Azure Data Engineer" width={900} height={900} sizes="(max-width: 680px) 220px, 300px" />}
        </div>
      </header>
      <SectionContainer eyebrow="Working Principles" title="How I Approach Data Engineering">
        <ol className="principles-grid">{principles.map((principle, index) => <li key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.description}</p></li>)}</ol>
      </SectionContainer>
      <SectionContainer className="section-muted" eyebrow="Capabilities" title="Current Technical Focus" description="Technologies and practices I currently use or continue to develop through implementation and portfolio work.">
        <div className="technology-grid about-skill-grid">{skillGroups.map((group) => {
          const GroupIcon = skillGroupIcons[group.id as keyof typeof skillGroupIcons];
          return <article className="technology-group" key={group.id}><h3 className="skill-group-heading"><span className="skill-group-icon" aria-hidden="true"><GroupIcon size={17} strokeWidth={1.8} /></span><span>{group.title}</span></h3><p className="skill-group-description">{group.description}</p><div className="tag-list">{group.skills.map((skill) => skill.featured ? <TechnologyTag key={skill.id} technology={skill.name} /> : <Tag key={skill.id}>{skill.name}</Tag>)}</div></article>;
        })}</div>
      </SectionContainer>
      <SectionContainer id="certifications" eyebrow="Credentials" title="Certifications" description="Professional certifications and learning credentials across Azure, AWS and supporting delivery tools.">
        <div className="certification-grid about-certifications">{profile.certifications.map((certification) => <CertificationCard key={certification.id} certification={certification} />)}</div>
      </SectionContainer>
      <SectionContainer eyebrow="Next Steps" title="Career Direction">
        <div className="career-direction"><p>I am focused on Azure Data Engineering roles where I can contribute to reliable ingestion, transformation, lakehouse processing and operationally clear data platforms.</p><p>I am particularly interested in opportunities involving Azure Data Factory, Microsoft Fabric, Azure Databricks, PySpark, Delta Lake and metadata-driven data engineering.</p></div>
        <div className="hero-actions"><Button href="/experience">View Experience</Button><Button href="/resume" variant="secondary">View Resume</Button></div>
      </SectionContainer>
    </>
  );
}
