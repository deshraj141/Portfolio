'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollActive, useScrollY, smoothScroll } from '@/lib/hooks';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollActive();
  const scrollY = useScrollY();

  // Navbar styling based on scroll position
  const isScrolled = scrollY > 50;
  const navbarPadding = isScrolled ? 'py-2' : 'py-4';
  const navbarScale = isScrolled ? 0.95 : 1;
  const navbarBlur = isScrolled ? 'blur(12px)' : 'blur(10px)';
  const navbarOpacity = isScrolled ? 0.85 : 0.8;

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Work', href: 'projects' },
    { label: 'Blog', href: 'blog' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    smoothScroll(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{ scale: navbarScale }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="origin-top"
      >
        <div
          style={{
            backgroundColor: `rgba(5, 5, 5, ${navbarOpacity})`,
            backdropFilter: navbarBlur,
            borderBottom: isScrolled ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(34, 197, 94, 0.1)',
          }}
        >
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${navbarPadding} flex justify-between items-center transition-[padding] duration-300`}>
            {/* Logo with angle brackets */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-white cursor-pointer flex items-center gap-2"
            >
              <span className="text-green-500">&lt;</span>
              <span>DR</span>
              <span className="text-green-500">/&gt;</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <div key={item.href} className="relative group">
                    <motion.button
                      onClick={() => handleNavClick(item.href)}
                      whileHover={{ color: '#22c55e' }}
                      transition={{ duration: 0.2 }}
                      className={`text-sm font-medium transition-colors duration-200 py-2 ${
                        isActive ? 'text-green-500' : 'text-white/70'
                      }`}
                    >
                      {item.label}
                    </motion.button>

                    {/* Smooth Underline Animation */}
                    <motion.div
                      animate={{
                        width: isActive ? '100%' : '0%',
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="absolute bottom-1 left-0 h-0.5 bg-linear-to-r from-green-500 to-emerald-400 origin-left"
                    />

                    {/* Hover Underline (non-active) */}
                    {!isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                        className="absolute bottom-1 left-0 h-0.5 bg-green-500/40 origin-left"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Hire Me Button - White Pill Style */}
            <motion.button
              onClick={() => handleNavClick('contact')}
              whileHover={{
                scale: 1.05,
                boxShadow: isScrolled
                  ? '0 0 20px rgba(34, 197, 94, 0.4)'
                  : '0 0 30px rgba(34, 197, 94, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="hidden md:block px-6 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <motion.button
                onClick={() => handleNavClick('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white text-black font-semibold rounded-full text-xs"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-green-500 bg-green-500/10 border-l-2 border-green-500'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};
