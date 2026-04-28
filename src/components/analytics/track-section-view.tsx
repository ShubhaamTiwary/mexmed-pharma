"use client";

import * as React from "react";

import { trackSectionVisible } from "@/lib/analytics-events";
import { cn } from "@/lib/utils";

type TrackSectionViewProps = {
  /** Stable id shown in Analytics (e.g. hero, featured-products). */
  sectionId: string;
  /** Current route label for dashboards (default: inferred from pathname in future). */
  pageLabel?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Fires once per page load when ≥20% of the wrapper intersects the viewport.
 * Measures which page sections visitors actually scroll to (vs. raw pageviews).
 */
export function TrackSectionView({
  sectionId,
  pageLabel,
  className,
  children,
}: TrackSectionViewProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const fired = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry?.isIntersecting &&
          entry.intersectionRatio >= 0.2 &&
          !fired.current
        ) {
          fired.current = true;
          trackSectionVisible(sectionId, pageLabel);
          observer.disconnect();
        }
      },
      {
        threshold: [0, 0.2, 0.4],
        rootMargin: "0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId, pageLabel]);

  return (
    <div ref={ref} className={cn("min-h-0 w-full", className)}>
      {children}
    </div>
  );
}
