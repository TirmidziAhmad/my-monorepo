"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "./AnimatedSection";

import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const footerLinks = [
  {
    name: "Email",
    href: "mailto:tirmidziahmad.work@gmail.com",
    icon: Mail,
    color: "hover:text-rose-400",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/tirmidziahmad",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Github",
    href: "https://github.com/tirmidziahmad",
    icon: Github,
    color: "hover:text-gray-400 dark:hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tirmidziahmd",
    icon: Instagram,
    color: "hover:text-pink-400",
  },
];

function Footer() {
  return (
    <footer className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <AnimatedSection className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div variants={textVariant} className="mb-12">
          <Link href="/contact" className="group relative inline-block">
            <span className="text-5xl md:text-8xl font-bold text-foreground tracking-tighter transition-all duration-300 group-hover:opacity-70">
              SAY HI{" "}
              <motion.span
                animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                🤙
              </motion.span>
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        <motion.div
          variants={textVariant}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-gray-500 ${item.color} text-sm md:text-base font-medium tracking-widest transition-all duration-300 uppercase group`}
            >
              <item.icon className="w-4 h-4 md:w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{item.name}</span>
            </Link>
          ))}
        </motion.div>

        <motion.div
          variants={textVariant}
          className="mt-24 text-gray-400 dark:text-gray-500 text-sm font-light"
        >
          © {new Date().getFullYear()} Tirmidzi Ahmad. All rights reserved.
        </motion.div>
      </AnimatedSection>
    </footer>
  );
}

export default Footer;
