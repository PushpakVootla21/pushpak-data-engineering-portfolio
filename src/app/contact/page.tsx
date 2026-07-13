import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { getGmailComposeUrl, isValidExternalUrl } from "@/lib/links";
import { profile, siteConfig } from "@/lib/site";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("Contact Pushpak Vootla | Azure Data Engineer"),
  description: "Contact Pushpak Vootla regarding Azure Data Engineering opportunities, professional networking and technical discussions involving ADF, Databricks, Microsoft Fabric, PySpark and Delta Lake.",
  openGraph: {
    title: "Contact Pushpak Vootla — Azure Data Engineer",
    description: "Connect regarding Azure Data Engineering roles and professional discussions across Microsoft Fabric, ADF, Databricks and lakehouse platforms.",
    type: "website",
  },
  alternates: canonicalFor("/contact"),
};

const interests = ["Azure Data Engineering", "Microsoft Fabric", "Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "Metadata-Driven Pipelines", "Data Quality", "Lakehouse Architecture", "Pipeline Reliability"];

const discussionAreas = [
  { title: "Azure Data Engineering Roles", description: "Opportunities involving ingestion, transformation, lakehouse workflows and production-oriented data pipeline development." },
  { title: "Project and Technical Experience", description: "Discussion of the Azure Data Factory, Databricks, Fabric, PySpark and Delta Lake implementations documented in the portfolio." },
  { title: "Platform and Engineering Topics", description: "Metadata-driven orchestration, incremental loading, data validation, framework logging, watermark control and rerun behaviour." },
  { title: "Professional Networking", description: "Connecting with data engineers, technical leads, recruiters and hiring managers working across Azure data platforms." },
];

export default function ContactPage() {
  const gmailComposeUrl = getGmailComposeUrl(profile.email, "Azure Data Engineering Opportunity");
  const linkedinUrl = isValidExternalUrl(profile.linkedinUrl) ? profile.linkedinUrl : null;
  const portfolioUrl = isValidExternalUrl(profile.portfolioUrl) ? profile.portfolioUrl : siteConfig.siteUrl;

  return (
    <>
      <header className="profile-page-hero contact-hero">
        <div className="profile-page-inner">
          <p className="eyebrow">Contact</p>
          <h1>Let’s Connect</h1>
          <p className="profile-page-lead">I am open to Azure Data Engineering opportunities and professional discussions involving Azure Data Factory, Microsoft Fabric, Azure Databricks, PySpark, Delta Lake and reliable data-platform development.</p>
          <p className="profile-page-supporting">Recruiters, hiring managers and data engineering professionals can reach me through professional email{linkedinUrl ? " or LinkedIn" : ""}.</p>
          <p className="professional-availability">Open to relevant Azure Data Engineering opportunities and professional networking discussions.</p>
        </div>
      </header>

      <SectionContainer eyebrow="Get in Touch" title="Professional Contact">
        <div className="contact-action-grid">
          <article><h3>Email</h3><p>For Azure Data Engineering roles, interview discussions and relevant professional opportunities.</p><ExternalLink className="button-link primary" href={gmailComposeUrl}>Email Pushpak Vootla using Gmail</ExternalLink></article>
          {linkedinUrl && <article><h3>LinkedIn</h3><p>Connect for professional networking, hiring discussions and data engineering content.</p><ExternalLink className="button-link secondary" href={linkedinUrl}>Connect with Pushpak Vootla on LinkedIn</ExternalLink></article>}
          <article><h3>Resume</h3><p>Review my professional experience, technical skills, certifications and selected Azure Data Engineering projects, with a PDF download available on the resume page.</p><Button href="/resume" variant="secondary">View Resume</Button></article>
        </div>
        <dl className="professional-contact-list">
          <div><dt>Email</dt><dd><ExternalLink href={gmailComposeUrl}>{profile.email}</ExternalLink></dd></div>
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          {linkedinUrl && <div><dt>LinkedIn</dt><dd><ExternalLink href={linkedinUrl}>View Pushpak Vootla’s LinkedIn profile</ExternalLink></dd></div>}
          {portfolioUrl && <div><dt>Portfolio</dt><dd><ExternalLink href={portfolioUrl}>Visit Pushpak Vootla’s portfolio</ExternalLink></dd></div>}
        </dl>
      </SectionContainer>

      <SectionContainer className="section-muted" eyebrow="Opportunity Focus" title="Roles and Areas of Interest" description="I am particularly interested in Azure Data Engineering roles involving pipeline orchestration, lakehouse processing, validation, monitoring and reliable data delivery.">
        <div className="interest-tags" aria-label="Professional areas of interest">{interests.map((interest) => <Tag key={interest}>{interest}</Tag>)}</div>
      </SectionContainer>

      <SectionContainer eyebrow="Discussion" title="Professional Discussion Areas">
        <div className="card-grid two-columns">{discussionAreas.map((area) => <article className="content-card" key={area.title}><h3>{area.title}</h3><p>{area.description}</p></article>)}</div>
      </SectionContainer>

      <section className="contact-recruiter-cta">
        <div className="contact-recruiter-inner">
          <div><p className="eyebrow">Professional Opportunities</p><h2>Open to Azure Data Engineering Opportunities</h2><p>I am interested in roles involving Azure Data Factory, Microsoft Fabric, Azure Databricks, PySpark, Delta Lake and dependable data-platform engineering.</p></div>
          <div className="hero-actions"><ExternalLink className="button-link primary" href={gmailComposeUrl}>Email Me using Gmail</ExternalLink><Link className="button-link secondary" href="/experience">View Experience</Link><Link className="button-link secondary" href="/projects">View Projects</Link><Link className="button-link secondary" href="/resume">View Resume</Link></div>
        </div>
      </section>
    </>
  );
}
