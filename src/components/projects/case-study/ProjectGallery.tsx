import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import { ProjectMediaTrigger } from "@/components/projects/case-study/ProjectMediaLightbox";
import type { Project } from "@/types/content";

const placementTitles = {
  implementation: "Implementation Evidence",
  "data-quality": "Validation Evidence",
  monitoring: "Monitoring Evidence",
  recovery: "Recovery Evidence",
  outcome: "Output Evidence",
} as const;

type GalleryPlacement = keyof typeof placementTitles;

export function ProjectGallery({ project, placement }: { project: Project; placement: GalleryPlacement }) {
  const media = [...(project.screenshots ?? [])].filter(
    (item): item is NonNullable<typeof item> => Boolean(item) && item.placement === placement,
  );
  if (!media.length) return null;

  return (
    <CaseStudySection id={`project-evidence-${placement}`} title={placementTitles[placement]}>
      <div className="project-gallery">
        {media.map((item) => (
          <figure key={item.id}>
            <ProjectMediaTrigger asset={item} sizes="(max-width: 700px) 100vw, 50vw" />
            <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
          </figure>
        ))}
      </div>
    </CaseStudySection>
  );
}
