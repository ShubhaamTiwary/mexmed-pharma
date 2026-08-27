# Mexmed Pharma — SEO & Performance Improvement Plan

> Deep audit across 6 dimensions (technical SEO, structured data, product on-page content, site on-page content, performance/Core Web Vitals, architecture & off-page). Generated 2026-08-27.
> **Primary goal:** every one of the 17 products should rank when someone searches its name (e.g. "Cefron-500", "Pantamex-DSR") *and* its molecule/use queries (e.g. "cefuroxime axetil 500 uses").

---

## 1. Executive summary

Mexmed Pharma already has an **unusually strong technical SEO baseline** for a marketing site: correct `metadataBase`, unique per-page titles/descriptions, canonical + hreflang, a complete sitemap and robots, and comprehensive server-rendered JSON-LD (Organization, WebSite, LocalBusiness, Product, Breadcrumb, ItemList). Lighthouse SEO scores **1.0** and CLS is a perfect **0**.

**The site is not losing on plumbing — it is losing on content and two self-inflicted crawl defects:**

1. **The site can never return a real 404.** Both the root catch-all ([`src/app/[...slug]/page.tsx`](src/app/[...slug]/page.tsx)) and the missing-product branch ([`src/app/products/[slug]/page.tsx:82`](src/app/products/[slug]/page.tsx)) call `redirect('/products')`. Every typo, stale backlink, or spam-probed path becomes a **soft-404** that wastes crawl budget and shadows the well-built `not-found.tsx`.

2. **Product content is thin, templated boilerplate.** All 17 product pages carry ~130 words of near-identical trade copy — *"a straightforward tablet SKU for routine product review and trade reference"* — written for internal distributor review instead of the molecule/use/dosage queries buyers and patients actually search. Titles waste the most-weighted element on `— Tablets`. **This is the true blocker to the owner's product-ranking goal.**

Supporting gaps: no category/therapeutic hub pages (so authority can't flow to products), a non-functional contact form that visibly says the backend is unwired, a footer legal placeholder, internal-page copy that talks about "the website rebuild" instead of the pharma business, and no Search Console property (so ranking progress is currently unmeasurable). Performance is good (0.91) except **LCP at 3.4s**, driven by the framer-motion hero gating the paint and a 141 KiB raw-`<img>` PNG logo.

**Highest-leverage path:** fix the two redirects today → overhaul product content + medical structured data → add category hubs + internal linking → close CWV and trust gaps → set up measurement and off-page.

---

## 2. Current-state scorecard

| Area | Rating | Notes |
|---|---|---|
| Metadata (titles, descriptions, canonical, hreflang, OG/Twitter) | 🟢 **Strong** | `metadataBase` set; unique titles via `%s \| Mexmed Pharma` template, unique descriptions, canonical + en-IN/x-default hreflang, OG/Twitter everywhere. Caveat: product titles waste space on `— Tablets`; several descriptions are boilerplate and/or >160 chars. |
| Indexability & crawl (robots, 404, SSG) | 🔴 **Weak** | robots.ts and SSG correct, **but catch-all + missing-product both `redirect('/products')` → mass soft-404s**. Worst technical defect. |
| Sitemap | 🟡 Adequate | All 9 routes + 17 products with sane priorities. Gaps: no image entries, `lastModified=new Date()` resets every build, uniform product priority, no category-hub URLs. |
| Structured data / schema.org | 🟡 Adequate | Comprehensive, cross-`@id`-linked, server-rendered, no fabricated ratings. But medicines use generic `Product` not `Drug`/`DietarySupplement`, no `sameAs`, no `activeIngredient`/`prescriptionStatus`, duplicate unlinked Organization+LocalBusiness nodes, bare-URL image, product node has no `@id`. |
| Product page content depth | 🔴 **Weak** | ~130 words of near-identical trade boilerplate per SKU, framed for distributor review not search intent. Hero prints `detailIntro` + `summary` saying the same thing. **#1 blocker.** |
| Homepage & internal page content | 🔴 **Weak** | Internal copy describes the site "rebuild"/"legacy site"/"design system" instead of the business. Homepage H1 omits brand+keyword+location; AboutPreview orphaned; WhyChooseUs not on home. Clients/Career are placeholders. |
| Site architecture & internal linking | 🟡 Adequate | Flat, ≤2-click depth; category-aware related products; visible breadcrumb on detail pages. **But NO category hub pages** — category chips/labels all dead-end to `/products`; footer mesh shallow; listing page lacks visible breadcrumb. |
| E-E-A-T / trust (YMYL) | 🔴 **Weak** | Non-functional contact form saying the backend is unwired; footer "Privacy and legal links can be added here" placeholder; no privacy/terms/disclaimer; no medical reviewer, manufacturer identity, Rx/OTC status, or last-updated on product pages; no `sameAs`. |
| Performance & Core Web Vitals | 🟡 Adequate | Lighthouse 0.91, CLS 0, TBT 10ms, FCP/SI 0.9s — genuinely good. But **LCP 3.4s** (only failing CWV): 87% render delay from the framer-motion hero + a 141 KiB PNG logo (~23% of page weight). Legacy JS/polyfills, no AVIF. Measured on localhost only. |
| Measurement & off-page | ⚪ **Missing** | No Search Console, no GA4 (only `@vercel/analytics`), no `sameAs`, no social/directory profiles, no blog/resources. Product-name ranking progress is currently unmeasurable. |

---

## 3. Product SEO strategy (the centerpiece)

**Goal:** each of the 17 products ranks for (a) its brand name (`Cefron-500`), (b) molecule + strength (`cefuroxime axetil 500 uses`), and (c) brand+molecule combos. The current pages cannot do this because they are thin, templated, and written for internal trade review. Six pillars:

### 3.1 Content model (the core fix)
Add typed fields to [`src/types/product.ts`](src/types/product.ts) and populate [`src/data/products.ts`](src/data/products.ts) per SKU:
`molecule[]` (generic name(s)), `strength`, `regulatoryClass` (`'prescription' | 'otc' | 'supplement'`), `drugClass` (e.g. "cephalosporin antibiotic"), `useArea` (informational, non-promotional), `packSizes[]`, `storage`, `whoItIsFor`, `marketedBy`/`manufacturedBy`, `reviewedBy`, `updatedAt`, `faqs[]`.

Then rewrite each page to **350–600 words of genuinely unique copy**, structured as:
- **H1** = brand + molecule + strength
- **H2** "What is `<Brand>` (`<molecule> <strength>`)?"
- **H2** "Uses and therapeutic area" — factual drug-class framing, **never** efficacy/treatment claims, always "consult a registered medical practitioner"
- **H2** "Composition of `<Brand>`"
- **H2** "Dosage form and pack sizes"
- **H2** "Storage and handling"
- **H2** "Frequently asked questions"

Delete every `"straightforward tablet SKU"`, `"routine product review"`, `"distributor-side review"` phrase. Make `summary` a distinct one-liner so the hero stops printing `detailIntro` + `summary` saying the same thing ([`product-detail-hero.tsx:112-118`](src/components/products/product-detail-hero.tsx)). Keep the existing responsible disclaimer ([`product-detail-content.tsx:70-74`](src/components/products/product-detail-content.tsx)).

> ⚠️ **YMYL constraint:** medically accurate use/dosage content on pharma pages must be **written or reviewed by a qualified person**. Engineers build the fields and rendering; the clinical copy is an owner action (see §7).

### 3.2 Structured data — medical typing
In [`src/lib/structured-data.ts`](src/lib/structured-data.ts), branch `productJsonLd()` on `regulatoryClass`:
- **`Drug`** for Rx/OTC medicines → `activeIngredient` (from composition), `nonProprietaryName`, `dosageForm`, `manufacturer` `@id`, `prescriptionStatus: 'PrescriptionOnly'` for the Rx-marked items (MEXOPAM-P/SP).
- **`DietarySupplement`** for the supplements flagged in data (Extenvit, Fericom-XT, Urovive).

Add `@id: absoluteUrl(product.href)+'#product'`; provide `image` as an array of 1:1/4:3/16:9 Cloudinary variants (or `ImageObject` with width/height); point `description` at the new unique summary. Optionally wrap the page as `MedicalWebPage` with `mainEntity` referencing the `#product` node.

> **Do NOT add `offers`/`aggregateRating`/`review`** — with no prices and no genuine reviews, a Product rich result is unattainable and fabricating them violates Google policy. Rely on the attainable **BreadcrumbList** result plus the entity relevance of Drug/DietarySupplement. Add FAQPage/Question/Answer for on-page FAQs (accept the visual FAQ result now shows mainly for gov/health domains — the value is content relevance for the branded long-tail).

### 3.3 Titles & descriptions
Replace [`products/[slug]/page.tsx:42`](src/app/products/[slug]/page.tsx) `title = '${name} — ${dosageForm}'` with `"Cefron-500 (Cefuroxime Axetil 500 mg Tablets) | Mexmed Pharma"` built from the new molecule/strength fields, guarded against `"Tablets — Tablets"` duplication, ≤60 chars. Replace the boilerplate description (line 43) with a hand-authored 140–160 char `metaDescription` per product focused on molecule + use area + brand.

### 3.4 Headings & alt text
Replace the 10px uppercase micro-label H2s ([`product-detail-content.tsx`](src/components/products/product-detail-content.tsx)) with keyword-bearing, properly-sized H2s, keeping the `aria-labelledby` wiring. Rewrite every `"X packshot"` alt to descriptive keyword-bearing text ("Cefron-500 cefuroxime axetil 500 mg tablets carton and blister pack by Mexmed Pharma"); ideally give Cloudinary assets semantic public IDs so image URLs carry keywords. Add `product.image.src` to each product's sitemap entry for Google Images.

### 3.5 Internal linking & category hubs
Build a statically-generated **`/products/category/[category]`** route (`generateStaticParams` over the ~10 unique categories already in data), each with a unique H1/intro, the filtered grid, `CollectionPage` + `ItemList` + `BreadcrumbList` JSON-LD, its own metadata, and sitemap entries. Wire the homepage category chips ([`featured-products-section.tsx:65`](src/components/sections/featured-products-section.tsx)) and detail-page category labels to their hub instead of generic `/products`. Extend product breadcrumbs to **Home > Products > `<Category>` > `<Product>`**. Add in-copy contextual links with descriptive anchors: each product links to its sibling strength/variant ("the 500 mg strength", "the combination DSR capsule") and its category hub.

### 3.6 Near-duplicate pairs — differentiate, don't merge
The sibling pairs — Cefron-250/500, Pantamex-40/DSR, CALINMEX/Calinmex Forte, CAPUP-D3 Drops/60K, MEXOPAM-P/SP, Feriflex-XT/Fericom-XT — currently differ only by "lower/higher-strength" wording and will **cannibalize** each other. Give each a distinct content angle (strength-specific dosing context, drops-for-pediatric vs 60K-weekly, DSR-combination rationale vs plain PPI), keep the existing self-canonicalization, and cross-link them with descriptive anchors so Google can tell them apart.

---

## 4. Prioritized findings (ranked by impact ÷ effort)

Severity: 🔴 critical · 🟠 high · 🟡 medium · ⚪ low

| # | Finding | Dim | Sev | Effort | Fix |
|---|---|---|---|---|---|
| 1 | **Site can never return a 404** — catch-all AND missing-product both `redirect('/products')` → mass soft-404s | Tech/Crawl | 🔴 | trivial | Delete `[...slug]/page.tsx`; replace `redirect('/products')` with `notFound()` in `products/[slug]/page.tsx`; add `export const dynamicParams = false`. |
| 2 | **Rewrite all 17 product pages** from ~130 words of trade boilerplate into unique molecule/use content | Product | 🔴 | large | Add typed fields; 350–600 unique words per SKU with keyword H2s; delete all filler + duplicated hero summary. |
| 3 | Product titles waste the most-weighted element on `— Tablets` | Product | 🟠 | small | Build `Brand (Molecule Strength Form) \| Mexmed Pharma`, ≤60 chars, guard the `Tablets — Tablets` dup. |
| 4 | Product meta descriptions are boilerplate `detailIntro`, near-identical across siblings | Product | 🟠 | small | Author unique 140–160 char description per product (molecule + use + brand). |
| 5 | **No category / therapeutic hub pages** — every category link dead-ends to `/products` | Architecture | 🟠 | medium | Add static `/products/category/[category]` with CollectionPage+ItemList+Breadcrumb JSON-LD; wire chips/labels; extend breadcrumbs. |
| 6 | Medicines use generic `Product`; Rx should be `Drug`, supplements `DietarySupplement` | Schema | 🟠 | medium | Branch `productJsonLd()` on `regulatoryClass`; add `activeIngredient`, `prescriptionStatus`. |
| 7 | Near-duplicate sibling pages risk keyword cannibalization | Product | 🟠 | large | Give each sibling a distinct angle; cross-link with descriptive anchors; keep self-canonical. |
| 8 | Add per-product FAQ content + FAQPage schema for "uses/dosage/difference" long-tail | Product/Schema | 🟠 | medium | Add `faqs` field; render accessible H2 FAQ; emit FAQPage JSON-LD; factual answers. |
| 9 | Add E-E-A-T signals: manufacturer, Rx/OTC status, reviewer, last-updated | Product/Trust | 🟠 | medium | Add fields + visible content; reflect Rx status in Drug schema; keep disclaimer. |
| 10 | **Contact form is non-functional** and ships dev placeholder copy on the main lead page | Conversion | 🟠 | medium | Wire to a real backend (server action/API/form service) with validation + states; `type='submit'`; delete placeholder strings. |
| 11 | No Privacy/Terms/legal pages — footer ships a placeholder site-wide | Trust | 🟠 | medium | Add real Privacy + Terms + India pharma disclaimer; link from footer; remove placeholder. |
| 12 | Internal-page copy describes the website rebuild instead of the pharma business | Content | 🟠 | medium | Rewrite all [`pages.ts`](src/data/pages.ts) copy to be about therapeutic areas, dosage forms, quality, distribution, locations. |
| 13 | Homepage H1 omits brand name, primary keyword, and location | Homepage | 🟠 | trivial | Rewrite hero headline in [`company.ts`](src/data/company.ts) to include brand + category + geography. |
| 14 | Homepage is thin — AboutPreview orphaned, WhyChooseUs not on home | Homepage | 🟠 | trivial | Render `<AboutPreviewSection />` + `<WhyChooseUsSection />` on the homepage. |
| 15 | **LCP 3.4s** — only failing CWV, framer-motion hero gates the paint | Perf/CWV | 🟠 | medium | Server-render hero headline/subhead at final opacity (or CSS keyframes); preload the Geist woff2; reserve framer-motion for below-the-fold. |
| 16 | 141 KiB PNG logo served as raw `<img>` in 3 places | Perf/Images | 🟠 | small | Switch `logoSrc` to the existing 2 KiB `mexmed-logo-refined.svg` or route through `next/image`. |
| 17 | Organization/LocalBusiness JSON-LD has no `sameAs` | Schema/Entity | 🟡 | trivial | Create official profiles, add URLs to [`site.ts`](src/data/site.ts), emit `sameAs` array. |
| 18 | No Search Console or GA4 — product-name rankings unmeasurable | Measurement | 🟡 | small | Verify domain in GSC, submit sitemap, add GA4. |
| 19 | Weak in-body internal linking from product pages | Linking | 🟡 | medium | Add contextual links to sibling/category/molecule with descriptive anchors; replace generic "Back to catalog". |
| 20 | Packshot alt text is generic "X packshot" | Product/Images | 🟡 | small | Descriptive keyword alt; semantic Cloudinary public IDs. |
| 21 | Sitemap omits product images | Tech | 🟡 | small | Add `images: [product.image.src]` to each product entry. |
| 22 | Duplicate, unlinked Organization + LocalBusiness nodes | Schema | 🟡 | small | Merge to one `['Organization','LocalBusiness']` node under a single `@id` with geo/hours, or drop LocalBusiness. |
| 23 | Product section headings are generic 10px uppercase micro-labels | Product | 🟡 | small | Keyword-bearing, properly-sized H2s; keep one H1 + `aria-labelledby`. |
| 24 | NAP inconsistency: "Hoogly" in addresses vs "Hooghly" in body | Local SEO | 🟡 | trivial | Standardize to "Hooghly" everywhere, starting [`site.ts:28`](src/data/site.ts). |
| 25 | No PCD franchise / third-party / contract-manufacturing content | Commercial | 🟡 | medium | If the model fits, add `/franchise` or services pillars targeting those high-intent B2B terms + lead form. |
| 26 | No blog / resources section — nothing for informational rankings or backlinks | Content/Off-page | 🟡 | large | Add `/blog` or `/resources` with Article-JSON-LD articles around molecules/therapeutic areas, linking down to products/categories. |
| 27 | Product schema: no `@id`, single bare-URL image, boilerplate description | Schema | 🟡 | small | Add `@id`, image variants/ImageObject, point description at unique summary. No fake ratings/offers. |
| 28 | Contact page is dynamically rendered (SSR per request) instead of static | Tech/Perf | 🟡 | medium | Read `product` prefill client-side (`useSearchParams`) so the page stays static; keep canonical `/contact`. |
| 29 | Several meta descriptions exceed ~160 chars and truncate | Tech | ⚪ | small | Trim homepage/layout/contact/services/about to ~155 chars, front-loading keyword + location. |
| 30 | Production host (www vs non-www) is only a hardcoded fallback | Tech | 🟡 | small | Confirm live host, set `NEXT_PUBLIC_SITE_URL` in Vercel prod, enforce one host via 301. |
| 31 | `next.config` omits AVIF and long-cache headers for `/public` assets | Perf/Config | 🟡 | small | Add `images.formats: ['image/avif','image/webp']` and a `headers()` long-cache entry for `/images/**`. |
| 32 | Legacy/polyfill JS and ~54 KiB unused JS shipped to modern browsers | Perf/Bundle | 🟡 | small | Add a modern `browserslist` to package.json; confirm no dep forces core-js. |
| 33 | Hero trust-point carousel renders only 1 of 3 keyword/location-rich points in SSR DOM | Homepage | ⚪ | small | Render all trust points in the DOM; rotate emphasis via CSS/visibility. |
| 34 | `/presence` is nav-orphaned and largely duplicates `/about` + `/contact` | Linking/Content | 🟡 | small | Enrich with unique content + add to nav, or merge and redirect. |
| 35 | Clients and Career pages are thin placeholders | Content | ⚪ | small | Populate with real logos/testimonials + roles, or temporarily `noindex`. |
| 36 | Visible breadcrumb missing on the `/products` listing page | Linking | ⚪ | trivial | Render a visible Home / Products breadcrumb (extend to category hubs). |
| 37 | Shallow footer/global link mesh — no deep links to top products/categories | Linking | ⚪ | small | Expand footer into columns: therapeutic areas, featured products, company, legal. |
| 38 | Product OG/Twitter image lacks width/height | Tech/Social | ⚪ | small | Add width/height; Cloudinary 1200×630 share crop. |
| 39 | Sitemap `lastModified = new Date()` resets every deploy; uniform priority | Tech/Crawl | ⚪ | small | Derive from per-product `updatedAt`; bump priority for featured. |
| 40 | Minor schema/config polish (redundant hreflang, `areaServed` IN-only, `@graph`, inert robots host) | Tech/Schema | ⚪ | trivial | Optional: drop languages block, set `areaServed: ['IN','NP']`, consolidate `@graph`. |

---

## 5. Phased execution plan

### Phase 1 — Quick technical + trust wins (days, mostly trivial/small)
*Goal: stop actively harming indexability and trust; unlock measurement. Ship before any content work.*
- Delete [`src/app/[...slug]/page.tsx`](src/app/[...slug]/page.tsx) and replace `redirect('/products')` with `notFound()` in [`products/[slug]/page.tsx`](src/app/products/[slug]/page.tsx); add `dynamicParams = false` → real 404s (**#1**).
- Fix homepage H1 (brand+category+geography); render orphaned AboutPreview + WhyChooseUs on home (**#13–14**).
- Swap the 141 KiB PNG logo for the existing 2 KiB SVG across navbar/footer/mission-vision (**#16**).
- Standardize "Hooghly" NAP (**#24**); trim over-long meta descriptions (**#29**).
- Verify domain in GSC, submit sitemap, add GA4, confirm/set `NEXT_PUBLIC_SITE_URL` + 301 host enforcement (**#18, #30**).
- Remove the contact-form and footer placeholder strings; begin wiring the contact form (**#10–11**).

### Phase 2 — Product content & structured-data overhaul (the core goal)
*Goal: make each product rank for its brand name, molecule, and use queries.*
- Add typed fields to [`product.ts`](src/types/product.ts)/[`products.ts`](src/data/products.ts).
- Rewrite 350–600 unique words per SKU with keyword H2s; remove trade boilerplate + duplicated hero summary (**#2, #23**).
- Rebuild product titles + unique descriptions (**#3–4**).
- Branch `productJsonLd()` to Drug/DietarySupplement + `@id` + image variants; add FAQPage + on-page FAQ; surface E-E-A-T signals (**#6, #8, #9, #27**).
- Differentiate the six near-duplicate sibling pairs and cross-link (**#7**).
- Rewrite packshot alt text; add image entries to the sitemap (**#20–21**).

### Phase 3 — Category hubs & internal-linking mesh
*Goal: topical clusters that rank for head terms and funnel authority into product pages.*
- Build `/products/category/[category]` with CollectionPage+ItemList+Breadcrumb JSON-LD and unique intros (**#5**).
- Wire homepage chips, card labels, detail category text to hubs; extend breadcrumbs; add hubs to sitemap.
- Add in-copy contextual links; expand footer into columns (**#19, #37**).
- Add visible breadcrumb to `/products` listing (**#36**).
- Rewrite internal-page copy to be about the business; resolve `/presence`, Clients, Career thinness; add PCD/third-party content if applicable (**#12, #25, #34–35**).

### Phase 4 — Performance / Core Web Vitals
*Goal: LCP under 2.5s; trim JS/image weight on the India-mobile profile.*
- Move the LCP hero headline/subhead out of the framer-motion critical path; preload the Geist woff2 (**#15**).
- Add AVIF+WebP + long-cache headers; add a modern browserslist (**#31–32**).
- Make the contact page static via client-side prefill (**#28**); render all hero trust points in the DOM (**#33**).
- Re-run Lighthouse/PageSpeed on the **production Vercel URL** and watch CrUX in GSC.

### Phase 5 — Off-page, entity & content growth
*Goal: build brand entity, backlinks, and informational reach that lift the whole catalog.*
- Create social/directory profiles; emit `sameAs`; consolidate duplicate entity nodes (**#17, #22**).
- Add real Privacy/Terms/disclaimer pages (**#11** completion).
- Launch `/blog` or `/resources` with molecule/therapeutic-area articles linking down to products/categories (**#26**).
- Apply low-priority schema/config polish; per-product `updatedAt`-driven `lastModified` (**#38–40**).
- Monitor product-name impressions/positions in GSC; iterate content on surfacing queries.

---

## 6. Quick wins (do first — trivial/small, high value)
- [ ] Delete `[...slug]/page.tsx` + swap `redirect('/products')` for `notFound()` — **highest ROI on the site** (ends site-wide soft-404s).
- [ ] Replace the 141 KiB PNG logo with the existing 2 KiB SVG in navbar/footer/mission-vision — ~139 KiB off every page.
- [ ] Rewrite the homepage H1 in `company.ts` to include "Mexmed Pharma", "Pharmaceutical & Nutraceutical", "India/Serampore".
- [ ] Render the already-built but orphaned `AboutPreviewSection` + `WhyChooseUsSection` on the homepage — free content + an `/about` link.
- [ ] Fix product title tags from `Cefron-500 — Tablets` to include molecule + strength.
- [ ] Standardize the district spelling to "Hooghly" in `site.ts:28` (fixes NAP + LocalBusiness schema).
- [ ] Trim homepage/layout/contact/services meta descriptions to ~155 chars.
- [ ] Remove the visible dev placeholders (contact form + footer legal).
- [ ] Add `images: [product.image.src]` to each product sitemap entry; set `areaServed: ['IN','NP']` in Organization schema.
- [ ] Set `type='submit'` and wire the contact form to a form service so it can capture a lead.

---

## 7. Owner actions (non-code, required)
1. **Verify the domain in Google Search Console** (DNS TXT or meta token) and submit `/sitemap.xml` — required to measure product-name rankings and catch coverage issues.
2. **Set up GA4** for organic-search segmentation (stack currently ships only `@vercel/analytics`).
3. **Confirm the real production host** (apex vs www vs Vercel domain) and set `NEXT_PUBLIC_SITE_URL` in Vercel prod, with a 301 enforcing one host.
4. **Create/claim a Google Business Profile** for each office (Serampore and Forbesganj) with consistent NAP.
5. **Create official brand profiles** (LinkedIn, Facebook, IndiaMART/TradeIndia/Justdial, YouTube) so a `sameAs` array can be added and a brand Knowledge Panel becomes possible.
6. **Provide medically accurate, reviewed product content** for all 17 SKUs — molecule uses, drug class, dosage-form context, Rx/OTC/supplement status — written or signed off by a qualified person. Engineers build the fields/rendering but must not invent clinical claims on YMYL pages.
7. **Decide and supply business-model content** — whether the company offers PCD franchise / third-party (contract) manufacturing / distributorship, with coverage areas.
8. **Provide real client logos/testimonials and actual career openings**, or approve temporarily `noindex`ing those thin pages.
9. **Provide Privacy Policy, Terms, and a pharma-marketing disclaimer** appropriate for India (or approve drafts).
10. **Pursue backlinks/citations** from pharma directories, distributor networks, and industry press.
11. **Re-run Lighthouse/PageSpeed against the deployed production URL** (not localhost) and monitor real-user Core Web Vitals in GSC after the LCP fix.

---

*Full per-auditor detail (technical SEO, structured data, product on-page, site on-page, performance/CWV, architecture/off-page) with file:line evidence is available in the audit transcript. This document is the synthesized, deduplicated, prioritized plan.*
