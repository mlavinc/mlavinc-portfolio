export function DemoColdStartNotice() {
  return (
    <p
      role="note"
      className="mb-2.5 flex items-start gap-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="mt-0.5 shrink-0"
      >
        <circle
          cx="8"
          cy="8"
          r="6.25"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8 7.25V11"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="8" cy="5.15" r="0.7" fill="currentColor" />
      </svg>
      Demo may take a few seconds to start due to a Lambda cold start.
    </p>
  );
}
