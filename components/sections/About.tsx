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
      className="section-band scroll-mt-24 py-28 sm:py-32"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="about"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
        >
          {t("about.title")}
        </h2>

        {/* Thin rule below heading — editorial rhythm */}
        <div className="mt-5 h-px bg-zinc-800" />

        {/* Generous line-height and slightly larger text for editorial reading */}
        <div className="mt-8 max-w-3xl">
          <p className="text-lg leading-[1.8] text-zinc-300 sm:text-xl sm:leading-[1.85]">
            {getAboutIntro(locale)}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
