"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">© 2026 Martin Lavin Carvajal</p>
        <p className="text-sm text-zinc-400">{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}
