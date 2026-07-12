import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { profile } from "@/lib/site";
import { skillGroups } from "@/data/skills";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";
import { publicAssetExists } from "@/lib/assets";

export const metadata: Metadata = {
  title: absoluteTitle("Resume | Pushpak Vootla"),
  description: "Review Pushpak Vootla’s Azure Data Engineering experience, projects, technical skills, certifications and education.",
  alternates: canonicalFor("/resume"),
};

export default function ResumePage() {
  const resumeFile = publicAssetExists(profile.resumeFile) ? profile.resumeFile : null;
  return (
    <>
      <header className="profile-page-hero resume-hero">
        <div className="profile-page-inner">
          <p className="eyebrow">Professional Resume</p>
          <h1>Resume</h1>
          <p className="profile-page-lead">Review my Azure Data Engineering experience, technical capabilities, projects, certifications and education.</p>
          <div className="resume-actions">
          {resumeFile ? (
            <>
              <a className="button-link primary" href={resumeFile} target="_blank" rel="noopener noreferrer" aria-label="View Pushpak Vootla resume PDF in a new tab">View Resume <span>PDF</span></a>
              <a className="button-link secondary resume-download" href={resumeFile} download="Pushpak-Vootla-Azure-Data-Engineer-Resume.pdf" aria-label="Download Pushpak Vootla Azure Data Engineer resume as a PDF">Download Resume <span>PDF</span></a>
            </>
          ) : null}
          <Link className="button-link secondary" href="/resume/print">Print-Friendly Resume</Link>
          </div>
          {!resumeFile && <p className="resume-availability">The downloadable PDF is being prepared.</p>}
        </div>
      </header>
      <SectionContainer eyebrow="Profile" title="Professional Summary">
        <div className="resume-summary"><p>Azure Data Engineer with 3+ years of professional experience and hands-on experience across Azure Data Factory, Azure Databricks, PySpark, Delta Lake, ADLS Gen2, Unity Catalog and Microsoft Fabric.</p><p>Focused on metadata-driven ingestion, data validation, structured pipeline integration, framework logging, watermark controls, rerun behaviour and analytics-ready data delivery.</p></div>
      </SectionContainer>
      <SectionContainer className="section-muted" eyebrow="Capabilities" title="Core Technical Skills">
        <div className="technology-grid resume-skill-grid">{skillGroups.map((group) => <article className="technology-group" key={group.id}><h3>{group.title}</h3><p className="skill-group-description">{group.description}</p><div className="tag-list">{group.skills.map((skill) => <Tag key={skill.id}>{skill.name}</Tag>)}</div></article>)}</div>
      </SectionContainer>
      <SectionContainer eyebrow="Timeline" title="Professional Experience">
        <ExperienceTimeline entries={profile.experience} compact />
      </SectionContainer>
      <SectionContainer className="section-muted" eyebrow="Selected Work" title="Selected Projects">
        <div className="resume-project-list">{projects.map((project) => <article key={project.id}><p>{(project.platforms ?? [project.platform]).join(" + ")}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 3).map((technology) => <Tag key={technology}>{technology}</Tag>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>View {project.title} case study</Link></article>)}</div>
      </SectionContainer>
      <SectionContainer eyebrow="Credentials" title="Certifications">
        <div className="certification-grid">{profile.certifications.map((certification, index) => <article className={index === profile.certifications.length - 1 ? "secondary-credential" : undefined} key={certification.id}><p>{certification.issuer}</p><h3>{certification.name}</h3><span>{certification.status}</span>{certification.credentialUrl && <ExternalLink className="text-link" href={certification.credentialUrl}>Verify {certification.name}</ExternalLink>}</article>)}</div>
      </SectionContainer>
      <SectionContainer className="section-muted" eyebrow="Education" title="Education">
        <div className="education-list">{profile.education.map((education) => <article key={education.institution}><p>{education.dateLabel}</p><h3>{education.qualification} — {education.field}</h3><p>{education.institution}</p>{education.note && <p>{education.note}</p>}</article>)}</div>
      </SectionContainer>
      <SectionContainer eyebrow="Contact" title="Contact and Professional Links">
        <address className="resume-contact"><div><span>Professional email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div><span>Location</span><p>{profile.location}</p></div>{profile.linkedinUrl && <div><span>LinkedIn</span><ExternalLink href={profile.linkedinUrl}>View Pushpak Vootla on LinkedIn</ExternalLink></div>}{profile.githubUrl && <div><span>GitHub</span><ExternalLink href={profile.githubUrl}>View Pushpak Vootla on GitHub</ExternalLink></div>}</address>
        <div className="section-action"><Button href="/contact">Contact Me</Button></div>
      </SectionContainer>
    </>
  );
}
