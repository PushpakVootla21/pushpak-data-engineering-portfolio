import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { getGmailComposeUrl } from "@/lib/links";
import { navigationLinks, profile } from "@/lib/site";

export function Footer() {
  const gmailComposeUrl = getGmailComposeUrl(profile.email, "Azure Data Engineering Opportunity");
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity"><p className="footer-name">{profile.name}</p><p>{profile.professionalTitle} · {profile.shortLocation}</p></div>
        <nav className="footer-navigation" aria-label="Footer navigation">{navigationLinks.filter((link) => link.href !== "/").map((link) => link.href ? <Link key={link.label} href={link.href}>{link.label}</Link> : null)}</nav>
        <div className="footer-contact"><p>Professional contact</p><ExternalLink className="footer-email" href={gmailComposeUrl}>{profile.email}</ExternalLink>{profile.socialLinks.map((link) => link.href ? <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink> : null)}</div>
        <p className="footer-note">Built around practical data engineering work and production-oriented thinking.</p>
      </div>
    </footer>
  );
}
