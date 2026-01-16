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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
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
        className="text-center"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
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
