'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1,
            }}
          >
            <h3 className="text-white font-bold text-lg mb-2">Deshraj</h3>
            <p className="text-white/60 text-sm">
              Full-stack developer building beautiful digital experiences
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2,
            }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4, color: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-green-500 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.3,
            }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -4, backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white/70 hover:text-green-500 transition-colors duration-300"
                  style={{
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  }}
                  title={platform}
                >
                  {platform[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.4,
          }}
          className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"
          style={{ transformOrigin: 'left' }}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.5,
          }}
          className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm"
        >
          <p>© {currentYear} Deshraj. All rights reserved.</p>
          <p>Designed & built with passion ✨</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
