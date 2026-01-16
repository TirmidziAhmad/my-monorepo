"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant, imageVariant } from "./AnimatedSection";

const projects = [
  {
    title: "Chill Netflix Clone",
    description:
      "A fullstack Netflix clone app built with React and Express, using Zustand for front-end state management.",
    link: "https://chill-netflix-clone.vercel.app/",
  },
  {
    title: "Si Paling Persegi",
    description:
      "An app to determine the area and perimeter of a square, built with HTML, CSS, and JavaScript.",
    link: "https://tirmidziahmad.github.io/SiPalingPersegi/",
  },
];

function Project() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <AnimatedSection>
        <motion.h2
          variants={textVariant}
          className="text-4xl md:text-6xl font-bold mb-16 text-center text-white tracking-tight"
        >
          Personal Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={imageVariant}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full p-8 rounded-2xl 
                bg-white/5 backdrop-blur-xl border border-white/10 
                hover:border-white/30 transition-all duration-300
                hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <h4 className="relative text-2xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                {project.title}
              </h4>

              <p className="relative text-gray-400 mb-8 flex-grow font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full px-6 py-3 
                  text-sm font-medium tracking-wide text-white transition-all duration-300 
                  border border-white/20 rounded-xl hover:bg-white hover:text-black hover:border-transparent
                  group-hover:border-white/40"
              >
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Project;
