"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface HorizontalCarouselProps {
  children: ReactNode;
  itemCount: number;
  label: string;
  previousLabel: string;
  nextLabel: string;
  className?: string;
  trackClassName?: string;
}

export function HorizontalCarousel({ children, itemCount, label, previousLabel, nextLabel, className, trackClassName }: HorizontalCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canMovePrevious, setCanMovePrevious] = useState(false);
  const [canMoveNext, setCanMoveNext] = useState(itemCount > 1);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstItem) return 0;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return firstItem.getBoundingClientRect().width + gap;
  }, []);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanMovePrevious(track.scrollLeft > 2);
    setCanMoveNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updatePosition();
    track.addEventListener("scroll", updatePosition, { passive: true });
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", updatePosition);
      observer.disconnect();
    };
  }, [updatePosition]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div className={["horizontal-carousel", className].filter(Boolean).join(" ")}>
      <div className="carousel-controls" aria-label={`${label} controls`}>
        <button type="button" onClick={() => move(-1)} disabled={!canMovePrevious} aria-label={previousLabel} title={previousLabel}>
          <span aria-hidden="true">&larr;</span>
        </button>
        <button type="button" onClick={() => move(1)} disabled={!canMoveNext} aria-label={nextLabel} title={nextLabel}>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div ref={trackRef} className={["horizontal-carousel-track", trackClassName].filter(Boolean).join(" ")} aria-label={label}>
        {children}
      </div>
    </div>
  );
}
