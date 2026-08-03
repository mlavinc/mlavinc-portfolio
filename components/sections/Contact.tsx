"use client";

import { Reveal } from "@/components/motion/Reveal";
import { getContactLinks, getContactMessage } from "@/data/contact";
import { useLocale } from "@/lib/i18n/locale-context";

export function Contact() {
  const { locale, t } = useLocale();
  const contactLinks = getContactLinks(locale);

  return (
    <section
      id="contact-section"
      aria-labelledby="contact"
      className="section-band section-band--muted scroll-mt-24 py-24 sm:py-28"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="contact"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {t("contact.title")}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {getContactMessage(locale)}
        </p>

        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-base font-medium text-zinc-50 underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  <span className="sr-only">{link.label}: </span>
                  {link.display}
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
