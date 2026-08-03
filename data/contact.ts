import type { Locale } from "@/types/i18n";
import { t } from "@/lib/i18n/dictionary";

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  display: string;
}

export function getContactMessage(locale: Locale) {
  return t(locale, "contact.message");
}

export function getContactLinks(locale: Locale): ContactLink[] {
  return [
    {
      id: "email",
      label: t(locale, "contact.email"),
      href: "mailto:martinlavinc@gmail.com",
      display: "martinlavinc@gmail.com",
    },
    {
      id: "linkedin",
      label: t(locale, "contact.linkedIn"),
      href: "https://www.linkedin.com/in/martin-lavin-carvajal-010b08339/",
      display: "LinkedIn",
    },
    {
      id: "github",
      label: t(locale, "contact.github"),
      href: "https://github.com/mlavinc",
      display: "GitHub",
    },
  ];
}

export const contactMessage = getContactMessage("en");
export const contactLinks = getContactLinks("en");
