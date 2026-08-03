import type { Locale } from "@/types/i18n";
import { t } from "@/lib/i18n/dictionary";

export function getNavLinks(locale: Locale) {
  return [
    { href: "#about", label: t(locale, "nav.about") },
    { href: "#projects", label: t(locale, "nav.projects") },
    { href: "#experience", label: t(locale, "nav.experience") },
    { href: "#skills", label: t(locale, "nav.skills") },
    { href: "#contact", label: t(locale, "nav.contact") },
  ] as const;
}

export const navLinks = getNavLinks("en");
