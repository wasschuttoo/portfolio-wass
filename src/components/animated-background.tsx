'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 -left-40 w-72 h-72 bg-red-500/5 dark:bg-red-500/8 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 -right-40 w-80 h-80 bg-rose-400/5 dark:bg-rose-500/6 rounded-full blur-[140px]"
      />
    </div>
  );
}
