import Link from "next/link";
import type { Project } from "@/types/content";

interface ProjectNavigationProps {
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  return (
    <section className="project-navigation-section">
      <div className="case-study-section-inner">
        <div className="project-navigation-actions">
          <Link className="button-link secondary" href="/projects">Back to All Projects</Link>
        </div>
        <nav className="adjacent-projects" aria-label="Adjacent project case studies">
          {previousProject && <Link className="previous-project" href={`/projects/${previousProject.slug}`}><span>Previous Project</span><strong>{previousProject.title}</strong></Link>}
          {nextProject && <Link className="next-project" href={`/projects/${nextProject.slug}`}><span>Next Project</span><strong>{nextProject.title}</strong></Link>}
        </nav>
      </div>
    </section>
  );
}
