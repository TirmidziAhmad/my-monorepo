"use client";

import { motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <motion.div
        className="h-full bg-[var(--accent)]"
        initial={{ width: "0%" }}
        animate={{ width: "90%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}
