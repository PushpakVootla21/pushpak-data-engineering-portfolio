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
            <Button href="/contact" variant="secondary">Contact Me</Button>
          </div>
          <nav className="hero-actions secondary-actions" aria-label="Professional links">
            {profile.socialLinks.map((link) => link.href ? (
              <ExternalLink key={link.label} href={link.href} className="text-link">{link.label}</ExternalLink>
            ) : null)}
          </nav>
        </div>
        <PipelineFlowVisual />
      </div>
    </section>
  );
}
