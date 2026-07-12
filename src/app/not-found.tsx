import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { absoluteTitle } from "@/lib/metadata";

export const metadata: Metadata = {
  title: absoluteTitle("Page Not Found | Pushpak Vootla"),
  description: "The requested page could not be found in Pushpak Vootla’s Azure Data Engineering portfolio.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-azure-700">404</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you requested could not be found.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Return home</Button>
        <Button href="/projects" variant="secondary">View projects</Button>
      </div>
    </div>
  );
}
