import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/data/site";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultDescription =
  "Mexmed Pharma develops and supplies pharmaceutical and nutraceutical formulations with India and Nepal operating reach — tablets, capsules, drops, and syrups across anti-infective, GI, bone-health, vitamin, haematinic, and respiratory categories. Serampore (West Bengal) head office, Forbesganj (Bihar) branch.";

const defaultOgImage = absoluteUrl(site.brand.logoSrc);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations",
    template: "%s | Mexmed Pharma",
  },
  description: defaultDescription,
  applicationName: "Mexmed Pharma",
  keywords: [
    "Mexmed Pharma",
    "pharmaceutical company India",
    "nutraceutical manufacturer",
    "tablets",
    "capsules",
    "syrup",
    "drops",
    "anti-infective",
    "gastrointestinal",
    "haematinic",
    "vitamin D3",
    "calcium tablets",
    "Serampore pharma",
    "West Bengal pharma",
    "Forbesganj Bihar pharma",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Healthcare",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations",
    description: defaultDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: site.brand.logoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations",
    description: defaultDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: site.brand.logoSrc,
    shortcut: site.brand.logoSrc,
    apple: site.brand.logoSrc,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-primary/12 selection:text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd id="ld-organization" data={organizationJsonLd()} />
        <JsonLd id="ld-website" data={websiteJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
