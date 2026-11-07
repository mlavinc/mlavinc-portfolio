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
  metadataBase: new URL("https://mlavinc-portfolio.vercel.app"),
  title: {
    default: "Martin Lavin | Software & Cloud Engineer",
    template: "%s | Martin Lavin",
  },
  description:
    "Software and cloud engineering portfolio of Martin Lavin Carvajal, AWS Certified Solutions Architect – Associate. Explore AWS architectures, backend systems, AI applications, and Infrastructure as Code.",
  keywords: [
    "Martin Lavin",
    "software engineer",
    "cloud engineer",
    "AWS Certified Solutions Architect Associate",
    "AWS",
    "backend development",
    "Infrastructure as Code",
    "Terraform",
    "AI engineering",
  ],
  authors: [{ name: "Martin Lavin Carvajal", url: "https://github.com/mlavinc" }],
  creator: "Martin Lavin Carvajal",
  publisher: "Martin Lavin Carvajal",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/cloud-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
  },
  openGraph: {
    title: "Martin Lavin Carvajal | Software & Cloud Engineer",
    description:
      "AWS Certified Solutions Architect – Associate building cloud architectures, backend systems, AI applications, and Infrastructure as Code.",
    url: "/",
    siteName: "Martin Lavin Carvajal — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Lavin Carvajal | Software & Cloud Engineer",
    description:
      "AWS Certified Solutions Architect – Associate building cloud architectures, backend systems, and AI applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
