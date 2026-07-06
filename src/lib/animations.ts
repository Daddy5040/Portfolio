import type { Variants } from 'framer-motion';

export const premiumEase = [0.22, 1, 0.36, 1] as const;
export const softSpring = { type: 'spring', stiffness: 260, damping: 24, mass: 0.8 } as const;

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -18, filter: 'blur(8px)' },
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const imageRevealVariants: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.04 },
  visible: { clipPath: 'inset(0 0 0% 0)', scale: 1 },
};
