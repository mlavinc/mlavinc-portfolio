"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const current = images[index] ?? images[0];
  const hasMultiple = images.length > 1;

  function goTo(next: number) {
    setIndex((next + images.length) % images.length);
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current}
          alt={`${alt} — ${index + 1}/${images.length}`}
          className="h-full w-full object-cover object-top"
        />

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={t("caseStudy.previousImage")}
              className="absolute top-1/2 left-2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-zinc-700 bg-zinc-950/70 text-zinc-100 transition-colors duration-200 hover:bg-zinc-900"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={t("caseStudy.nextImage")}
              className="absolute top-1/2 right-2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-zinc-700 bg-zinc-950/70 text-zinc-100 transition-colors duration-200 hover:bg-zinc-900"
            >
              →
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <div className="flex flex-wrap gap-1.5">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-label={`${alt} ${imageIndex + 1}`}
                aria-current={imageIndex === index}
                className={
                  imageIndex === index
                    ? "h-1.5 w-5 rounded-full bg-zinc-200"
                    : "h-1.5 w-1.5 rounded-full bg-zinc-600 transition-colors duration-200 hover:bg-zinc-400"
                }
              />
            ))}
          </div>
          <p className="text-xs text-zinc-500">
            {index + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}
