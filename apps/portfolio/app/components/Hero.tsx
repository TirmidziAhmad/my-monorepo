"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown } from "lucide-react";
import { AnimatedSection, textVariant } from "./AnimatedSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const },
  },
} as const;

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Subtle radial glow behind the name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-foreground/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center relative z-10"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Available Badge */}
        <AnimatedSection className="flex justify-center mb-8">
          <motion.div
            variants={textVariant}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-sm font-medium tracking-wide">
              Available for work
            </span>
          </motion.div>
        </AnimatedSection>

        {/* Name */}
        <AnimatedSection>
          <motion.h1
            variants={textVariant}
            className="text-6xl md:text-[140px] lg:text-[180px] font-bold tracking-tighter leading-[0.85] text-foreground"
          >
            TIRMIDZI
          </motion.h1>
        </AnimatedSection>

        {/* Subtitle row */}
        <AnimatedSection className="my-4 md:my-6">
          <motion.div
            variants={textVariant}
            className="flex items-center justify-center gap-3"
          >
            <span className="hidden md:block w-16 h-px bg-foreground/10" />
            <p className="text-gray-500 dark:text-slate-400 text-sm md:text-xl font-light tracking-wide">
              <Typewriter
                words={[
                  "FrontEnd Developer",
                  "Fullstack Web Developer",
                  "Wordpress Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </p>
            <span className="hidden md:block w-16 h-px bg-foreground/10" />
          </motion.div>
        </AnimatedSection>

        {/* Last name */}
        <AnimatedSection>
          <motion.h1
            variants={textVariant}
            className="text-6xl md:text-[140px] lg:text-[180px] font-bold tracking-tighter leading-[0.85] text-foreground"
          >
            AHMAD
          </motion.h1>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection className="mt-16 md:mt-24">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-foreground/30 text-xs font-light tracking-[0.3em] uppercase">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-4 h-4 text-foreground/30" />
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}

export default Hero;
