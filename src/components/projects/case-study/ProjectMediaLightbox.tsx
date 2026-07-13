"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { ProjectMedia } from "@/types/content";

interface ProjectMediaContextValue {
  openMedia: (id: string, opener: HTMLButtonElement) => void;
}

const ProjectMediaContext = createContext<ProjectMediaContextValue | null>(null);

export function ProjectMediaLightboxProvider({ media, children }: { media: ProjectMedia[]; children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const activeItem = activeIndex === null ? null : media[activeIndex];

  const close = () => {
    dialogRef.current?.close();
    setActiveIndex(null);
    openerRef.current?.focus();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    setImageFailed(false);
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const currentIndex = activeIndex;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "ArrowLeft" && currentIndex > 0) setActiveIndex(currentIndex - 1);
      if (event.key === "ArrowRight" && currentIndex < media.length - 1) setActiveIndex(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, media.length]);

  const openMedia = (id: string, opener: HTMLButtonElement) => {
    const index = media.findIndex((item) => item.id === id);
    if (index === -1) return;
    openerRef.current = opener;
    setActiveIndex(index);
  };

  return (
    <ProjectMediaContext.Provider value={{ openMedia }}>
      {children}
      <dialog
        ref={dialogRef}
        className="media-lightbox"
        aria-labelledby="media-lightbox-title"
        aria-describedby="media-lightbox-caption"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {activeItem && (
          <div className="media-lightbox-panel">
            <div className="media-lightbox-toolbar">
              <p>{(activeIndex ?? 0) + 1} of {media.length}</p>
              <button type="button" className="media-lightbox-close" onClick={close} aria-label="Close image viewer" title="Close image viewer">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="media-lightbox-stage">
              {!imageFailed ? (
                <Image
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={activeItem.width}
                  height={activeItem.height}
                  sizes="100vw"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="media-image-fallback" role="status">This project image could not be loaded.</div>
              )}
              {(activeIndex ?? 0) > 0 && (
                <button type="button" className="media-lightbox-arrow media-lightbox-previous" onClick={() => setActiveIndex((activeIndex ?? 0) - 1)} aria-label="View previous project image" title="Previous image">
                  <span aria-hidden="true">←</span>
                </button>
              )}
              {(activeIndex ?? 0) < media.length - 1 && (
                <button type="button" className="media-lightbox-arrow media-lightbox-next" onClick={() => setActiveIndex((activeIndex ?? 0) + 1)} aria-label="View next project image" title="Next image">
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
            <div className="media-lightbox-copy">
              <h2 id="media-lightbox-title">{activeItem.title}</h2>
              <p id="media-lightbox-caption">{activeItem.caption}</p>
            </div>
          </div>
        )}
      </dialog>
    </ProjectMediaContext.Provider>
  );
}

export function ProjectMediaTrigger({ asset, sizes, className }: { asset: ProjectMedia; sizes: string; className?: string }) {
  const context = useContext(ProjectMediaContext);
  const [imageFailed, setImageFailed] = useState(false);
  if (!context) throw new Error("ProjectMediaTrigger must be used inside ProjectMediaLightboxProvider.");

  return (
    <button
      type="button"
      className={["project-media-trigger", className].filter(Boolean).join(" ")}
      onClick={(event) => context.openMedia(asset.id, event.currentTarget)}
      aria-label={`Open full-size ${asset.title}`}
      title={`Open full-size ${asset.title}`}
    >
      {!imageFailed ? (
        <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes={sizes} onError={() => setImageFailed(true)} />
      ) : (
        <span className="media-image-fallback" role="status">Project image unavailable</span>
      )}
      <span className="project-media-expand" aria-hidden="true"><i /><i /></span>
    </button>
  );
}
