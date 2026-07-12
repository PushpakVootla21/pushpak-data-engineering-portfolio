import type { Metadata } from "next";
import Link from "next/link";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { PrintResumeButton } from "@/components/resume/PrintResumeButton";
import { absoluteTitle } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("Print Resume | Pushpak Vootla"),
  description: "Print-formatted professional resume for Pushpak Vootla.",
  robots: { index: false, follow: false },
};

export default function PrintResumePage() {
  return <div className="resume-print-page"><div className="resume-print-controls"><Link href="/resume">Back to Resume</Link><PrintResumeButton /></div><ResumeDocument /></div>;
}
