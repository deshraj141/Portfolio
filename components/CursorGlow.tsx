'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const coordsRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsFinePointer || prefersReducedMotion) {
      return;
    }

    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${coordsRef.current.x}px, ${coordsRef.current.y}px, 0)`;
      }
      frameRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current = { x: e.clientX, y: e.clientY };
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 z-9999"
      style={{
        top: 0,
        left: 0,
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent)',
        filter: 'blur(8px)',
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
        willChange: 'transform',
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
