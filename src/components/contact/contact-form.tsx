"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { contactPage } from "@/data/pages";
import { site } from "@/data/site";

const inputClass =
  "h-12 rounded-[12px] border border-border/60 bg-background px-4 text-sm text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/35 focus:ring-2 focus:ring-primary/12";

/**
 * Client-side enquiry form. Keeps the /contact route statically rendered
 * (reads the `?product=` prefill on the client) and submits by composing a
 * mail draft to the published address — a real, no-backend send path.
 * Swap `handleSubmit` for a server action / form API when a CRM is available.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("product") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = value("name");
    const email = value("email");
    const mobile = value("mobile");
    const message = value("message");

    if (!name || (!email && !mobile) || !message) {
      setError(
        "Please add your name, a phone number or email, and a short message.",
      );
      return;
    }

    const focus = value("subject");
    const body = [
      `Name: ${name}`,
      `Mobile: ${mobile || "—"}`,
      `Email: ${email || "—"}`,
      `Site location: ${value("location") || "—"}`,
      `City: ${value("city") || "—"}`,
      focus ? `Enquiry focus: ${focus}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Website enquiry${focus ? ` — ${focus}` : ""}`;
    window.location.href = `${site.contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="mt-7 rounded-[14px] border border-primary/25 bg-primary/[0.06] px-5 py-6 text-sm leading-relaxed"
      >
        <p className="font-semibold text-foreground">
          Thanks — your enquiry draft is ready.
        </p>
        <p className="mt-2 text-muted-foreground">
          Your email app should open with the details pre-filled. If it does not,
          write to{" "}
          <a
            href={site.contact.emailHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {site.contact.emailDisplay}
          </a>{" "}
          or call{" "}
          <a
            href={site.contact.phoneHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2" noValidate>
      <input className={inputClass} name="name" placeholder="Name" aria-label="Name" required />
      <input
        className={inputClass}
        name="mobile"
        placeholder="Mobile Number"
        aria-label="Mobile number"
        inputMode="tel"
      />
      <input
        className={inputClass}
        name="email"
        placeholder="Email ID"
        aria-label="Email ID"
        type="email"
      />
      <input
        className={inputClass}
        name="location"
        placeholder="Site Location"
        aria-label="Site location"
      />
      <select className={inputClass} name="city" defaultValue="" aria-label="City">
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
        aria-label="Product or enquiry focus"
        defaultValue={prefill}
      />
      <textarea
        className="min-h-[144px] rounded-[12px] border border-border/60 bg-background px-4 py-3 text-sm text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/35 focus:ring-2 focus:ring-primary/12 sm:col-span-2"
        name="message"
        placeholder="Message"
        aria-label="Message"
        required
      />
      <div className="sm:col-span-2">
        {error ? (
          <p className="mb-3 text-sm font-medium text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-[12px] bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_rgba(11,39,68,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Send enquiry
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Your enquiry opens in your email app addressed to{" "}
          {site.contact.emailDisplay}. You can also call {site.contact.phoneDisplay}.
        </p>
      </div>
    </form>
  );
}
