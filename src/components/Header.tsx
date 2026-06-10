import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Menu as Hamburger, X, ShoppingCart, Sun, Moon, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { cartCount, setIsCartOpen, isDarkMode, toggleDarkMode } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Menu', href: '#menu' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3 border-b border-zinc-100 dark:border-zinc-800'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group cursor-pointer focus:outline-hidden">
              <span className="p-2 bg-brand-red rounded-xl text-white shadow-lg transition-all group-hover:rotate-12">
                <UtensilsCrossed className="w-5 h-5" />
              </span>
              <span className="font-sans font-black text-xl tracking-tight text-zinc-900 dark:text-white flex items-center">
                FastFood<span className="text-brand-red dark:text-brand-yellow">Center</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs xl:text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-brand-red dark:hover:text-brand-yellow px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Actions (Cart / Dark Mode / CTA) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl text-zinc-650 dark:text-zinc-305 hover:bg-zinc-100 dark:hover:bg-zinc-905 transition-colors cursor-pointer"
                aria-label="Toggle visual theme mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-brand-yellow" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Shopping Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2.5 rounded-xl text-zinc-650 dark:text-zinc-350 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors relative cursor-pointer"
                aria-label="Open food cart drawer"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white font-mono text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-950 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Order Now Callout */}
              <a
                href="#menu"
                className="hidden sm:inline-flex bg-brand-yellow hover:bg-[#FFD000] text-slate-900 text-xs lg:text-sm font-extrabold px-6 py-2.5 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Order Now
              </a>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden transition-colors cursor-pointer"
                aria-label="Toggle navigation drawer menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Hamburger className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[69px] left-0 right-0 z-40 bg-white dark:bg-zinc-900 shadow-xl border-b border-zinc-100 dark:border-zinc-800 py-6 px-4 flex flex-col gap-4 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-base font-bold text-zinc-800 dark:text-zinc-200 hover:text-brand-red dark:hover:text-brand-yellow p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-850 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
              <a
                href="#menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-brand-yellow hover:bg-[#FFD000] text-slate-900 font-extrabold uppercase py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Order Online Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
