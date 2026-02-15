import Introduction from "./components/Introduction";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import TechVelocitySection from "./components/TechVelocitySection";
import { getYearsOfExperience } from "./lib/experience";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@id": `${BASE_URL}/#person`,
  "@type": "Person",
  name: "Tirmidzi Ahmad",
  url: BASE_URL,
  jobTitle: "Fullstack Web Developer",
  nationality: "Indonesian",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Express",
    "PostgreSQL",
    "MySQL",
  ],
  sameAs: ["https://github.com/TirmidziAhmad"],
  email: "tirmidziahmad.work@gmail.com",
};

export default function Home() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <main className="overflow-x-hidden">
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        aria-label="Introduction hero"
        className="flex flex-col justify-center items-center h-screen "
      >
        <Hero />
      </section>

      {/* <TechVelocitySection /> */}

      {/* About */}
      <section
        id="about"
        aria-label="About Tirmidzi Ahmad"
        className="min-h-screen flex flex-col justify-center items-center gap-4 font-normal"
      >
        <Introduction yearsOfExperience={yearsOfExperience} />
      </section>

      {/* Tech Stack */}
      {/* <section
        id="tech-stack"
        aria-label="Technology stack"
        className="h-[90vh] flex flex-col items-center justify-center gap-2"
      >
        <TechStack />
      </section> */}

      {/* Projects */}
      <section
        id="projects"
        aria-label="Projects"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <Project />
      </section>

      {/* Blog */}
      <section
        id="blog"
        aria-label="Blog posts"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <Blog />
      </section>
    </main>
  );
}
