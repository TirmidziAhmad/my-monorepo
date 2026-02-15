"use client";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  textVariant,
  imageVariant,
} from "../components/AnimatedSection";
import {
  ArrowUpRight,
  Star,
  ExternalLink,
  ArrowLeft,
  Github,
  Calendar,
} from "lucide-react";
import { projects } from ".velite";
import Link from "next/link";
import { useState } from "react";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function WorkPage() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <main className="w-full max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <motion.div variants={textVariant}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* Header */}
      <AnimatedSection className="mb-16 text-center">
        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-4"
        >
          All Projects
        </motion.h1>
        <motion.p
          variants={textVariant}
          className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto"
        >
          A collection of things I've built — from fun experiments to real-world
          applications.
        </motion.p>
      </AnimatedSection>

      {/* Tag Filters */}
      <AnimatedSection className="mb-12">
        <motion.div
          variants={textVariant}
          className="flex flex-wrap justify-center gap-2.5"
        >
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-pointer ${
              activeTag === null
                ? "bg-foreground text-background border-transparent shadow-md"
                : "bg-foreground/[0.05] text-gray-500 border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.1]"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                activeTag === tag
                  ? "bg-foreground text-background border-transparent shadow-md"
                  : "bg-foreground/[0.05] text-gray-500 border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, index) => (
          <AnimatedSection key={project.title}>
            <Link
              href={`/work/${project.slugAsParams}`}
              className="block h-full cursor-pointer"
            >
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col h-full rounded-2xl 
                  bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 
                  hover:border-foreground/25 transition-all duration-500
                  hover:shadow-lg
                  overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wide z-10">
                    <Star className="w-3 h-3 fill-amber-400" />
                    Featured
                  </div>
                )}

                {/* Gradient Hero Area */}
                <div
                  className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500 select-none">
                    {project.icon}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col flex-grow p-6 pt-4">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full 
                        bg-white/10 text-gray-300 border border-white/10 
                        group-hover:border-white/20 transition-colors"
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

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center flex-1 px-6 py-3 
                      text-sm font-medium tracking-wide text-background bg-foreground rounded-xl 
                      hover:opacity-90 transition-opacity duration-300 shadow-md"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>View Live</span>
                    </motion.a>
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center px-4 py-3 
                        text-sm font-medium text-foreground bg-foreground/10 rounded-xl 
                        hover:bg-foreground/20 border border-foreground/20 transition-all duration-300"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No projects found with that tag.
          </p>
        </div>
      )}
    </main>
  );
}
