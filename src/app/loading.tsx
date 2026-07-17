'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="w-12 h-12 rounded-full border-4 border-brand-200 dark:border-brand-800 border-t-brand-600 animate-spin mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}
