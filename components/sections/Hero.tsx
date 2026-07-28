export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-svh items-center justify-center px-6"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50"
        >
          Martin Lavin Carvajal
        </h1>

        <p className="mt-4 text-base font-medium text-zinc-600 sm:text-lg dark:text-zinc-400">
          Full-Stack Engineer | Cloud &amp; AI
        </p>

        <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-500">
          Building modern applications focused on backend, cloud, and artificial
          intelligence.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/mlavinc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-5 text-sm font-medium text-zinc-950 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
