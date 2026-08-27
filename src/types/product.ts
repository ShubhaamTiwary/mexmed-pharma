export type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  /** Prefer for homepage featured grid (3–6 items). */
  featured?: boolean;
  /** e.g. Tablet, Capsules, Syrup */
  dosageForm?: string;
  /** Richer intro copy for detail pages. */
  detailIntro?: string;
  /** Hand-authored 140–160 char SERP description (falls back to detailIntro/summary). */
  metaDescription?: string;
  /** Keyword-rich SERP title (brand + molecule + form); the layout appends "| Mexmed Pharma". */
  seoTitle?: string;
  /** Active composition lines for detail pages. */
  composition?: string[];
  /** Commercial or presentation highlights taken from audited references. */
  highlights?: string[];
  /** Visible label or pack references that help buyers identify the item. */
  labelNotes?: string[];
  /** Common market pack or presentation if known. */
  packaging?: string;
  /**
   * Regulatory framing used for on-page copy and structured data typing.
   * `supplement` → schema.org DietarySupplement; `prescription`/`otc` → Drug.
   */
  regulatoryClass?: "prescription" | "otc" | "supplement";
  /** Generic / active molecule names for titles, headings, and search intent. */
  molecule?: string[];
  /** Short therapeutic-class or positioning line (e.g. "hepatoprotective supplement"). */
  drugClass?: string;
  /** Factual, non-promotional use / benefit lines for the detail page. */
  uses?: string[];
  /** Directions for use (dosage line as printed on the pack). */
  directions?: string;
  /** Storage and handling guidance. */
  storage?: string;
  /** Frequently asked questions surfaced on the detail page + FAQPage JSON-LD. */
  faqs?: Array<{ question: string; answer: string }>;
};
