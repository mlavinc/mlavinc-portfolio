"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/types/i18n";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  function select(next: Locale) {
    if (next !== locale) {
      setLocale(next);
    }
  }

  return (
    <div
      className="inline-flex items-center rounded-md border border-zinc-800 p-0.5"
      role="group"
      aria-label={t("lang.switchTo")}
    >
      {(["en", "es"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => select(code)}
            aria-pressed={active}
            className={
              active
                ? "rounded-[5px] bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-950 transition-colors duration-200"
                : "rounded-[5px] px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-50"
            }
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
