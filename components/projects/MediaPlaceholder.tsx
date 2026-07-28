interface MediaPlaceholderProps {
  label: string;
  className?: string;
}

export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={
        className ??
        "flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50"
      }
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-zinc-400 dark:text-zinc-600"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M21 15l-5-5-11 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {label}
        </p>
      </div>
    </div>
  );
}
