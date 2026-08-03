import { getTechIcon } from "@/lib/tech-icons";

interface TechBadgeProps {
  name: string;
  size?: "default" | "emphasis";
}

export function TechBadge({ name, size = "default" }: TechBadgeProps) {
  const icon = getTechIcon(name);
  const emphasized = size === "emphasis";

  return (
    <li
      className={
        emphasized
          ? "inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-[13px] font-medium text-zinc-600 transition-colors duration-200 dark:border-zinc-800 dark:text-zinc-400"
          : "inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors duration-200 dark:border-zinc-800 dark:text-zinc-400"
      }
    >
      {icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          alt=""
          width={emphasized ? 17 : 14}
          height={emphasized ? 17 : 14}
          className={emphasized ? "h-[17px] w-[17px]" : "h-3.5 w-3.5"}
        />
      ) : null}
      <span>{name}</span>
    </li>
  );
}

interface TechBadgeListProps {
  items: string[];
  ariaLabel?: string;
  className?: string;
  size?: "default" | "emphasis";
}

export function TechBadgeList({
  items,
  ariaLabel,
  className,
  size = "default",
}: TechBadgeListProps) {
  return (
    <ul
      className={className ?? "flex flex-wrap gap-2"}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <TechBadge key={item} name={item} size={size} />
      ))}
    </ul>
  );
}
