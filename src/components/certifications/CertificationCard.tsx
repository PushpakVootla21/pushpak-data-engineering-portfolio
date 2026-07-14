import Image from "next/image";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Certification } from "@/types/content";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="certification-card">
      <div className="certification-badge">
        <Image src={certification.badgeImage} alt={`${certification.name} badge`} fill sizes="(max-width: 680px) 96px, 112px" />
      </div>
      <div className="certification-card-content">
        <p>{certification.issuer}</p>
        <h3>{certification.name}</h3>
        <ExternalLink className="text-link certification-link" href={certification.credentialUrl}>View Credential</ExternalLink>
      </div>
    </article>
  );
}
