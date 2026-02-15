"use client";

import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "../../components/AnimatedSection";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle2,
  Trophy,
  Target,
  Code2,
  Layers,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from ".velite";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="w-full max-w-6xl mx-auto py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <motion.div variants={textVariant}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* Hero Header */}
      <AnimatedSection className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <motion.div
              variants={textVariant}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-4xl">{project.icon}</span>
              <div className="h-px w-12 bg-foreground/10" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
                Case Study
              </span>
            </motion.div>

            <motion.h1
              variants={textVariant}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-[0.9]"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.div variants={textVariant}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-foreground text-background font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg border border-foreground/10"
            >
              Launch Project
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          variants={textVariant}
          className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden border border-foreground/10 group shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </motion.div>
      </AnimatedSection>

      {/* Project Info Bar */}
      <AnimatedSection className="mb-24">
        <motion.div
          variants={textVariant}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-[2rem] bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Role
            </p>
            <p className="text-foreground font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Technologies
            </p>
            <p className="text-foreground font-medium">
              {project.technologies.length} Tools Used
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Status
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-foreground font-medium">Completed</p>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Overview & Features */}
        <div className="lg:col-span-8 space-y-24">
          {/* Overview */}
          <AnimatedSection>
            <motion.div variants={textVariant}>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
                <Target className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                Project Overview
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Key Features */}
          <AnimatedSection>
            <motion.div variants={textVariant}>
              <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-4">
                <Layers className="w-8 h-8 text-purple-500 dark:text-purple-400" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-foreground/10 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-500 dark:text-gray-300 font-light leading-snug">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Result */}
          <AnimatedSection>
            <motion.div
              variants={textVariant}
              className="p-12 rounded-[2.5rem] bg-gradient-to-br from-foreground/[0.05] to-transparent border border-foreground/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Trophy className="w-32 h-32 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Result
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-lg font-light leading-relaxed relative z-10">
                {project.result}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Right Column: Achievements & Tech Stack */}
        <div className="lg:col-span-4 space-y-20">
          {/* Achievements */}
          <AnimatedSection>
            <motion.div variants={textVariant}>
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Star className="w-5 h-5 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
                Achievements
              </h3>
              <ul className="space-y-6">
                {project.achievements.map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed group-hover:text-foreground dark:group-hover:text-gray-200 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection>
            <motion.div variants={textVariant}>
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-foreground/[0.05] border border-foreground/10 text-gray-500 dark:text-gray-300 text-xs font-medium hover:bg-foreground/[0.1] hover:text-foreground dark:hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Project Link Sidebar */}
          <AnimatedSection>
            <motion.div
              variants={textVariant}
              className="p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                Interested in building something similar?
              </h3>
              <p className="text-blue-200/60 text-sm font-light mb-6 leading-relaxed">
                Let's discuss how we can bring your ideas to life with modern
                technology and elegant design.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold hover:scale-[1.02] transition-all shadow-md border border-blue-400/20"
              >
                Let's Talk
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Navigation */}
      <AnimatedSection className="mt-32 pt-16 border-t border-foreground/5">
        <motion.div
          variants={textVariant}
          className="flex justify-between items-center"
        >
          <Link
            href="/work"
            className="flex items-center gap-4 text-gray-400 hover:text-foreground transition-colors group"
          >
            <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                Back to
              </p>
              <p className="text-lg font-bold">All Projects</p>
            </div>
          </Link>
        </motion.div>
      </AnimatedSection>
    </main>
  );
}
