// src/components/ui/Card.tsx
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={`
        bg-paper rounded-card shadow-card p-6
        ${hover ? 'hover:shadow-card-hover transition-shadow duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
