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
  /** Active composition lines for detail pages. */
  composition?: string[];
  /** Common market pack or presentation if known. */
  packaging?: string;
};
