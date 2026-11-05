export const TACTILE_EASE = [0.16, 1, 0.3, 1] as const;

export const TACTILE_TRANSITION = {
  duration: 0.65,
  ease: TACTILE_EASE,
};

export const VIEWPORT_ONCE = {
  once: true,
  margin: "0px 0px -40px 0px",
  amount: 0.15,
};

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TACTILE_TRANSITION,
  },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

