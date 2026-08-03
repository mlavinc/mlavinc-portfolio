import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CosmicBackground } from "@/components/layout/CosmicBackground";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { PageTransition } from "@/components/motion/PageTransition";
import { PortfolioAssistant } from "@/components/PortfolioAssistant/PortfolioAssistant";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Lavin Carvajal | Cloud, AI & Software Engineer",
  description:
    "Portfolio of Martin Lavin Carvajal: Computer Engineering student specializing in cloud engineering, AWS architecture, AI-powered applications, backend development, and Infrastructure as Code.",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/cloud-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
  },
  openGraph: {
    title: "Martin Lavin Carvajal | Cloud, AI & Software Engineer",
    description:
      "Cloud engineering, AI applications, backend systems, and scalable software solutions, with hands-on AWS, Terraform, and full-stack delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[#0a0a0a] text-zinc-50">
        <LocaleProvider>
          <SmoothScroll />
          <CosmicBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <PageTransition>{children}</PageTransition>
          </div>
          <PortfolioAssistant />
        </LocaleProvider>
      </body>
    </html>
  );
}
