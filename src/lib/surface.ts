import { cn } from "@/lib/utils";

/** Shared elevation — clinical cards, feature tiles */
const shadowBrandSm =
  "shadow-[0_1px_2px_rgba(10,18,32,0.05),0_8px_32px_rgba(10,18,32,0.045)]";
const shadowBrandMd =
  "shadow-[0_12px_48px_rgba(10,18,32,0.07)]";
const insetSheet =
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92)]";

/** Listing / pillar cards — soft radius, layered shadow */
export const surfaceCard = cn(
  "rounded-[10px] border border-border/50 bg-card",
  shadowBrandSm,
  insetSheet,
  "transition-[border-color,box-shadow] duration-200",
);

/** Editorial panels — inset paper feel */
export const surfaceEditorial = cn(
  "rounded-[10px] border border-border/55 bg-surface-subtle/95",
  insetSheet,
  shadowBrandSm,
);

/** Info / CTA framing — stronger lift */
export const surfacePanel = cn(
  "rounded-[12px] border border-border/45 bg-card",
  shadowBrandMd,
  insetSheet,
);
