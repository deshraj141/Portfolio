import { cubicBezier, easeInOut } from 'framer-motion';

// Reusable Framer Motion animation variants
const appleCurve = cubicBezier(0.34, 1.56, 0.64, 1);

export const animations = {
  // Apple-style easing curve
  easing: appleCurve,

  // Spring physics
  spring: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },

  // Slower spring for larger elements
  softSpring: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  },

  // Basic fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },

  // Fade in from left
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: appleCurve },
  },

  // Fade in from right
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: appleCurve },
  },

  // Scale up entrance
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: appleCurve },
  },

  // Hover lift + scale
  hoverLift: {
    whileHover: { y: -8, scale: 1.02 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 10 },
  },

  // Button press
  tap: {
    whileTap: { scale: 0.95 },
  },

  // Glow on hover
  glowHover: {
    whileHover: {
      boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)',
    },
    transition: { duration: 0.3 },
  },

  // Float animation
  float: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity, ease: easeInOut },
  },

  // Pulse glow
  pulseGlow: {
    animate: { 
      boxShadow: [
        '0 0 20px rgba(34, 197, 94, 0.3)',
        '0 0 40px rgba(34, 197, 94, 0.6)',
        '0 0 20px rgba(34, 197, 94, 0.3)',
      ],
    },
    transition: { duration: 2, repeat: Infinity },
  },

  // Stagger delay for list items
  getStaggerDelay: (index: number, baseDelay: number = 0.05) => ({
    delay: baseDelay + index * 0.05,
  }),

  // Orbit animation - circular motion
  orbitSmooth: {
    animate: {
      x: [0, 8, 0, -8, 0],
      y: [0, -12, -16, -12, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  },

  // Floating bobbing animation
  floatBob: {
    animate: { y: [0, -8, 0] },
    transition: { duration: 2.5, repeat: Infinity, ease: easeInOut },
  },

  // Gentle floating with slight horizontal sway
  floatSway: {
    animate: {
      y: [0, -10, 0],
      x: [0, 4, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },

  // Orbit with rotation
  orbitRotate: {
    animate: {
      x: [0, 12, 0, -12, 0],
      y: [0, -14, -18, -14, 0],
      rotate: [0, 5, 10, 5, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

// Scroll animation variants
export const scrollAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: appleCurve },
    },
  },
};

// Page and section transition variants
export const pageTransitions = {
  // Main page wrapper
  pageContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },

  // Section wrapper variants
  sectionContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  },

  // Individual section animation
  section: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: appleCurve,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.4,
      },
    },
  },

  // Fade and slide up
  fadeSlideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },

  // Fade and slide down
  fadeSlideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },

  // Fast fade transition (for quick transitions)
  fastFade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
};
