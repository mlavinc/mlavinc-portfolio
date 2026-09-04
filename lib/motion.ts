import type { Transition, Variants } from "framer-motion";

// Strong ease-out — starts fast, immediate feedback, decelerates into rest.
// Preferred over the built-in `ease` which lacks punch.
const STRONG_EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const fadeUpTransition: Transition = {
  duration: 0.4,
  ease: STRONG_EASE_OUT,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const viewportReveal = {
  once: true,
  amount: 0.15,
} as const;
