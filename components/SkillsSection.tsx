'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  years: number;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: '💻',
    skills: [
      { name: 'React.js', years: 1, proficiency: 'Advanced', level: 90 },
      { name: 'Tailwind CSS', years: 1, proficiency: 'Advanced', level: 88 },
      { name: 'HTML & CSS', years: 1, proficiency: 'Advanced', level: 85 },
      { name: 'TypeScript', years: 1, proficiency: 'Intermediate', level: 78 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: '⚙️',
    skills: [
      { name: 'Node.js & Express.js', years: 1, proficiency: 'Advanced', level: 88 },
      { name: 'Socket.io', years: 1, proficiency: 'Advanced', level: 85 },
      { name: 'MongoDB & MySQL', years: 1, proficiency: 'Advanced', level: 87 },
      { name: 'Git & GitHub', years: 1, proficiency: 'Advanced', level: 89 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: '🛠️',
    skills: [
      { name: 'VS Code', years: 1, proficiency: 'Expert', level: 95 },
      { name: 'Postman', years: 1, proficiency: 'Advanced', level: 85 },
      { name: 'WebRTC', years: 1, proficiency: 'Intermediate', level: 80 },
      { name: 'Canvas API', years: 1, proficiency: 'Intermediate', level: 78 },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = skill.level / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= skill.level) {
          setAnimatedLevel(skill.level);
          clearInterval(interval);
        } else {
          setAnimatedLevel(current);
        }
      }, 20);
      return () => clearInterval(interval);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [isInView, skill.level, delay]);

  const getProficiencyColor = (prof: string) => {
    switch (prof) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-green-400';
      case 'Intermediate':
        return 'bg-green-300';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white text-sm md:text-base font-semibold">{skill.name}</h4>
        <span className={`${getProficiencyColor(skill.proficiency)} text-black text-xs font-bold px-3 py-1 rounded-full`}>
          {skill.proficiency}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
        <motion.div
          className="h-full bg-linear-to-r from-green-400 to-green-500 rounded-full shadow-lg"
          style={{
            width: `${animatedLevel}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-green-500 text-2xl">✨</span>
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
              My Expertise
            </span>
            <span className="text-green-500 text-2xl">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and years of focused development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
                }}
              />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-green-500/30 rounded-3xl p-8 transition duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={skillIndex}
                    />
                  ))}
                </div>

                {/* Background accent */}
                <div className="absolute inset-0 rounded-3xl bg-green-500/0 group-hover:bg-green-500/5 transition duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
