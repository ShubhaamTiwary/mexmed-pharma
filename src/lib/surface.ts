import { cn } from "@/lib/utils";

/** Clinical listing / content cards — hairline border, minimal radius. */
export const surfaceCard = cn(
  "rounded-sm border border-border/80 bg-card",
  "shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
  "transition-[border-color,box-shadow] duration-200 hover:border-border",
);

/** Editorial emphasis (quality block) — soft field, not a floating SaaS card. */
export const surfaceEditorial = cn(
  "rounded-sm border border-border/70 bg-surface-subtle/90",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]",
);
