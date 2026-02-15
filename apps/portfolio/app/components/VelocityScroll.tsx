"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { wrap } from "framer-motion";

interface VelocityScrollProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export default function VelocityScroll({
  children,
  baseVelocity = 100,
}: VelocityScrollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  /**
   * This is a magic number to around how much of the screen the text should take up.
   * So it's always repeating.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what makes it move when the user scrolls.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child is determined by the length of the text and how much space it takes up in the viewport.
   * In this case, we'll just repeat it 4 times to ensure it's always filled.
   */
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="flex gap-10 mr-10">{children} </span>
        <span className="flex gap-10 mr-10">{children} </span>
        <span className="flex gap-10 mr-10">{children} </span>
        <span className="flex gap-10 mr-10">{children} </span>
      </motion.div>
    </div>
  );
}
