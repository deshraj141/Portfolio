'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  delay = 0, 
  speed = 50 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setIsTyping(true);
      return () => {};
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    setDisplayedText('');
    let index = 0;
    
    const typeTimer = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeTimer);
      }
    }, speed);

    return () => clearInterval(typeTimer);
  }, [isTyping, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 0.3 }}
      className="text-green-500"
    >
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-1 h-8 ml-1 bg-green-500"
        />
      )}
    </motion.span>
  );
};
