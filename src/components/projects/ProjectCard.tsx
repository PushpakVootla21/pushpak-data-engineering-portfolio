import type { Project } from "@/types/content";
import Link from "next/link";
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
      <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.slice(0, compact ? 3 : 4).map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
      <div className="project-actions">
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
