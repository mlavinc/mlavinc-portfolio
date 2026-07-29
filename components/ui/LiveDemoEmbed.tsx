"use client";

import { useEffect, useState } from "react";

interface LiveDemoEmbedProps {
  url: string;
  title: string;
}

function isFramingBlocked(headers: Headers): boolean {
  const xfo = headers.get("x-frame-options");
  if (xfo && /deny|sameorigin/i.test(xfo)) {
    return true;
  }

  const csp =
    headers.get("content-security-policy") ??
    headers.get("content-security-policy-report-only");

  if (!csp) {
    return false;
  }

  const frameAncestors = csp
    .split(";")
    .map((directive) => directive.trim())
    .find((directive) => directive.toLowerCase().startsWith("frame-ancestors"));

  if (!frameAncestors) {
    return false;
  }

  const sources = frameAncestors
    .slice("frame-ancestors".length)
    .trim()
    .toLowerCase();

  if (!sources || sources === "'none'" || sources === "none") {
    return true;
  }

  if (sources.includes("*") || sources.includes("'self'")) {
    return false;
  }

  return true;
}

export function LiveDemoEmbed({ url, title }: LiveDemoEmbedProps) {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function checkFraming() {
      try {
        const response = await fetch(url, {
          method: "HEAD",
          mode: "cors",
        });

        if (!cancelled && isFramingBlocked(response.headers)) {
          setBlocked(true);
        }
      } catch {
        // If headers cannot be inspected, attempt the iframe embed.
      }
    }

    void checkFraming();

    return () => {
      cancelled = true;
    };
  }, [url]);

  const containerClassName =
    "relative h-[min(80vh,52rem)] min-h-[40rem] w-full overflow-hidden rounded-lg border border-dashed border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50";

  if (blocked) {
    return (
      <div className={containerClassName}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            The live demo opens in a separate tab due to browser security
            restrictions.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-950 px-3.5 text-sm font-medium text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Open Live Demo
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <iframe
        src={url}
        title={`${title} live demo`}
        className="absolute inset-0 h-full w-full min-w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write"
        onError={() => setBlocked(true)}
      />
    </div>
  );
}
