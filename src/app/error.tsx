"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-azure-700">Application error</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-950">Something went wrong.</h1>
      <p className="mt-4 text-slate-600">
        The page could not be rendered. Try again or return to the homepage.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-azure-600 bg-azure-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-azure-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-600"
        >
          Try again
        </button>
        <Button href="/" variant="secondary">
          Home
        </Button>
      </div>
    </div>
  );
}
