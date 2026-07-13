import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { validatePortfolioContent } from "@/lib/content-validation";
import "./globals.css";

validatePortfolioContent();

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: { default: siteConfig.siteTitle, template: "%s | Pushpak Vootla" },
  description: siteConfig.siteDescription,
  applicationName: siteConfig.siteName,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  keywords: ["Azure Data Engineer", "Azure Data Factory", "Azure Databricks", "Microsoft Fabric", "PySpark", "Delta Lake", "ADLS Gen2", "Data Engineering Portfolio", "Lakehouse", "Metadata-driven pipelines"],
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  openGraph: { title: siteConfig.siteTitle, description: siteConfig.siteDescription, type: "website", locale: siteConfig.locale, siteName: siteConfig.siteName, url: siteConfig.siteUrl ?? undefined },
  twitter: { card: "summary", title: siteConfig.siteTitle, description: siteConfig.siteDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = [siteConfig.linkedinUrl].filter((url): url is string => Boolean(url));
  const personSchema = siteConfig.siteUrl ? { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.professionalTitle, url: siteConfig.siteUrl, email: `mailto:${profile.email}`, ...(sameAs.length ? { sameAs } : {}), address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "India" }, knowsAbout: ["Azure Data Factory", "Azure Databricks", "Microsoft Fabric", "PySpark", "Delta Lake", "ADLS Gen2", "Data Engineering"] } : null;
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer />{personSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />}</body></html>;
}
