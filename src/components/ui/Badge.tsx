// src/components/ui/Badge.tsx
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'teal' | 'coral' | 'navy';
  className?: string;
}

const variants: Record<string, string> = {
  gold:  'bg-gold/15 text-gold-dark border-gold/30',
  teal:  'bg-teal/15 text-teal-dark border-teal/30',
  coral: 'bg-coral/15 text-coral-dark border-coral/30',
  navy:  'bg-navy/10 text-navy border-navy/20',
};

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider
        px-3 py-1.5 rounded-pill border ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}
