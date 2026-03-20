'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 z-9999"
      style={{
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent)',
        filter: 'blur(8px)',
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
      }}
      animate={{ 
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};
