"use client";
import { useEffect } from "react";
import Introduction from "./components/Introduction";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Hero from "./components/Hero";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
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
  useEffect(() => {
    // Scroll to top when home page mounts to ensure Hero is visible
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="overflow-x-hidden">
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

      {/* About */}
      <section
        id="about"
        aria-label="About Tirmidzi Ahmad"
        className="min-h-screen flex flex-col justify-center items-center gap-4 font-normal"
      >
        <Introduction />
      </section>

      {/* Tech Stack */}
      {/* <section
        id="tech-stack"
        aria-label="Technology stack"
        className="h-[90vh] flex flex-col items-center justify-center gap-2"
      >
        <TechStack />
      </section> */}

      {/* Personal Projects */}
      <section
        id="projects"
        aria-label="Personal projects"
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
