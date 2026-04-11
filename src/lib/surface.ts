import { cn } from "@/lib/utils";

/** Shared marketing card shell: border, restrained shadow, no animation. */
export const surfaceCard = cn(
  "rounded-xl border border-border/70 bg-card",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045)]",
  "dark:shadow-[0_1px_2px_rgba(0,0,0,0.22)]",
);

/** Emphasis panel for quality / trust blocks. */
export const surfaceTrustPanel = cn(
  "rounded-xl border border-primary/15 bg-primary/[0.04]",
  "shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
);
