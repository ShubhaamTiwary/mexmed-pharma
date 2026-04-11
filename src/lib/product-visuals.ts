/**
 * Editorial imagery for product cards — category-mapped Unsplash (license: Unsplash).
 * Fallback keeps cards visually distinct without per-SKU photography.
 */

const VISUALS = {
  antiInfective:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=640&q=80&auto=format&fit=crop",
  gastrointestinal:
    "https://images.unsplash.com/photo-1550572017-edd951aa8f63?w=640&q=80&auto=format&fit=crop",
  bone:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=80&auto=format&fit=crop",
  vitamins:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=640&q=80&auto=format&fit=crop",
  musculoskeletal:
    "https://images.unsplash.com/photo-1516549655169-df83a0774518?w=640&q=80&auto=format&fit=crop",
  multivitamin:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=640&q=80&auto=format&fit=crop",
  haematinics:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&q=80&auto=format&fit=crop",
  respiratory:
    "https://images.unsplash.com/photo-1631217868264-e4b65d1c3f65?w=640&q=80&auto=format&fit=crop",
  default:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=640&q=80&auto=format&fit=crop",
} as const;

export function getProductCardImageSrc(category: string): string {
  const c = category.toLowerCase();
  if (c.includes("anti-infective") || c.includes("infective"))
    return VISUALS.antiInfective;
  if (c.includes("gastro")) return VISUALS.gastrointestinal;
  if (c.includes("bone") || c.includes("mineral")) return VISUALS.bone;
  if (c.includes("vitamin")) return VISUALS.vitamins;
  if (c.includes("musculo") || c.includes("joint")) return VISUALS.musculoskeletal;
  if (c.includes("multivitamin")) return VISUALS.multivitamin;
  if (c.includes("haematinic") || c.includes("iron")) return VISUALS.haematinics;
  if (c.includes("respiratory")) return VISUALS.respiratory;
  return VISUALS.default;
}

export const editorialImages = {
  aboutFacility:
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80&auto=format&fit=crop",
  qualityLab:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&auto=format&fit=crop",
} as const;
