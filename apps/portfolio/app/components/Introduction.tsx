"use client";
import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";
import { motion } from "framer-motion";
import { AnimatedSection, imageVariant, textVariant } from "./AnimatedSection";

function Introduction() {
  return (
    <div className="space-y-4">
      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>Tirmidzi Ahmad</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={me}
                alt="Tirmidzi Ahmad - Web Developer"
                width={60}
                height={60}
                className="hidden md:inline w-12 md:w-16 rounded-full object-cover hover:scale-125 hover:-rotate-6 transition-all duration-300"
              />
            </motion.span>
            <motion.span variants={textVariant}>is Indonesian</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={jakarta}
                alt="Jakarta, Indonesia cityscape"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover hover:scale-125 hover:-rotate-6 transition-all duration-300"
              />
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>
              1+ year of experience web developer
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={fullstack}
                alt="Fullstack web development illustration"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover hover:scale-125 hover:-rotate-6 transition-all duration-300"
              />
            </motion.span>
            <motion.span variants={textVariant}>,</motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>Who turns</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={coding}
                alt="Coding on a laptop"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover hover:scale-125 hover:-rotate-6 transition-all duration-300"
              />
            </motion.span>
            <motion.span variants={textVariant}>ideas</motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>into</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={functionality}
                alt="Turning ideas into functional software"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover hover:scale-125 hover:-rotate-6 transition-all duration-300"
              />
            </motion.span>
            <motion.span variants={textVariant}>functionality.</motion.span>
          </span>
        </h2>
      </AnimatedSection>
    </div>
  );
}

export default Introduction;
