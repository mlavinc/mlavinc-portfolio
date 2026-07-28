"use client";

import { Reveal } from "@/components/motion/Reveal";
import { contactLinks, contactMessage } from "@/data/contact";

export function Contact() {
  return (
    <section
      aria-labelledby="contact"
      className="pt-8 pb-16 sm:pb-20"
    >
      <Reveal className="mx-auto w-full max-w-5xl px-6">
        <h2
          id="contact"
          className="scroll-mt-28 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          Contact
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          {contactMessage}
        </p>

        <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-base font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                >
                  <span className="sr-only">{link.label}: </span>
                  {link.display}
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
