/** Vertical rhythm — shared across homepage and product flows. */
export const sectionPadding = "py-16 sm:py-20 lg:py-24 xl:py-28";

export const sectionPaddingHero =
  "py-20 sm:py-24 lg:py-32 xl:py-[8.5rem]";

/** Detail page hero (product) — clinical strip. */
export const sectionPaddingProductHero =
  "py-14 sm:py-16 lg:py-20";

/** Mid-page bands (product enquiry, related) — between hero strip and full section height. */
export const sectionPaddingMid = "py-14 sm:py-16 lg:py-20";

/** After heading → primary content (grids, lists). */
export const sectionContentGap = "mt-11 sm:mt-14 lg:mt-16";

/** Before secondary / closing CTAs (Explore catalog, etc.). */
export const sectionCtaGap = "mt-10 sm:mt-12 lg:mt-14";

/** Last homepage band before footer — keeps air before navy footer. */
export const sectionPaddingFooterAdjacent =
  "pb-14 sm:pb-16 lg:pb-20";

/** Standard padding inside grid cards (pillars, services, catalog cards). */
export const cardPadding = "p-6 sm:p-7";

/** Trust panels, framed CTAs on light backgrounds. */
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

/** Page canvas — warm light field. */
export const sectionBandBase = "border-b border-border/50 bg-background";

/** Alternating soft blue-gray band (whitespace / contrast). */
export const sectionBandMuted =
  "border-b border-border/50 bg-surface-subtle/80";

/** Enquiry strips on light pages. */
export const sectionBandMutedSoft =
  "border-t border-border/50 bg-muted/70";

/** Listing intro — white sheet on gray field. */
export const sectionBandIntro = "border-b border-border/50 bg-card";

/** Deep navy — hero, footer, select CTAs (text: navy-foreground). */
export const sectionBandNavy =
  "border-b border-white/10 bg-navy text-navy-foreground";

/** Product grids — consistent gutters across featured + catalog. */
export const productGridGap = "gap-6 sm:gap-6 lg:gap-7";
