"use client";

import Image from "next/image";
import { useState } from "react";
import { getTechnologyVisual } from "@/lib/technology-visuals";

interface TechnologyMarkProps {
  technology: string;
  prominent?: boolean;
}

export function TechnologyMark({ technology, prominent = false }: TechnologyMarkProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const visual = getTechnologyVisual(technology);
  const showImage = Boolean(visual.image) && !imageFailed;

  return (
    <span
      className={`technology-mark${prominent ? " prominent" : ""}`}
      data-length={visual.abbreviation.length}
      data-tone={visual.tone}
      aria-hidden="true"
    >
      {showImage ? (
        <Image src={visual.image!} alt="" fill sizes={prominent ? "26px" : "22px"} onError={() => setImageFailed(true)} />
      ) : (
        <span>{visual.abbreviation}</span>
      )}
    </span>
  );
}

interface TechnologyTagProps {
  technology: string;
  prominent?: boolean;
}

export function TechnologyTag({ technology, prominent = false }: TechnologyTagProps) {
  return <span className={`technology-tag${prominent ? " prominent" : ""}`}><TechnologyMark technology={technology} prominent={prominent} /><span>{technology}</span></span>;
}
