import { Button } from "@/components/ui/Button";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TechnologyTag } from "@/components/ui/TechnologyMark";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { engineeringWorkflow } from "@/data/content";
import { coreStack } from "@/data/skills";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/lib/site";

export function TechnologyStackSection() {
  return (
    <SectionContainer id="skills" eyebrow="Technical Focus" title="Core Data Engineering Stack" description="Platforms and engineering patterns used across ingestion, transformation, validation, lakehouse processing and pipeline reliability.">
      <div className="core-stack" aria-label="Core data engineering technologies">{coreStack.map((item) => <TechnologyTag key={item} technology={item} prominent />)}</div>
    </SectionContainer>
  );
}

export function FeaturedProjectsSection() {
  return (
    <SectionContainer id="projects" className="section-muted" eyebrow="Selected Work" title="Azure Data Engineering Case Studies" description="Hands-on projects demonstrating ingestion design, validation, incremental processing, lakehouse workflows and production-oriented controls.">
      <HorizontalCarousel className="featured-projects-carousel" trackClassName="featured-projects-track" itemCount={featuredProjects.length} label="Featured Azure Data Engineering case studies" previousLabel="Previous case study" nextLabel="Next case study">
        {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} projectNumber={index + 1} compact />)}
      </HorizontalCarousel>
      <div className="section-action"><Button href="/projects" variant="secondary">Explore Projects</Button></div>
    </SectionContainer>
  );
}

export function EngineeringApproachSection() {
  return (
    <SectionContainer id="approach" className="section-dark" eyebrow="Engineering Approach" title="Building Beyond a Successful Pipeline Run" description="A pipeline is not complete only because data moved successfully. Validation, security, monitoring and recovery behaviour also need to be considered.">
      <ol className="approach-grid">
        {engineeringWorkflow.map((stage, index) => (
          <li key={stage.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{stage.title}</h3><p>{stage.description}</p></div></li>
        ))}
      </ol>
    </SectionContainer>
  );
}

export function ProfessionalProfileSection() {
  return (
    <SectionContainer id="experience-snapshot" eyebrow="Experience Snapshot" title="Current Azure Data Engineering Focus">
      <div className="profile-layout">
        <div className="profile-copy"><p>Currently working as an Associate Data Engineer at Ensono Technologies LLP, developing metadata-driven ingestion, Databricks lakehouse processing, validation and incremental-loading controls while supporting pipeline issue resolution.</p><div className="section-action"><Button href="/experience" variant="secondary">View Experience</Button></div></div>
        <aside className="profile-facts" aria-label="Professional profile summary">
          <div><span>Target role</span><strong>{profile.professionalTitle}</strong></div>
          <div><span>Location</span><strong>{profile.location}</strong></div>
          <div><span>Experience</span><strong>3+ years of professional experience</strong></div>
        </aside>
      </div>
    </SectionContainer>
  );
}

export function CertificationSnapshotSection() {
  return (
    <SectionContainer className="section-muted certification-snapshot-section" eyebrow="Credentials" title="Certified Across Azure, AWS and Delivery Tools" description={`${profile.certifications.length} completed certifications and badges support my cloud, data and delivery foundation.`}>
      <HorizontalCarousel className="certification-carousel" trackClassName="certification-carousel-track" itemCount={profile.certifications.length} label="Professional certifications" previousLabel="Previous certification" nextLabel="Next certification">
        {profile.certifications.map((certification) => <CertificationCard key={certification.id} certification={certification} />)}
      </HorizontalCarousel>
      <div className="section-action"><Button href="/about#certifications" variant="secondary">View Certifications</Button></div>
    </SectionContainer>
  );
}

export function ContactCtaSection() {
  return (
    <SectionContainer id="contact" className="contact-section">
      <div className="contact-panel">
        <div><p className="eyebrow">Contact</p><h2>Open to Azure Data Engineering Opportunities</h2><p>Explore my experience and project case studies, or contact me regarding relevant Azure Data Engineering roles.</p></div>
        <div className="contact-actions"><Button href="/contact">Contact Me</Button><Button href="/resume" variant="secondary">View Resume</Button></div>
      </div>
    </SectionContainer>
  );
}
