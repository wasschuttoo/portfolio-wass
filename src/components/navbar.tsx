'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from './theme-provider';
import { navigation, siteConfig } from '@/lib/data';
import { cn, basePath } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img src={`${basePath}/CW.png`} alt={siteConfig.name} className="h-10 w-auto object-contain group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg hidden sm:block">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/resume"
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-sm font-medium transition-all',
                    pathname === item.href
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/resume"
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-brand-600 text-white text-sm font-medium mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
