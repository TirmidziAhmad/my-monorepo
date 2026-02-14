"use client";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  textVariant,
  imageVariant,
} from "../components/AnimatedSection";
import { Calendar, Clock, ArrowUpRight, Star, ArrowLeft } from "lucide-react";
import { posts } from "../data/posts";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function BlogPage() {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

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
          All Thoughts
        </motion.h1>
        <motion.p
          variants={textVariant}
          className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto"
        >
          Thoughts on web development, design, technology, and personal
          experience.
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

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post, index) => (
          <AnimatedSection key={post.title}>
            <motion.a
              href={`/blog/${post.slug}`}
              variants={cardVariant}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full p-8 rounded-2xl 
                bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 
                hover:border-foreground/30 transition-all duration-300
                hover:shadow-lg
                cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Image Preview */}
              <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-white/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute -top-3 -left-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wide z-10 -rotate-6">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  Featured
                </div>
              )}

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full 
                      bg-white/10 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-3 text-foreground group-hover:opacity-80 transition-colors leading-snug">
                {post.title}
                <ArrowUpRight className="inline-block w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>

              {/* Excerpt */}
              <p className="relative text-gray-400 mb-6 flex-grow font-light leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="relative flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No thoughts found with that tag.
          </p>
        </div>
      )}
    </main>
  );
}
