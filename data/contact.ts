export interface ContactLink {
  id: string;
  label: string;
  href: string;
  display: string;
}

export const contactMessage = "Feel free to reach out.";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:martinlavinc@gmail.com",
    display: "martinlavinc@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-lavin-carvajal-010b08339/",
    display: "LinkedIn",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mlavinc",
    display: "GitHub",
  },
];
