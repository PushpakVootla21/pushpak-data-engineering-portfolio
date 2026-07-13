"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationLinks, profile } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure-600"
        >
          <span className="block text-base font-bold leading-5 text-slate-950">{profile.name}</span>
          <span className="block text-xs font-medium text-slate-500">{profile.brandLabel}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            link.href ? <Link key={link.label} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className="nav-link rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-600">{link.label}</Link> : null
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-600 md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-5 w-5" aria-hidden="true">
            <span
              className={[
                "absolute left-0 top-1 block h-0.5 w-5 bg-current transition",
                isOpen ? "translate-y-1.5 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-4 block h-0.5 w-5 bg-current transition",
                isOpen ? "-translate-y-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {navigationLinks.map((link) => (
              link.href ? <Link key={link.label} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className="nav-link rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-600" onClick={() => setIsOpen(false)}>{link.label}</Link> : null
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
