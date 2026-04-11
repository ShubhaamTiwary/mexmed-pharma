/** Vertical rhythm — shared across homepage and product flows. */
export const sectionPadding = "py-16 sm:py-20 lg:py-24 xl:py-28";

export const sectionPaddingHero =
  "py-20 sm:py-24 lg:py-28 xl:py-[7.5rem]";

/** Detail page hero (product) — aligned scale, slightly tighter than marketing hero. */
export const sectionPaddingProductHero =
  "py-14 sm:py-16 lg:py-20";

/** Mid-page bands (product enquiry, related) — between hero strip and full section height. */
export const sectionPaddingMid = "py-14 sm:py-16 lg:py-20";

/** After heading → primary content (grids, lists). */
export const sectionContentGap = "mt-11 sm:mt-14 lg:mt-16";

/** Before secondary / closing CTAs (Explore catalog, etc.). */
export const sectionCtaGap = "mt-10 sm:mt-12 lg:mt-14";

/** Last homepage band before footer — keeps air without matching full section py. */
export const sectionPaddingFooterAdjacent =
  "pb-14 sm:pb-16 lg:pb-20";

/** Standard padding inside grid cards (pillars, services, catalog cards). */
export const cardPadding = "p-6 sm:p-7";

/** Trust panels, framed CTAs, emphasis blocks. */
export const cardPaddingLg = "p-7 sm:p-8";

/** Two-column narrative blocks (about, quality). */
export const sectionSplitGrid =
  "grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20";

/** Primary CTA row — hero / band CTAs with consistent top spacing. */
export const ctaRow =
  "mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4";

/** Centered CTA row (contact strip, product enquiry). */
export const ctaRowCentered =
  "mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4";

/** Button group without extra top margin (follows body copy in the same stack). */
export const ctaRowFlex =
  "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4";

/** Page canvas — deepest base. */
export const sectionBandBase = "border-b border-border/40 bg-background";

/**
 * Alternating band — distinct strip in dark mode.
 * Light mode stays soft via opacity.
 */
export const sectionBandMuted =
  "border-b border-border/40 bg-muted/45 dark:bg-muted";

/** Enquiry / footer-adjacent strips. */
export const sectionBandMutedSoft =
  "border-t border-border/40 bg-muted/40 dark:bg-muted/90";

/** Hero / listing intro — elevated card surface. */
export const sectionBandIntro = "border-b border-border/40 bg-card";

/** Product grids — consistent gutters across featured + catalog. */
export const productGridGap = "gap-6 sm:gap-6 lg:gap-7";
