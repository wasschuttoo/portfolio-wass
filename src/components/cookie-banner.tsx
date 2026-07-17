'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container-custom">
            <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Cookie className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <div className="flex-1">
                <p className="text-sm">
                  This site uses a single cookie to remember your theme preference. No tracking or analytics cookies.{' '}
                  <Link href="/privacy" className="text-brand-600 dark:text-brand-400 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={decline}
                  className="px-4 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="px-4 py-2 text-sm rounded-lg bg-brand-600 hover:bg-brand-700 text-white transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
