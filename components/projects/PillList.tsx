interface PillListProps {
  items: string[];
  ariaLabel?: string;
  className?: string;
}

export function PillList({ items, ariaLabel, className }: PillListProps) {
  return (
    <ul
      className={className ?? "flex flex-wrap gap-2"}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
