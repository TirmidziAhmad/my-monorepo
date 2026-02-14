"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";
import { Typewriter } from "react-simple-typewriter";
// import TextPressure from "./elements/TextPressure";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const controls = useAnimation();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={controls}
      whileInView="visible"
      onViewportEnter={() => controls.start("visible")}
      onViewportLeave={() => controls.start("hidden")}
      viewport={{ margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <>
      <motion.div
        className="text-center relative"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <AnimatedSection className="flex justify-start">
          <motion.div
            variants={textVariant}
            className="flex items-center gap-2 px-4 py-2 rounded-full "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-sm font-medium tracking-wide">
              Available for project
            </span>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection>
          <motion.h1
            variants={textVariant}
            className="flex text-6xl md:text-[180px] font-semibold relative "
          >
            TIRMIDZI
          </motion.h1>
        </AnimatedSection>
        <AnimatedSection>
          <motion.p
            variants={textVariant}
            className="text-slate-400 text-xs md:text-xl"
          >
            <Typewriter
              words={[
                "FrontEnd Developer",
                "Fullstack Web Developer",
                "Wordpress Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="\"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h1
            variants={textVariant}
            className="text-6xl md:text-[180px] font-semibold"
          >
            AHMAD
          </motion.h1>
        </AnimatedSection>
      </motion.div>
    </>
  );
}

export default Hero;
