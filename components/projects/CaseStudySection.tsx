import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function CaseStudySection({
  id,
  title,
  intro,
  children,
}: CaseStudySectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-zinc-200 pt-12 dark:border-zinc-800"
    >
      <h2
        id={id}
        className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {intro}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
