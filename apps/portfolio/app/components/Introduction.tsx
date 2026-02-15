"use client";
import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";
import { motion } from "framer-motion";
import { AnimatedSection, imageVariant, textVariant } from "./AnimatedSection";

interface IntroductionProps {
  yearsOfExperience: number;
}

function Introduction({ yearsOfExperience }: IntroductionProps) {
  return (
    <div className="space-y-3 md:space-y-5 px-4">
      {/* Line 1 */}
      <AnimatedSection>
        <h2 className="text-xl md:text-4xl lg:text-6xl font-light">
          <span className="flex flex-wrap gap-2 md:gap-3 items-center justify-center">
            <motion.span variants={textVariant} className="text-foreground">
              Tirmidzi Ahmad
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={me}
                alt="Tirmidzi Ahmad - Web Developer"
                width={60}
                height={60}
                className="hidden md:inline w-12 md:w-14 rounded-full object-cover ring-2 ring-foreground/10 hover:ring-foreground/30 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              />
            </motion.span>
            <motion.span variants={textVariant} className="text-foreground/60">
              is an Indonesian
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={jakarta}
                alt="Jakarta, Indonesia cityscape"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-20 rounded-lg object-cover ring-2 ring-foreground/10 hover:ring-foreground/30 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              />
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>

      {/* Line 2 */}
      <AnimatedSection>
        <h2 className="text-xl md:text-4xl lg:text-6xl font-light">
          <span className="flex flex-wrap gap-2 md:gap-3 items-center justify-center">
            <motion.span variants={textVariant} className="text-foreground/60">
              {yearsOfExperience}+ years of experience
            </motion.span>
            <motion.span variants={textVariant} className="text-foreground">
              web dev
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={fullstack}
                alt="Fullstack web development illustration"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-20 rounded-lg object-cover ring-2 ring-foreground/10 hover:ring-foreground/30 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              />
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>

      {/* Divider */}
      <AnimatedSection className="flex justify-center">
        <motion.div
          variants={textVariant}
          className="w-12 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        />
      </AnimatedSection>

      {/* Line 3 */}
      <AnimatedSection>
        <h2 className="text-xl md:text-4xl lg:text-6xl font-light">
          <span className="flex flex-wrap gap-2 md:gap-3 items-center justify-center">
            <motion.span
              variants={textVariant}
              className="text-foreground/40 text-gray-500"
            >
              Who turns
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={coding}
                alt="Coding on a laptop"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-20 rounded-lg object-cover ring-2 ring-foreground/10 hover:ring-foreground/30 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              />
            </motion.span>
            <motion.span
              variants={textVariant}
              className="text-foreground/40 text-gray-500"
            >
              ambitious ideas
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>

      {/* Line 4 */}
      <AnimatedSection>
        <h2 className="text-xl md:text-4xl lg:text-6xl font-light">
          <span className="flex flex-wrap gap-2 md:gap-3 items-center justify-center">
            <motion.span
              variants={textVariant}
              className="text-foreground/40 text-gray-500"
            >
              into
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={functionality}
                alt="Turning ideas into functional software"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-20 rounded-lg object-cover ring-2 ring-foreground/10 hover:ring-foreground/30 hover:scale-110 hover:-rotate-3 transition-all duration-300"
              />
            </motion.span>
            <motion.span
              variants={textVariant}
              className="text-foreground/40 text-gray-500 opacity-90"
            >
              high-performance functionality.
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>
    </div>
  );
}

export default Introduction;
