import { Fragment } from "react";
import { MediaPlaceholder } from "@/components/projects/MediaPlaceholder";

interface FlowDiagramProps {
  steps?: string[];
  image?: string;
  imageAlt?: string;
  placeholderLabel?: string;
  /**
   * default: full-width (ECG / RAG / Skill Tracker)
   * featured: constrained width, height follows image (Cloud Ops architecture)
   * supporting: compact secondary diagram card (Cloud Ops CI/CD, Security, Ops)
   */
  variant?: "default" | "featured" | "supporting";
  caption?: string;
}

export function FlowDiagram({
  steps,
  image,
  imageAlt = "Architecture diagram",
  placeholderLabel,
  variant = "default",
  caption,
}: FlowDiagramProps) {
  if (image) {
    if (variant === "default") {
      return (
        <div className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>
      );
    }

    if (variant === "featured") {
      return (
        <figure className="mx-auto w-full max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-3 sm:p-4 dark:border-zinc-800 dark:bg-zinc-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt}
              className="h-auto w-full object-contain"
            />
          </div>
        </figure>
      );
    }

    return (
      <figure className="w-full">
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full object-contain"
          />
        </div>
        {caption ? (
          <figcaption className="mt-2 text-center text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (!steps || steps.length === 0) {
    return (
      <MediaPlaceholder
        label={placeholderLabel ?? "Architecture overview"}
        className="flex min-h-40 w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 py-10 dark:border-zinc-700 dark:bg-zinc-900/50"
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <span className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2 text-center text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="text-zinc-400 dark:text-zinc-600"
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
