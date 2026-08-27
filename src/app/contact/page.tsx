import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath, primaryOpenGraphImages, primaryTwitterImage } from "@/lib/seo";
import { contactPage } from "@/data/pages";
import { site } from "@/data/site";
import { editorialImages } from "@/lib/product-visuals";

const contactDescription =
  "Contact Mexmed Pharma for product, distribution & partnership enquiries across India & Nepal. Call +91 88862 19335 · Serampore & Forbesganj offices.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: alternatesForPath("/contact"),
  openGraph: {
    url: "/contact",
    title: "Contact | Mexmed Pharma",
    description: contactDescription,
    images: primaryOpenGraphImages(),
  },
  twitter: {
    title: "Contact | Mexmed Pharma",
    description: contactDescription,
    images: [primaryTwitterImage()],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <SectionHeading
                eyebrow={contactPage.eyebrow}
                title={contactPage.title}
                description={contactPage.description}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactPage.cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[16px] border border-border/55 bg-background/90 px-5 py-5 shadow-[0_12px_36px_rgba(10,18,32,0.05)]"
                  >
                    <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {card.title}
                    </p>
                    <p className="mt-3 text-base font-semibold text-foreground">
                      <a href={card.href} className="underline-offset-4 hover:underline">
                        {card.value}
                      </a>
                    </p>
                    <p className="mt-3 text-sm leading-[1.68] text-muted-foreground">
                      {card.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-muted/35 p-3 shadow-[0_18px_56px_rgba(10,18,32,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.contactDesk}
                  alt="Contact desk and communication workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Offices
              </h2>
              <div className="mt-5 space-y-7">
                {site.contact.locations.map((location) => (
                  <div key={location.label}>
                    <p className="text-sm font-semibold text-foreground">
                      {location.label}
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.9375rem] leading-relaxed text-muted-foreground" role="list">
                      {location.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <SectionHeading
                heading="h2"
                eyebrow="Enquiry form"
                title={contactPage.form.title}
                description={contactPage.form.description}
                density="comfortable"
              />
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
