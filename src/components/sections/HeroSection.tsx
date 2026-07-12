import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PipelineFlowVisual } from "@/components/sections/PipelineFlowVisual";
import { profile } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{profile.heroLabel}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-intro">{profile.introduction}</p>
          <p className="hero-supporting">{profile.supportingIntroduction}</p>
          <div className="availability"><span aria-hidden="true" />{profile.availability}</div>
          <div className="hero-actions primary-actions">
            <Button href="/projects">Explore Projects</Button>
            <Button href="/resume" variant="secondary">View Resume</Button>
          </div>
          <div className="hero-actions secondary-actions">
            {profile.socialLinks.map((link) => link.href ? (
              <ExternalLink key={link.label} href={link.href} className="text-link">{link.label}</ExternalLink>
            ) : null)}
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>
        <PipelineFlowVisual />
      </div>
    </section>
  );
}
