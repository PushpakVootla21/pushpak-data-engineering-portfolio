import Image from "next/image";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import type { Project } from "@/types/content";

export function ProjectGallery({ project }: { project: Project }) {
  const media = [...(project.screenshots ?? [])].filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );
  if (!media.length) return null;

  return (
    <CaseStudySection id="project-media" title="Project Screenshots and Architecture">
      <div className="project-gallery">
        {media.map((item) => (
          <figure key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 700px) 100vw, 50vw"
              unoptimized
            />
            <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
          </figure>
        ))}
      </div>
    </CaseStudySection>
  );
}
