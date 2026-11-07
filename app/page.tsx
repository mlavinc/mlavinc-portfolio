import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martin Lavin Carvajal",
    url: "https://mlavinc-portfolio.vercel.app",
    jobTitle: "Software & Cloud Engineer",
    sameAs: [
      "https://github.com/mlavinc",
      "https://www.linkedin.com/in/martinlavin/",
    ],
    knowsAbout: [
      "Amazon Web Services",
      "Cloud architecture",
      "Software engineering",
      "Backend development",
      "Infrastructure as Code",
      "Artificial intelligence",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Solutions Architect – Associate",
      credentialCategory: "Professional certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Amazon Web Services",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
