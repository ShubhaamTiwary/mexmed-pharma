export type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  href: string;
  /** Prefer for homepage featured grid (3–6 items). */
  featured?: boolean;
  /** Dosage form as listed on the legacy site (e.g. Tablet, Syrup). */
  dosageForm?: string;
  /** Composition line from legacy product pages—verify against current approved labels before marketing use. */
  composition?: string;
};
