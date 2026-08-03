import type { Metadata } from "next";
import { ExperienceDetailClient } from "@/components/experience/ExperienceDetailClient";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Nestlé Chile | Professional Experience",
  description:
    "Case study of enterprise automation and digital transformation work as a Digital & New Tech Intern at Nestlé Chile.",
};

export default function NestleExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <ExperienceDetailClient id="nestle-digital" />
      </main>
      <Footer />
    </>
  );
}
