import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mexmed Pharma",
    template: "%s | Mexmed Pharma",
  },
  description:
    "Mexmed Pharma delivers pharmaceutical solutions with a focus on quality, compliance, and patient outcomes.",
  applicationName: "Mexmed Pharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mexmed Pharma",
    title: "Mexmed Pharma",
    description:
      "Pharmaceutical company committed to quality healthcare solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexmed Pharma",
    description:
      "Pharmaceutical company committed to quality healthcare solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-primary/25 selection:text-foreground dark:selection:bg-primary/35">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
