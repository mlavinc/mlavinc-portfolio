export type Locale = "en" | "es";

export type Localized<T> = Record<Locale, T>;

export function pickLocalized<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
