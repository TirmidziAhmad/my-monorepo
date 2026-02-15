"use client";

import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "../../components/AnimatedSection";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Post } from ".velite";
import { MDXContent } from "../../components/mdx-content";

const contentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 },
  },
} as const;

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <main className="w-full max-w-4xl mx-auto py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <motion.div variants={textVariant}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* Hero Image */}
      <AnimatedSection className="mb-12">
        <motion.div
          variants={textVariant}
          className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </motion.div>
      </AnimatedSection>

      {/* Header / Hero */}
      <AnimatedSection className="mb-16">
        <motion.div
          variants={textVariant}
          className="flex flex-wrap gap-2 mb-6"
        >
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/[0.08] text-gray-500 border border-foreground/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]"
        >
          {post.title}
        </motion.h1>

        <motion.div
          variants={textVariant}
          className="flex items-center gap-6 text-sm text-gray-500"
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </motion.div>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection>
        <motion.div
          variants={contentVariant}
          className="relative rounded-3xl bg-foreground/[0.02] dark:bg-white/[0.03] backdrop-blur-xl border border-foreground/10 dark:border-white/10 p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

          <div
            className="prose prose-slate dark:prose-invert max-w-none 
              prose-p:text-gray-500 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg
              prose-headings:text-foreground dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-strong:text-foreground dark:prose-strong:text-white prose-strong:font-semibold
              prose-blockquote:border-l-foreground/20 dark:prose-blockquote:border-l-white/20 prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-400 prose-blockquote:italic prose-blockquote:bg-foreground/[0.02] dark:prose-blockquote:bg-white/[0.02] prose-blockquote:p-6 prose-blockquote:rounded-r-xl
              prose-code:text-rose-500 dark:prose-code:text-rose-400 prose-code:bg-rose-400/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            "
          >
            <MDXContent code={post.content} />
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Footer CTA */}
      <AnimatedSection className="mt-24 text-center">
        <motion.div
          variants={textVariant}
          className="flex flex-col items-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-foreground/[0.05] to-transparent border border-foreground/10"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Enjoyed this article?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto font-light">
            I write about web development and design every week. Follow me on my
            journey or reach out for a chat.
          </p>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="px-6 py-2 rounded-full bg-foreground text-background font-semibold text-sm hover:scale-105 transition-transform shadow-lg border border-foreground/10"
            >
              More Articles
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full border border-foreground/20 text-foreground font-semibold text-sm hover:bg-foreground/[0.05] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>
    </main>
  );
}
