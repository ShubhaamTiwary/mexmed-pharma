export type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  href: string;
  /** Prefer for homepage featured grid (3–6 items). */
  featured?: boolean;
};
