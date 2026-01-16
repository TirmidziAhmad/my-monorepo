"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "./AnimatedSection";

const footerLinks = [
  { name: "Email", href: "/about" },
  { name: "Linkedin", href: "/" },
  { name: "Github", href: "/" },
  { name: "Instagram", href: "/" },
];

function Footer() {
  return (
    <footer className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <AnimatedSection className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div variants={textVariant} className="mb-12">
          <a
            href="mailto:tirmidziahmad.work@gmail.com"
            className="group relative inline-block"
          >
            <span className="text-5xl md:text-8xl font-bold text-white tracking-tighter transition-colors duration-300 group-hover:text-gray-300">
              LETS CONNECT
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>

        <motion.div
          variants={textVariant}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white text-lg font-medium tracking-wide transition-colors duration-300 uppercase relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          variants={textVariant}
          className="mt-24 text-gray-500 text-sm font-light"
        >
          © {new Date().getFullYear()} Tirmidzi Ahmad. All rights reserved.
        </motion.div>
      </AnimatedSection>
    </footer>
  );
}

export default Footer;
