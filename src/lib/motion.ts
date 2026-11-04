export const TACTILE_EASE = [0.16, 1, 0.3, 1] as const;

export const TACTILE_TRANSITION = {
  duration: 0.25,
  ease: TACTILE_EASE,
};

export const VIEWPORT_ONCE = {
  once: true,
  margin: "-40px",
};

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TACTILE_TRANSITION,
  },
};
