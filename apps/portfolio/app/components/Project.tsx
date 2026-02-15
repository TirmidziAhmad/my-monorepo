"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant, imageVariant } from "./AnimatedSection";
import { ArrowUpRight, Star, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import Link from "next/link";

function Project() {
  return (
    <div className="py-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-visible">
      <AnimatedSection>
        <motion.h2
          variants={textVariant}
          className="text-4xl md:text-6xl font-bold mb-4 text-center text-foreground tracking-tight"
        >
          Personal Projects
        </motion.h2>
        <motion.p
          variants={textVariant}
          className="text-gray-500 text-center text-sm mb-16 max-w-2xl mx-auto"
        >
          A selection of things I've built — from fun experiments to real-world
          apps.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/work/${project.slug}`}
              className="block h-full cursor-pointer"
            >
              <motion.div
                variants={imageVariant}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col h-full rounded-2xl 
                  bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 
                  hover:border-foreground/20 transition-all duration-500
                  hover:shadow-lg"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -left-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 border border-amber-600 text-white text-xs font-bold tracking-wide z-10 -rotate-6 shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Featured
                  </div>
                )}

                {/* Image / Gradient Hero Area */}
                <div
                  className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Decorative grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Floating icon */}
                  <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500 select-none">
                    {project.icon}
                  </span>
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col flex-grow p-6 pt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full 
                        bg-foreground/5 text-gray-500 dark:text-gray-300 border border-foreground/10 
                        group-hover:border-foreground/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:opacity-80 transition-colors leading-snug">
                    {project.title}
                    <ArrowUpRight className="inline-block w-4 h-4 ml-1.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow font-light leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-full px-6 py-3 
                    text-sm font-medium tracking-wide text-background transition-all duration-300 
                    bg-foreground border border-foreground/10 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>View Live Project</span>
                  </motion.a>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          variants={textVariant}
          className="flex flex-col items-center justify-center text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-foreground/10" />
            --- Curious what else I've been building? ---
            <span className="w-8 h-px bg-foreground/10" />
          </p>
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full 
              bg-foreground text-background font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-foreground/10 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            See All Projects
          </Link>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default Project;
