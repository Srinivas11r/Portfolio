"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-50"
      style={{ opacity }}
      aria-hidden
    >
      <motion.div className="absolute inset-0 bg-grid" style={{ y: translateY }} />
      <motion.div className="absolute inset-0" style={{ y: translateY }}>
        <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-sky-500/25 blur-[140px]" />
      </motion.div>
    </motion.div>
  );
}
