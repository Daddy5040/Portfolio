import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { pageVariants, premiumEase } from '../lib/animations';

export function PageWrapper({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}
      variants={reduceMotion ? undefined : pageVariants}
      initial={reduceMotion ? { opacity: 1 } : 'initial'}
      animate={reduceMotion ? { opacity: 1 } : 'animate'}
      exit={reduceMotion ? { opacity: 0 } : 'exit'}
      transition={{ duration: 0.72, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}
