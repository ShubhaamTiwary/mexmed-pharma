import Link from "next/link";

import { mainNavigation } from "@/data/navigation";
import { site } from "@/data/site";

import { Container } from "./container";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy text-navy-foreground">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-4">
            <p className="text-base font-medium tracking-tight text-navy-foreground">
              {site.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-navy-muted">
              {site.summary}
            </p>
          </div>

          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-navy-muted">
              Quick links
            </p>
            <ul
              className="mt-5 grid gap-y-2.5 gap-x-8 sm:grid-cols-2"
              role="list"
            >
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-muted transition-colors duration-200 hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-navy-muted">
              Contact
            </p>
            <div className="space-y-6">
              {site.contact.locations.map((loc) => (
                <address key={loc.label} className="not-italic">
                  <p className="text-xs font-medium text-navy-foreground">
                    {loc.label}
                  </p>
                  <ul
                    className="mt-2 space-y-1 text-sm leading-relaxed text-navy-muted"
                    role="list"
                  >
                    {loc.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </address>
              ))}
            </div>
            <p className="text-sm">
              <a
                href={site.contact.phoneHref}
                className="font-medium text-navy-foreground transition-colors hover:text-white"
              >
                {site.contact.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              <a
                href={site.contact.emailHref}
                className="font-medium text-white/95 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {site.contact.emailDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-navy-muted sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-navy-muted">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-muted sm:text-sm">
            Privacy and legal links can be added here for production.
          </p>
        </div>
      </Container>
    </footer>
  );
}
