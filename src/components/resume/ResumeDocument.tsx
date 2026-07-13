import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { profile, siteConfig } from "@/lib/site";

const projectPriority = [
  "quarterly-policy-data-delivery-platform",
  "validation-first-fabric-lakehouse-ingestion",
  "metadata-driven-adf-ingestion",
  "retail-databricks-validation-pipeline",
  "movie-analytics-adf-pipeline",
];
const selectedProjects = projectPriority.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
const resumeSkills = skillGroups.slice(0, 5);

export function ResumeDocument() {
  const portfolioUrl = siteConfig.siteUrl ?? "https://pushpakvootla.cloud";

  return (
    <article className="resume-document" aria-label={`${profile.name} professional resume`}>
      <header className="resume-document-header">
        <div><h1>{profile.name}</h1><p>{profile.professionalTitle}</p></div>
        <address>
          <span>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={portfolioUrl}>{portfolioUrl.replace(/^https?:\/\//, "")}</a>
        </address>
      </header>

      <section><h2>Professional Summary</h2><p>Azure Data Engineer with 3+ years of professional experience and hands-on implementation experience across Azure Data Factory, Azure Databricks, PySpark, Delta Lake, ADLS Gen2, Unity Catalog and Microsoft Fabric.</p><p>Focused on metadata-driven orchestration, Landing-to-Raw processing, validation, framework logging, watermark controls, rerun behaviour and reliable data delivery for downstream analytics and Data Science workloads.</p></section>

      <section><h2>Core Technical Skills</h2><div className="resume-document-skills">{resumeSkills.map((group) => <p key={group.id}><strong>{group.title}:</strong> {group.skills.slice(0, group.id === "quality-reliability" ? 9 : 6).map((skill) => skill.name).join(", ")}</p>)}</div></section>

      <section><h2>Professional Experience</h2>{profile.experience.filter((entry) => entry.current).map((entry) => (
        <article className="resume-document-entry" key={`${entry.organisation}-${entry.role}`}>
          <div><h3>{entry.role} | {entry.organisation}</h3><p>{entry.dateLabel} | {entry.location}</p></div>
          <p>{entry.summary}</p>
          <ul>{entry.responsibilities.slice(0, 8).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
        </article>
      ))}</section>

      <section><h2>Selected Azure Data Engineering Projects</h2>{selectedProjects.map((project) => (
        <article className="resume-document-project" key={project.id}>
          <div><h3>{project.title}</h3><p>{(project.platforms ?? [project.platform]).join(" + ")}</p></div>
          <p>{project.summary}</p>
          <ul>{project.highlights.slice(0, 2).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <p className="resume-document-tech"><strong>Technology:</strong> {project.technologies.slice(0, 6).join(", ")}</p>
          <p className="resume-document-link"><strong>Case study:</strong> <a href={`${portfolioUrl}/projects/${project.slug}`}>{portfolioUrl.replace(/^https?:\/\//, "")}/projects/{project.slug}</a></p>
        </article>
      ))}</section>

      <section><h2>Early-Career Training and Project Experience</h2>{profile.experience.filter((entry) => !entry.current).map((entry) => (
        <article className="resume-document-entry" key={`${entry.organisation}-${entry.role}`}>
          <div><h3>{entry.role} | {entry.organisation}</h3><p>{entry.dateLabel} | {entry.location}</p></div>
          <p>{entry.summary}</p>
        </article>
      ))}</section>

      <div className="resume-document-two-column">
        <section><h2>Certifications</h2><ul>{profile.certifications.map((item) => <li key={item.id}>{item.name} | {item.issuer}</li>)}</ul></section>
        <section><h2>Education</h2>{profile.education.map((item) => <div key={item.institution}><h3>{item.qualification}, {item.field}</h3><p>{item.institution} | {item.dateLabel}</p></div>)}</section>
      </div>

      <section className="resume-document-links"><h2>Professional Links</h2><p><a href={portfolioUrl}>Portfolio: {portfolioUrl.replace(/^https?:\/\//, "")}</a>{profile.linkedinUrl && <> | <a href={profile.linkedinUrl}>LinkedIn</a></>}</p></section>
    </article>
  );
}
