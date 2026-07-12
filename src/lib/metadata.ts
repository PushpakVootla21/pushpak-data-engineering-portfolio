import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function absoluteTitle(title: string): Metadata["title"] {
  return { absolute: title };
}

export function canonicalFor(path: string): Metadata["alternates"] {
  return siteConfig.siteUrl ? { canonical: path } : undefined;
}
