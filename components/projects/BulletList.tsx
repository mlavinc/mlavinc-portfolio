interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={className ?? "space-y-2.5"}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 flex-none rounded-full bg-zinc-400 dark:bg-zinc-600"
          />
          <span className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
