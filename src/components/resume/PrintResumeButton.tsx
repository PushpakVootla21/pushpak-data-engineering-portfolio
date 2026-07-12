"use client";

export function PrintResumeButton() {
  return <button type="button" onClick={() => window.print()}>Print or Save as PDF</button>;
}
