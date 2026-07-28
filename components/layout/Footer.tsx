export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-10 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © 2026 Martin Lavin Carvajal
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
