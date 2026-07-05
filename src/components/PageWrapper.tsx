import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function PageWrapper({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
