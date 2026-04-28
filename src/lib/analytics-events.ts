"use client";

import { track } from "@vercel/analytics/react";

/**
 * Typed helpers for Vercel Web Analytics custom events.
 * Dashboard: Vercel → Project → Analytics → Custom Events
 *
 * Naming: short Title Case names (Vercel examples: "Purchase", "Click Button").
 * Properties must be flat: string | number | boolean | null (no nested objects).
 */

export function trackSectionVisible(sectionId: string, page?: string) {
  track("Section View", {
    section_id: sectionId,
    ...(page ? { page } : {}),
  });
}

export function trackNavMobileMenu(action: "open" | "close") {
  track("Navigation Mobile Menu", {
    action,
  });
}

export function trackNavLinkClick(opts: {
  href: string;
  label: string;
  placement: "desktop" | "mobile";
}) {
  track("Navigation Click", opts);
}

export function trackHeroCta(opts: {
  label: string;
  href: string;
  placement: "primary" | "secondary";
}) {
  track("Hero CTA", opts);
}

export function trackHeroTrustPoint(opts: { index: number; total: number }) {
  track("Hero Trust Point", opts);
}

export function trackHeroContact(kind: "website" | "phone" | "address") {
  track("Hero Contact Row", {
    channel: kind,
  });
}

export function trackProductCardClick(opts: {
  product_id: string;
  product_name: string;
  variant: "default" | "catalog" | "featured";
}) {
  track("Product Card Click", opts);
}
