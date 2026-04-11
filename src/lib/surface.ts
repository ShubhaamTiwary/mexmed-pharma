import { cn } from "@/lib/utils";

/** Shared marketing card shell: refined border, restrained depth. */
export const surfaceCard = cn(
  "rounded-xl border border-border/60 bg-card",
  "shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
  "dark:border-border/80 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]",
);

/** Emphasis panel for quality / trust blocks. */
export const surfaceTrustPanel = cn(
  "rounded-2xl border border-border/60 bg-card",
  "shadow-[0_1px_3px_rgba(15,23,42,0.05)]",
  "dark:border-primary/20 dark:bg-card dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]",
  "dark:ring-1 dark:ring-primary/10",
);
