import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface SectionContainerProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, eyebrow, title, description, children, className }: SectionContainerProps) {
  return (
    <section id={id} className={["page-section", className].filter(Boolean).join(" ")}>
      <div className="section-inner">
        {title && <SectionHeader eyebrow={eyebrow} title={title} description={description} />}
        {children}
      </div>
    </section>
  );
}
