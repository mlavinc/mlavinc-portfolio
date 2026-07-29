import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTransition } from "@/components/motion/PageTransition";
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
    "Portfolio of Martin Lavin Carvajal — Computer Engineering student specializing in cloud engineering, AWS architecture, AI-powered applications, backend development, and Infrastructure as Code.",
  openGraph: {
    title: "Martin Lavin Carvajal | Cloud, AI & Software Engineer",
    description:
      "Cloud engineering, AI applications, backend systems, and scalable software solutions — with hands-on AWS, Terraform, and full-stack delivery.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
