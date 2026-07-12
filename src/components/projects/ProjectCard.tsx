import type { Project } from "@/types/content";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Tag } from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  projectNumber: number;
  compact?: boolean;
}

export function ProjectCard({ project, projectNumber, compact = false }: ProjectCardProps) {
  return (
    <article id={project.slug} className="project-card">
      <div className="project-card-heading">
        <span className="project-number" aria-hidden="true">
          {String(projectNumber).padStart(2, "0")}
        </span>
        <div>
          <p className="card-kicker">{(project.platforms ?? [project.platform]).join(" + ")}</p>
          <p className="project-category">{project.category}</p>
        </div>
      </div>
      <div>
        <h3>{project.title}</h3>
        <p className="card-description">{project.summary}</p>
      </div>
      {!compact && <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>}
      <ul className="check-list" aria-label="Selected engineering highlights">
        {project.highlights.slice(0, compact ? 2 : 4).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      {!compact && <p className="project-result">
        <strong>Practical outcome:</strong> {project.outcome}
      </p>}
      <div className="project-actions">
        {project.githubUrl && (
          <ExternalLink className="text-link" href={project.githubUrl}>
            Review {project.title} on GitHub
          </ExternalLink>
        )}
        {project.caseStudyAvailable ? (
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View Case Study: {project.title}
          </Link>
        ) : (
          <span className="case-study-status">Detailed case study coming next</span>
        )}
      </div>
    </article>
  );
}
