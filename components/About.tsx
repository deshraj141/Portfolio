'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cubicBezier } from 'framer-motion';

const appleCurve = cubicBezier(0.34, 1.56, 0.64, 1);

const bioSections = [
  {
    id: 'who',
    icon: '👤',
    title: 'Who I Am',
    description: 'I\'m Deshraj Soni — a full-stack developer who doesn\'t just build apps, but engineers experiences that move in real time.',
    color: 'from-blue-600 to-blue-900',
  },
  {
    id: 'journey',
    icon: '🚀',
    title: 'The Journey',
    description: 'It started with curiosity — breaking things, fixing them, and slowly understanding how the digital world breathes beneath the surface. That curiosity turned into discipline. Late nights, countless bugs, and over 150 problems solved later, I learned that good code works… but great systems endure.',
    color: 'from-purple-600 to-purple-900',
  },
  {
    id: 'build',
    icon: '⚙️',
    title: 'What I Build',
    description: 'Today, I build with the MERN stack, crafting applications that don\'t just respond — they react. Real-time chat systems that never sleep. Collaborative platforms where ideas flow instantly. Architectures designed not just to run, but to scale, adapt, and evolve.',
    color: 'from-pink-600 to-pink-900',
  },
  {
    id: 'philosophy',
    icon: '💡',
    title: 'My Philosophy',
    description: 'Tools like Socket.io and WebRTC aren\'t just technologies to me — they\'re the pulse behind everything I create. They turn static interfaces into living systems where users don\'t just interact… they connect.',
    color: 'from-cyan-600 to-cyan-900',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: appleCurve },
  },
};

export const About: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="about" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent)',
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Discover my journey, skills, and the philosophy behind my development approach
          </p>
        </motion.div>

        {/* Bio Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {bioSections.map((section) => (
            <motion.div
              key={section.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setExpandedCard(section.id)}
              onMouseLeave={() => setExpandedCard(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${section.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />

              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 group-hover:border-green-500/30 rounded-2xl p-8 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={expandedCard === section.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {section.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  expandedCard === section.id ? 'text-green-400' : 'text-white'
                }`}>
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {section.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(34, 197, 94, 0.2), transparent)`,
                    filter: 'blur(20px)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};
