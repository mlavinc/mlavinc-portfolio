import type { Locale } from "@/types/i18n";
import { t } from "@/lib/i18n/dictionary";

export function getAboutIntro(locale: Locale) {
  return t(locale, "about.intro");
}

export const aboutIntro = getAboutIntro("en");
