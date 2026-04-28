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
  /** Active composition lines for detail pages. */
  composition?: string[];
  /** Commercial or presentation highlights taken from audited references. */
  highlights?: string[];
  /** Visible label or pack references that help buyers identify the item. */
  labelNotes?: string[];
  /** Common market pack or presentation if known. */
  packaging?: string;
};
