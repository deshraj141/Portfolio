'use client';

import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

interface Tech {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const ReactIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="20" y="20" width="60" height="60" rx="8" fill="currentColor" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M50 25C35 25 25 35 25 50C25 60 30 68 38 72H38C46 76 54 76 62 72H62C70 68 75 60 75 50C75 35 65 25 50 25Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M35 50C38 42 45 38 50 38C55 38 62 42 65 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M50 20L75 35V65L50 80L25 65V35Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M50 20C40 35 35 50 35 60C35 75 42 85 50 85C58 85 65 75 65 60C65 50 60 35 50 20Z" fill="currentColor" opacity="0.8"/>
    <circle cx="50" cy="32" r="6" fill="currentColor" />
  </svg>
);

const technologies: Tech[] = [
  { name: 'React js', category: 'frontend', icon: <ReactIcon /> },
  { name: 'TypeScript', category: 'frontend', icon: <TypeScriptIcon /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <TailwindIcon /> },
  { name: 'Node.js', category: 'backend', icon: <NodeIcon /> },
  { name: 'MongoDB', category: 'backend', icon: <MongoDBIcon /> },
];

export const TechStackGrid: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Tech Stack <span className="text-green-500">&</span> Expertise
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              whileHover={{ scale: 1.08, y: -5 }}
              {...(index % 3 === 0
                ? animations.orbitSmooth
                : index % 3 === 1
                ? animations.floatSway
                : animations.floatBob)}
              className="group"
            >
              {/* Card */}
              <div className="flex flex-col items-center gap-3 px-5 py-6 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md hover:bg-white/8 transition-all duration-300 hover:border-green-500/50 min-w-35">
                
                {/* Icon */}
                <div className="text-green-400 transition-colors duration-300 group-hover:text-green-300">
                  {tech.icon}
                </div>

                {/* Label */}
                <span className="text-white text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};