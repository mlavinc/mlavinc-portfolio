import type { ReactNode } from "react";

interface InfoCardProps {
  title?: string;
  children: ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
      {title ? (
        <h3 className="text-sm font-medium tracking-wide text-zinc-950 uppercase dark:text-zinc-50">
          {title}
        </h3>
      ) : null}
      <div className={title ? "mt-3" : undefined}>{children}</div>
    </div>
  );
}
