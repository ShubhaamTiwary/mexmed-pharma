import Link from "next/link";

import { mainNavigation } from "@/data/navigation";
import { site } from "@/data/site";

import { Container } from "./container";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-4">
            <p className="text-base font-semibold tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.summary}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Quick links
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-8" role="list">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Contact
            </p>
            <address className="not-italic">
              <ul className="space-y-1.5 text-sm text-muted-foreground" role="list">
                {site.contact.addressLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </address>
            <p className="text-sm">
              <a
                href={site.contact.phoneHref}
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                {site.contact.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              <a
                href={site.contact.emailHref}
                className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                {site.contact.emailDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <p className="text-xs sm:text-sm">
            Privacy and legal links can be added here for production.
          </p>
        </div>
      </Container>
    </footer>
  );
}
