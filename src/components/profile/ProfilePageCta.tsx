import { Button } from "@/components/ui/Button";

export function ProfilePageCta() {
  return (
    <section className="profile-page-cta">
      <div className="profile-page-cta-inner">
        <div><p className="eyebrow">Explore Further</p><h2>Interested in My Azure Data Engineering Experience?</h2></div>
        <div className="hero-actions"><Button href="/projects">View Projects</Button><Button href="/resume" variant="secondary">View Resume</Button><Button href="/contact" variant="secondary">Contact Me</Button></div>
      </div>
    </section>
  );
}
