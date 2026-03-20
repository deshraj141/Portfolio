'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CodeTypingAnimation } from './CodeTypingAnimation';
import { TypingAnimation } from './TypingAnimation';
import { smoothScroll } from '@/lib/hooks';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" 
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" 
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent)',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, 0.3) 25%, rgba(34, 197, 94, 0.3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.3) 75%, rgba(34, 197, 94, 0.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, 0.3) 25%, rgba(34, 197, 94, 0.3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.3) 75%, rgba(34, 197, 94, 0.3) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-3">
                I&apos;m Deshraj Soni
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-400">
                <TypingAnimation 
                  text="Full-Stack Developer" 
                  delay={1000}
                  speed={60}
                />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="text-white/70 text-lg leading-relaxed max-w-2xl"
            >
              Started with simple logic, stayed for the chaos of real-time systems.
              <br />
              Today, I craft applications where users don&apos;t just click - they connect. With MERN, Socket.io, and WebRTC in my toolkit, I turn ideas into living, breathing digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onClick={() => smoothScroll('projects')}
                className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2, borderColor: '#22c55e', color: '#22c55e' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onClick={() => smoothScroll('contact')}
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.8,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex gap-12 pt-8 border-t border-white/10"
            >
              {[
                { label: 'Problems Solved', value: '150+' },
                { label: 'Chat Latency', value: '<200ms' },
                { label: 'Concurrent Users', value: '1000+' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1 + i * 0.1,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  <p className="text-2xl font-bold text-green-500">{stat.value}</p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <CodeTypingAnimation />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => smoothScroll('projects')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
