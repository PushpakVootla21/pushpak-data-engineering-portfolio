import type { Metadata } from "next";
import { profile } from "@/lib/site";
import { absoluteTitle, canonicalFor } from "@/lib/metadata";
import { publicAssetExists } from "@/lib/assets";

export const metadata: Metadata = {
  title: absoluteTitle("Resume | Pushpak Vootla"),
  description: "View and download Pushpak Vootla's Azure Data Engineering resume.",
  alternates: canonicalFor("/resume"),
};

export default function ResumePage() {
  const resumeFile = publicAssetExists(profile.resumeFile) ? profile.resumeFile : null;

  return (
    <>
      <header className="profile-page-hero resume-hero">
        <div className="profile-page-inner">
          <p className="eyebrow">Professional Resume</p>
          <h1>Resume</h1>
          <p className="profile-page-lead">View my Azure Data Engineering experience, technical skills, certifications and project work.</p>
          {resumeFile && (
            <div className="resume-actions">
              <a className="button-link primary resume-download" href={resumeFile} download="Pushpak-Vootla-Azure-Data-Engineer-Resume.pdf" aria-label="Download Pushpak Vootla Azure Data Engineer resume as a PDF">
                Download Resume <span>PDF</span>
              </a>
            </div>
          )}
          {!resumeFile && <p className="resume-availability">The resume PDF is being prepared.</p>}
        </div>
      </header>
      {resumeFile && (
        <section className="resume-view-section" aria-labelledby="resume-view-title">
          <div className="resume-view-inner">
            <div className="resume-view-heading">
              <p className="eyebrow">Online View</p>
              <h2 id="resume-view-title">Pushpak Vootla - Azure Data Engineer</h2>
            </div>
            <object className="resume-pdf-viewer" data={`${resumeFile}#view=FitH`} type="application/pdf" aria-label="Pushpak Vootla Azure Data Engineer resume PDF">
              <div className="resume-view-fallback">
                <p>Your browser cannot display the resume inline.</p>
                <a className="text-link" href={resumeFile} target="_blank" rel="noreferrer">Open the resume PDF</a>
              </div>
            </object>
          </div>
        </section>
      )}
    </>
  );
}
