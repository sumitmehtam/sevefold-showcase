"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
