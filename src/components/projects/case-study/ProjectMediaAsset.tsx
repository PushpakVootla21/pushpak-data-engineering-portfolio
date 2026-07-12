import Image from "next/image";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Project, ProjectMediaType } from "@/types/content";

interface ProjectMediaAssetsProps {
  project: Project;
  type: ProjectMediaType;
  sectionId: string;
}

export function ProjectMediaAssets({ project, type, sectionId }: ProjectMediaAssetsProps) {
  const assets = project.media?.filter((asset) => asset.type === type) ?? [];
  if (!assets.length) return null;

  return (
    <section id={sectionId} className="project-media-section" aria-label={`${project.title} ${type} diagrams`}>
      <div className="case-study-section-inner project-media-stack">
        {assets.map((asset) => (
          <figure className="project-media-figure" key={asset.id}>
            <div className="project-media-heading"><h2>{asset.title}</h2><ExternalLink className="text-link" href={asset.src}>Open {asset.title} full-size</ExternalLink></div>
            <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 1100px) 100vw, 1060px" unoptimized />
            <figcaption>{asset.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
