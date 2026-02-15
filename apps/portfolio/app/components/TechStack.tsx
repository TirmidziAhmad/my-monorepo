"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant, imageVariant } from "./AnimatedSection";
import { techstackData } from "../lib/constants";

function TechStack() {
  return (
    <div className="py-20 w-full relative">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={textVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-400 font-light tracking-wide">
            Here are some of the technologies Ive worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techstackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={imageVariant}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl 
                bg-foreground/[0.03] dark:bg-black/20 backdrop-blur-sm border border-foreground/10 
                hover:border-foreground/30 transition-all duration-300 cursor-pointer
                hover:shadow-lg dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]
              `}
            >
              {/* Glow Background on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />

              <div className="text-5xl mb-4 z-10 transition-colors duration-300 text-gray-400 group-hover:text-foreground">
                {tech.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-500 group-hover:text-foreground z-10 tracking-wider uppercase transition-colors duration-300">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default TechStack;
