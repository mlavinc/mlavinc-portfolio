"use client";

import { Reveal } from "@/components/motion/Reveal";
import { getAboutIntro } from "@/data/about";
import { useLocale } from "@/lib/i18n/locale-context";

export function About() {
  const { locale, t } = useLocale();

  return (
    <section
      id="about-section"
      aria-labelledby="about"
      className="section-band section-band--muted scroll-mt-24 py-24 sm:py-28"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="about"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {t("about.title")}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {getAboutIntro(locale)}
        </p>
      </Reveal>
    </section>
  );
}
