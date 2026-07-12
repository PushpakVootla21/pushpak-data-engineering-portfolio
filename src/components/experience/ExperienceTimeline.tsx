import { Tag } from "@/components/ui/Tag";
import type { ExperienceEntry } from "@/types/content";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  compact?: boolean;
}

export function ExperienceTimeline({ entries, compact = false }: ExperienceTimelineProps) {
  return (
    <ol className={`experience-timeline${compact ? " compact" : ""}`}>
      {entries.map((entry) => (
        <li key={`${entry.organisation}-${entry.startDate}`}>
          <article className="experience-entry">
            <div className="experience-entry-meta">
              <p>{entry.employmentType}</p>
              <p>{entry.dateLabel}</p>
              {entry.current && <span className="current-status">Current</span>}
            </div>
            <div className="experience-entry-content">
              <p className="experience-organisation">{entry.organisation}</p>
              <h3>{entry.role}</h3>
              <p className="experience-location">{entry.location}</p>
              <p className="experience-summary">{entry.summary}</p>
              <ul className="case-study-list">
                {entry.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              <div className="tag-list" aria-label={`${entry.organisation} technologies`}>
                {entry.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
