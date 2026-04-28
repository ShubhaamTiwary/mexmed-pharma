import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath } from "@/lib/seo";
import { contactPage } from "@/data/pages";
import { site } from "@/data/site";
import { editorialImages } from "@/lib/product-visuals";

const contactDescription =
  "Contact Mexmed Pharma for product enquiries, distribution, and partnership conversations. Phone +91 88862 19335 · info@mexmedpharma.com · Serampore (West Bengal) and Forbesganj (Bihar) offices.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: alternatesForPath("/contact"),
  openGraph: {
    url: "/contact",
    title: "Contact | Mexmed Pharma",
    description: contactDescription,
  },
  twitter: {
    title: "Contact | Mexmed Pharma",
    description: contactDescription,
  },
};

const inputClass =
  "h-12 rounded-[12px] border border-border/60 bg-background px-4 text-sm text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/35 focus:ring-2 focus:ring-primary/12";

type ContactPageProps = {
  searchParams: Promise<{ product?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { product } = await searchParams;

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
              <form className="mt-7 grid gap-4 sm:grid-cols-2">
                <input className={inputClass} name="name" placeholder="Name" />
                <input className={inputClass} name="mobile" placeholder="Mobile Number" />
                <input className={inputClass} name="email" placeholder="Email ID" type="email" />
                <input className={inputClass} name="location" placeholder="Site Location" />
                <select className={inputClass} name="city" defaultValue="">
                  <option value="" disabled>
                    City
                  </option>
                  {contactPage.form.cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <input
                  className={inputClass}
                  name="subject"
                  placeholder="Product / enquiry focus"
                  defaultValue={product ?? ""}
                />
                <textarea
                  className="min-h-[144px] rounded-[12px] border border-border/60 bg-background px-4 py-3 text-sm text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/35 focus:ring-2 focus:ring-primary/12 sm:col-span-2"
                  name="message"
                  placeholder="Message"
                />
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-[12px] bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_rgba(11,39,68,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Send enquiry
                  </button>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Form backend or CRM routing can be connected in a later enhancement. For now, the website structure and field design are complete.
                  </p>
                </div>
              </form>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
