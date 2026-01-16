"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { ReactNode } from "react";

// Shared Animation variants
export const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const controls = useAnimation();

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      whileInView="visible"
      onViewportEnter={() => controls.start("visible")}
      onViewportLeave={() => controls.start("hidden")}
      viewport={{ margin: "-100px", once: false }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
        hidden: {
          opacity: 0,
          transition: { staggerChildren: 0.05 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
