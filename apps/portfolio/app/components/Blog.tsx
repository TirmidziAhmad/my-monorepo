"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant, imageVariant } from "./AnimatedSection";
import { Calendar, Clock, ArrowUpRight, Star } from "lucide-react";
import { posts } from "../data/posts";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <AnimatedSection>
        <motion.h2
          variants={textVariant}
          className="text-4xl md:text-6xl font-bold mb-4 text-center text-foreground tracking-tight"
        >
          My Thoughts
        </motion.h2>
        <motion.p
          variants={textVariant}
          className="text-gray-500 text-center text-sm mb-4 max-w-2xl mx-auto"
        >
          Thoughts on web development, design, technology, and personal
          experience.
        </motion.p>
        <motion.div
          variants={textVariant}
          className="flex items-center justify-center gap-3 text-lg md:text-xl font-medium mb-16"
        >
          <span className="text-foreground/80">3 Recent Articles</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">Weekly Updates</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={`/blog/${post.slug}`}
              variants={imageVariant}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full p-8 rounded-2xl 
                bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 
                hover:border-foreground/30 transition-all duration-300
                hover:shadow-lg
                cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Image Preview */}
              <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-foreground/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute -top-3 -left-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 border border-amber-600 text-white text-xs font-bold tracking-wide z-10 -rotate-6 shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  Featured
                </div>
              )}

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full 
                      bg-foreground/5 text-gray-500 dark:text-gray-300 border border-foreground/10"
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
          ))}
        </div>

        <motion.div
          variants={textVariant}
          className="flex flex-col items-center justify-center text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-foreground/10" />
            --- Wait, there's more to explore ---
            <span className="w-8 h-px bg-foreground/10" />
          </p>
          <Link
            href="/blog"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full 
              bg-foreground text-background font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-foreground/10 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            Read All Thoughts
          </Link>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default Blog;
