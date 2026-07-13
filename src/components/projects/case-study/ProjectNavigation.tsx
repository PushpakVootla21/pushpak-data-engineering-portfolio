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
        <div className="project-navigation-heading">
          <p className="eyebrow">Continue Reviewing</p>
          <h2>Review the Implementation</h2>
          <p>Continue through the documented case studies, professional experience and resume.</p>
        </div>
        <div className="project-navigation-actions">
          <Link className="button-link secondary" href="/projects">Back to All Projects</Link>
          <Link className="button-link secondary" href="/experience">View Experience</Link>
          <Link className="button-link secondary" href="/resume">View Resume</Link>
          <Link className="button-link secondary" href="/contact">Contact Me</Link>
        </div>
        <nav className="adjacent-projects" aria-label="Adjacent project case studies">
          {previousProject && <Link className="previous-project" href={`/projects/${previousProject.slug}`}><span>Previous Project</span><strong>{previousProject.title}</strong></Link>}
          {nextProject && <Link className="next-project" href={`/projects/${nextProject.slug}`}><span>Next Project</span><strong>{nextProject.title}</strong></Link>}
        </nav>
      </div>
    </section>
  );
}
