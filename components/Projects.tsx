'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  caseStudy: {
    problem: string;
    approach: string;
    impact: string;
  };
  tags: string[];
  gradient: string;
  github: string;
  live: string;
  icon: React.ReactNode;
  bgOverlay: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Talk Flow',
    description: 'Real-time messaging system using MERN Stack and Socket.io with JWT authentication, achieving <200ms message latency and 40% reduction in socket emissions.',
    caseStudy: {
      problem: 'Needed a secure chat experience that stayed responsive under high event volume.',
      approach: 'Used socket rooms, JWT auth middleware, and optimized event broadcasting paths.',
      impact: 'Delivered sub-200ms message latency with reduced unnecessary socket emissions.',
    },
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    gradient: 'from-green-600 to-green-900',
    github: 'https://github.com/deshraj141/Talk-Flow',
    live: 'https://github.com/deshraj141/Talk-Flow',
    bgOverlay: 'from-green-500/20 via-green-400/10 to-transparent',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="30" cy="30" r="8" fill="#22c55e"/>
        <circle cx="70" cy="30" r="8" fill="#86efac"/>
        <rect x="10" y="45" width="35" height="20" rx="4" fill="#22c55e" opacity="0.8"/>
        <rect x="55" y="45" width="35" height="20" rx="4" fill="#86efac" opacity="0.8"/>
        <path d="M 30 65 Q 30 80 50 85 Q 70 80 70 65" stroke="#22c55e" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'White-Board Collaboration Platform',
    description: 'Real-time collaborative whiteboard with WebRTC video conferencing, supporting 1000+ concurrent users with 50ms latency and 60 FPS canvas rendering.',
    caseStudy: {
      problem: 'Teams needed drawing and video collaboration without lag or dropped updates.',
      approach: 'Combined WebRTC media channels with socket-based cursor and drawing sync.',
      impact: 'Scaled to 1000+ users while sustaining low latency and smooth canvas frame rate.',
    },
    tags: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Canvas API'],
    gradient: 'from-cyan-600 to-cyan-900',
    github: 'https://github.com/deshraj141',
    live: 'https://github.com/deshraj141',
    bgOverlay: 'from-cyan-500/20 via-cyan-400/10 to-transparent',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="4" fill="#06b6d4" opacity="0.2" strokeWidth="2" stroke="#06b6d4"/>
        <line x1="25" y1="30" x2="75" y2="30" stroke="#06b6d4" strokeWidth="2"/>
        <line x1="25" y1="45" x2="55" y2="45" stroke="#22d3ee" strokeWidth="1.5"/>
        <circle cx="65" cy="45" r="5" fill="#06b6d4"/>
        <line x1="25" y1="60" x2="75" y2="60" stroke="#22d3ee" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'Full-stack fitness tracking application with real-time workout monitoring, progress analytics, and user statistics dashboard.',
    caseStudy: {
      problem: 'Users lacked a unified way to track workouts and progress trends in one place.',
      approach: 'Built modular tracking flows with analytics views and structured data models.',
      impact: 'Improved consistency of user logging and made progress insights immediately visible.',
    },
    tags: ['JavaScript', 'React', 'MongoDB', 'Node.js', 'REST API'],
    gradient: 'from-emerald-600 to-teal-900',
    github: 'https://github.com/deshraj141/Fitness-Tracker',
    live: 'https://github.com/deshraj141/Fitness-Tracker',
    bgOverlay: 'from-emerald-500/20 via-teal-400/10 to-transparent',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="35" r="10" fill="#10b981"/>
        <rect x="45" y="48" width="10" height="25" fill="#10b981"/>
        <rect x="30" y="55" width="10" height="18" fill="#059669"/>
        <rect x="60" y="55" width="10" height="18" fill="#059669"/>
        <rect x="35" y="73" width="8" height="12" fill="#10b981"/>
        <rect x="57" y="73" width="8" height="12" fill="#10b981"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'API with React',
    description: 'Modern REST API integration project showcasing data fetching, state management, and dynamic UI rendering with React.',
    caseStudy: {
      problem: 'Frontend needed reliable API integration patterns for dynamic interfaces.',
      approach: 'Implemented reusable fetch logic, state normalization, and resilient loading states.',
      impact: 'Reduced data inconsistency and improved render stability across API-driven pages.',
    },
    tags: ['React', 'JavaScript', 'REST API', 'Axios', 'State Management'],
    gradient: 'from-blue-600 to-indigo-900',
    github: 'https://github.com/deshraj141/API-With-React',
    live: 'https://github.com/deshraj141/API-With-React',
    bgOverlay: 'from-blue-500/20 via-indigo-400/10 to-transparent',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <path d="M 20 50 L 35 35 L 35 65 Z" fill="#3b82f6"/>
        <path d="M 40 30 L 60 50 L 40 70" stroke="#60a5fa" strokeWidth="2.5" fill="none"/>
        <path d="M 65 30 L 80 50 L 65 70" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Real Estate Website',
    description: 'Responsive real estate platform built with HTML, CSS, Bootstrap, and JavaScript featuring property listings and interactive UI.',
    caseStudy: {
      problem: 'Property browsing experience felt static and difficult to explore quickly.',
      approach: 'Designed responsive listing layouts with interaction-focused filtering and sections.',
      impact: 'Made listing discovery faster and improved usability across desktop and mobile.',
    },
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    gradient: 'from-orange-600 to-red-900',
    github: 'https://github.com/deshraj141/Real-Estate-Website',
    live: 'https://deshraj141.github.io/Real-Estate-Website/',
    bgOverlay: 'from-orange-500/20 via-red-400/10 to-transparent',
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <polygon points="50,20 30,50 35,50 35,75 65,75 65,50 70,50" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="40" y="55" width="8" height="8" fill="#f97316"/>
        <rect x="52" y="55" width="8" height="8" fill="#f97316"/>
        <rect x="40" y="67" width="8" height="8" fill="#fb923c"/>
        <rect x="52" y="67" width="8" height="8" fill="#fb923c"/>
      </svg>
    ),
  },
];

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = (mouseY - centerY) / 10;
    const rotateY = (centerX - mouseX) / 10;

    setMousePosition({ x: mouseX - rect.left, y: mouseY - rect.top });
    setTilt({ x: rotateX, y: rotateY });
    setHoveredId(projectId);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredId(null);
  };

  return (
    <section id="projects" className="relative w-full py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-green-500">Work</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Selected builds presented as compact case studies with problem context, engineering approach, and measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px)',
                border: hoveredId === project.id ? '2px solid rgba(34, 197, 94, 0.8)' : '1px solid rgba(34, 197, 94, 0.2)',
                transform: hoveredId === project.id ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'rotateX(0deg) rotateY(0deg)',
                transformStyle: 'preserve-3d',
                boxShadow: hoveredId === project.id 
                  ? '0 0 40px rgba(34, 197, 94, 0.6), 0 20px 60px rgba(34, 197, 94, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease-out',
              }}
            >
              {/* Image/Icon Header */}
              <div className={`h-56 bg-linear-to-br ${project.gradient} overflow-hidden relative flex items-center justify-center`}>
                {/* Background Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-b ${project.bgOverlay}`}
                  initial={{ opacity: 0.5 }}
                  animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Icon Container */}
                <motion.div
                  className="relative z-10 text-white drop-shadow-2xl"
                  animate={hoveredId === project.id ? { scale: 1.15, y: -10 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    animate={hoveredId === project.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {project.icon}
                  </motion.div>
                </motion.div>

                {/* Floating Particles on Hover */}
                {hoveredId === project.id && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/40"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: Math.cos((i * Math.PI) / 2) * 60,
                          y: Math.sin((i * Math.PI) / 2) * 60,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: 'easeOut',
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: '-4px',
                          marginTop: '-4px',
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                  animate={hoveredId === project.id ? { x: ['100%', '-100%'] } : { x: ['-100%', '-100%'] }}
                  transition={{ duration: 1, repeat: hoveredId === project.id ? Infinity : 0 }}
                  style={{ width: '200%' }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-white group-hover:text-green-400 transition-colors"
                  animate={hoveredId === project.id ? { y: -4 } : { y: 0 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-2 text-xs leading-relaxed">
                  <p className="text-white/70">
                    <span className="text-green-400 font-semibold">Problem:</span> {project.caseStudy.problem}
                  </p>
                  <p className="text-white/70">
                    <span className="text-green-400 font-semibold">Approach:</span> {project.caseStudy.approach}
                  </p>
                  <p className="text-white/80">
                    <span className="text-green-400 font-semibold">Impact:</span> {project.caseStudy.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.25)' }}
                      className="px-3 py-1 text-xs font-medium text-green-400 rounded-full cursor-pointer transition-all"
                      style={{
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-20"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={hoveredId === project.id ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-left space-y-4 w-full"
                >
                  <h3 className="text-2xl font-bold text-green-400">{project.title}</h3>
                  <p className="text-white text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <p className="text-white/90">
                      <span className="text-green-300 font-semibold">Problem:</span> {project.caseStudy.problem}
                    </p>
                    <p className="text-white/90">
                      <span className="text-green-300 font-semibold">Approach:</span> {project.caseStudy.approach}
                    </p>
                    <p className="text-white/90">
                      <span className="text-green-300 font-semibold">Impact:</span> {project.caseStudy.impact}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6 justify-center">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-200 flex items-center gap-2"
                    >
                      <span>🔗</span> Live Preview
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200 flex items-center gap-2"
                    >
                      <span>⭐</span> GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" 
                style={{
                  background: hoveredId === project.id 
                    ? 'radial-gradient(circle at center, rgba(34, 197, 94, 0.4), transparent)' 
                    : 'none',
                }}
              />

              {/* Light reflection on mouse move */}
              {hoveredId === project.id && (
                <motion.div
                  className="absolute w-32 h-32 bg-green-400 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{
                    left: mousePosition.x - 64,
                    top: mousePosition.y - 64,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
