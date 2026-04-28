import Link from "next/link";
import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: `The requested page is not part of the ${site.name} site structure.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      className="border-b border-border/45 bg-card py-20 sm:py-28"
      aria-labelledby="not-found-heading"
    >
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Error 404
        </p>
        <h1
          id="not-found-heading"
          className="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]"
        >
          Page not found
        </h1>
        <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">
          The link may be outdated or the page may have moved. Use the navigation
          menu or return to the home page.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
