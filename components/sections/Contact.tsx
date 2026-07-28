import { contactLinks, contactMessage } from "@/data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          Contact
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          {contactMessage}
        </p>

        <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
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
      </div>
    </section>
  );
}
