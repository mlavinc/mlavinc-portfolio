import { Fragment } from "react";
import { MediaPlaceholder } from "@/components/projects/MediaPlaceholder";

interface FlowDiagramProps {
  steps?: string[];
  image?: string;
  imageAlt?: string;
  placeholderLabel?: string;
  /** primary: main architecture visual; secondary: supporting diagrams */
  variant?: "primary" | "secondary";
  caption?: string;
}

export function FlowDiagram({
  steps,
  image,
  imageAlt = "Architecture diagram",
  placeholderLabel,
  variant = "primary",
  caption,
}: FlowDiagramProps) {
  if (image) {
    const isPrimary = variant === "primary";

    return (
      <figure
        className={
          isPrimary
            ? "mx-auto w-full max-w-3xl"
            : "mx-auto flex h-full w-full max-w-xl flex-col"
        }
      >
        <div
          className={
            isPrimary
              ? "flex max-h-[min(50vh,22rem)] items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-3 sm:max-h-[24rem] sm:p-4 dark:border-zinc-800 dark:bg-zinc-950"
              : "flex flex-1 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className={
              isPrimary
                ? "max-h-[min(50vh,20rem)] w-full object-contain sm:max-h-[22rem]"
                : "max-h-56 w-full object-contain sm:max-h-64"
            }
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
