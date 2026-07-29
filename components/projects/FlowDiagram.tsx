import { Fragment } from "react";
import { MediaPlaceholder } from "@/components/projects/MediaPlaceholder";

interface FlowDiagramProps {
  steps?: string[];
  image?: string;
  imageAlt?: string;
  placeholderLabel?: string;
}

export function FlowDiagram({
  steps,
  image,
  imageAlt = "Architecture diagram",
  placeholderLabel,
}: FlowDiagramProps) {
  if (image) {
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
