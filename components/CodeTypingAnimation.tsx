'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CodeLine {
  id: string;
  label: string;
  default: string;
  interactive: string;
}

const codeLines: CodeLine[] = [
  {
    id: 'name',
    label: 'name',
    default: 'const developer = {',
    interactive: 'const Deshraj_Soni = {',
  },
  {
    id: 'role',
    label: 'role',
    default: '  role: "developer",',
    interactive: '  role: "Full-Stack Developer",',
  },
  {
    id: 'passion',
    label: 'passion',
    default: '  passion: "innovation",',
    interactive: '  passion: "Building Real-Time Apps with MERN Stack",',
  },
  {
    id: 'expertise',
    label: 'expertise',
    default: '  expertise: ["tech"],',
    interactive: '  expertise: ["React", "Node.js", "Socket.io", "WebRTC"],',
  },
  {
    id: 'projects',
    label: 'projects',
    default: '  projects: 50,',
    interactive: '  projects: 50+ including TalkFlow & Whiteboard Collab,',
  },
  {
    id: 'problems',
    label: 'problems',
    default: '  solved: 150,',
    interactive: '  solved: 150+ LeetCode Problems,',
  },
  {
    id: 'contact',
    label: 'contact',
    default: '  email: "dev@example.com"',
    interactive: '  email: "deshrajsoni141@gmail.com"',
  },
  {
    id: 'close',
    label: 'close',
    default: '}',
    interactive: '}',
  },
];

export const CodeTypingAnimation: React.FC = () => {
  const [activeLines, setActiveLines] = useState<Set<string>>(new Set());

  const toggleLine = (lineId: string) => {
    const newActive = new Set(activeLines);
    if (newActive.has(lineId)) {
      newActive.delete(lineId);
    } else {
      newActive.add(lineId);
    }
    setActiveLines(newActive);
  };

  const getLineContent = (line: CodeLine): string => {
    return activeLines.has(line.id) ? line.interactive : line.default;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-2xl relative"
    >
      <div className="backdrop-blur-md bg-black/60 border border-green-500/40 rounded-xl p-8 space-y-2">
        {/* Code Editor Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-green-500/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-green-400 font-semibold">portfolio.ts</span>
          <span className="text-xs text-white/40">{codeLines.length} lines</span>
        </div>

        {/* Code Lines */}
        <div className="font-mono text-sm md:text-base leading-8 space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center gap-4 group"
            >
              {/* Line Number */}
              <span className="text-white/30 w-6 text-right text-xs select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Line Content - Clickable */}
              <motion.div
                onClick={() => line.id !== 'close' && toggleLine(line.id)}
                whileHover={line.id !== 'close' ? { x: 4 } : {}}
                className={`flex-1 cursor-pointer relative py-1 px-3 rounded transition-all duration-300 ${
                  line.id !== 'close'
                    ? activeLines.has(line.id)
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-transparent border border-transparent hover:bg-green-500/10 hover:border-green-500/30'
                    : 'cursor-default'
                }`}
              >
                <span
                  className={`${
                    getLineContent(line).includes('const')
                      ? 'text-pink-400'
                      : getLineContent(line).includes(':')
                      ? 'text-blue-400'
                      : getLineContent(line).includes('[')
                      ? 'text-yellow-400'
                      : getLineContent(line).includes('"')
                      ? 'text-green-400'
                      : 'text-green-400'
                  }`}
                >
                  {getLineContent(line)}
                </span>

                {/* Hover Indicator */}
                {line.id !== 'close' && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-xs"
                  >
                    click
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 pt-4 border-t border-green-500/20 text-xs text-green-400/60 text-center"
        >
          💡 Click on any line to reveal more information
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-6 rounded-xl opacity-20 -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Side accent line */}
      <motion.div
            className="absolute -left-1 top-0 bottom-0 w-1 bg-linear-to-b from-green-500 via-green-400 to-transparent rounded-full"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};
