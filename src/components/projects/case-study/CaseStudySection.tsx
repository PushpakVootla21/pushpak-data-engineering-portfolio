import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  description?: string;
  className?: string;
}

export function CaseStudySection({ id, title, children, description, className }: CaseStudySectionProps) {
  return (
    <section id={id} className={["case-study-section", className].filter(Boolean).join(" ")}>
      <div className="case-study-section-inner">
        <div className="case-study-section-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
