import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { getGmailComposeUrl } from "@/lib/links";
import { navigationLinks, profile } from "@/lib/site";

export function Footer() {
  const gmailComposeUrl = getGmailComposeUrl(profile.email, "Azure Data Engineering Opportunity");
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><p className="footer-name">{profile.name}</p><p>{profile.professionalTitle} · {profile.shortLocation}</p><ExternalLink className="footer-email" href={gmailComposeUrl}>{profile.email}</ExternalLink></div>
        <nav aria-label="Footer navigation">{navigationLinks.map((link) => link.href ? <Link key={link.label} href={link.href}>{link.label}</Link> : null)}</nav>
        {profile.socialLinks.some((link) => link.href) && <nav className="footer-social" aria-label="Professional links">{profile.socialLinks.map((link) => link.href ? <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink> : null)}</nav>}
        <p className="footer-note">Built around practical data engineering work and production-oriented thinking.</p>
      </div>
    </footer>
  );
}
