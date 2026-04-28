import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { sectionPaddingMid } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

type ProductEnquiryCtaProps = {
  product: Product;
  className?: string;
};

export function ProductEnquiryCta({ product, className }: ProductEnquiryCtaProps) {
  const contactHref = `/contact?product=${encodeURIComponent(product.id)}`;

  return (
    <aside
      className={cn(
        sectionPaddingMid,
        "border-t border-border/45 bg-background",
        className,
      )}
      aria-labelledby="product-enquiry-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[12px] border border-border/40 bg-muted/35 shadow-[0_12px_48px_rgba(10,18,32,0.07),inset_0_1px_0_0_rgba(255,255,255,0.85)]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-primary/85"
            aria-hidden
          />
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:px-14 lg:py-12 xl:gap-16">
            <div className="min-w-0 pl-1 lg:pl-2">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Mexmed Pharma
              </p>
              <h2
                id="product-enquiry-heading"
                className="mt-4 text-balance text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground sm:text-[1.75rem]"
              >
                Request information
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
                Ask about availability, packs, or distribution for{" "}
                <span className="font-medium text-foreground">{product.name}</span>
                . We reply using the phone number and email listed on our contact
                page.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-md lg:flex-col lg:items-stretch xl:max-w-sm">
              <Link
                href={contactHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full justify-center shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] sm:min-w-[200px] lg:w-full",
                )}
              >
                Send enquiry
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full justify-center border-border/80 bg-card sm:min-w-[200px] lg:w-full",
                )}
              >
                General contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </aside>
  );
}
