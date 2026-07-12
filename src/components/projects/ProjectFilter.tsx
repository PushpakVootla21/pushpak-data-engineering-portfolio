"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project, ProjectPlatform } from "@/types/content";

type ProjectFilterValue = "All Projects" | ProjectPlatform;

const filterOptions: ProjectFilterValue[] = [
  "All Projects",
  "Microsoft Fabric",
  "Azure Data Factory",
  "Azure Databricks",
];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>("All Projects");
  const visibleProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => (project.platforms ?? [project.platform]).includes(activeFilter));

  return (
    <div>
      <div className="project-filter" role="group" aria-label="Filter projects by platform">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            className="filter-button"
            aria-pressed={activeFilter === option}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="filter-result" aria-live="polite">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid projects-page-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            projectNumber={projects.findIndex((item) => item.id === project.id) + 1}
          />
        ))}
      </div>
    </div>
  );
}
