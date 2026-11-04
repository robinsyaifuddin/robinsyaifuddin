import { Variants, Transition } from "framer-motion";

/**
 * High-performance cubic-bezier curve for tactile, snappy, and elegant motion (Linear/Stripe style)
 * Uses GPU-accelerated properties only (opacity & transform) with zero layout thrashing.
 */
export const TACTILE_EASE = [0.16, 1, 0.3, 1] as const;

export const TACTILE_TRANSITION = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const QUICK_TRANSITION = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Masked / subtle fade-up for section intros & headers
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TACTILE_TRANSITION,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: QUICK_TRANSITION,
  },
};

export const scaleInSubtle: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: TACTILE_TRANSITION,
  },
};

// Stagger orchestrator for card grids and sequential items
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Viewport configuration for natural scroll entrance without reflow delays
export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -40px 0px",
} as const;
