import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { getGmailComposeUrl, isValidExternalUrl } from "@/lib/links";
import { profile } from "@/lib/site";
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

export default function ContactPage() {
  const gmailComposeUrl = getGmailComposeUrl(profile.email, "Azure Data Engineering Opportunity");
  const linkedinUrl = isValidExternalUrl(profile.linkedinUrl) ? profile.linkedinUrl : null;

  return (
    <>
      <header className="profile-page-hero contact-hero">
        <div className="profile-page-inner">
          <p className="eyebrow">Contact</p>
          <h1>Let’s Connect</h1>
          <p className="profile-page-lead">I am open to Azure Data Engineering opportunities and professional discussions involving Azure Data Factory, Microsoft Fabric, Azure Databricks, PySpark, Delta Lake and reliable data-platform development.</p>
          <p className="profile-page-supporting">Recruiters, hiring managers and data engineering professionals can reach me through professional email{linkedinUrl ? " or LinkedIn" : ""}.</p>
        </div>
      </header>

      <SectionContainer eyebrow="Get in Touch" title="Professional Contact" description={`Based in ${profile.shortLocation}. Choose the contact method that best fits your enquiry.`}>
        <div className="contact-action-grid">
          <article><h3>Email</h3><p>For Azure Data Engineering roles, interview discussions and relevant professional opportunities.</p><ExternalLink className="button-link primary" href={gmailComposeUrl}>Email Pushpak Vootla using Gmail</ExternalLink></article>
          {linkedinUrl && <article><h3>LinkedIn</h3><p>Connect for professional networking, hiring discussions and data engineering content.</p><ExternalLink className="button-link secondary" href={linkedinUrl}>Connect with Pushpak Vootla on LinkedIn</ExternalLink></article>}
          <article><h3>Resume</h3><p>Review my professional experience, technical skills, certifications and selected Azure Data Engineering projects, with a PDF download available on the resume page.</p><Button href="/resume" variant="secondary">View Resume</Button></article>
        </div>
      </SectionContainer>

      <SectionContainer className="section-muted" eyebrow="Opportunity Focus" title="Roles and Areas of Interest" description="I am particularly interested in Azure Data Engineering roles involving pipeline orchestration, lakehouse processing, validation, monitoring and reliable data delivery.">
        <div className="interest-tags" aria-label="Professional areas of interest">{interests.map((interest) => <Tag key={interest}>{interest}</Tag>)}</div>
      </SectionContainer>

    </>
  );
}
