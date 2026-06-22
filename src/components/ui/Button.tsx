// src/components/ui/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants: Record<string, string> = {
  primary:   'bg-gold text-navy hover:bg-gold-dark shadow-md',
  secondary: 'bg-teal text-cream hover:bg-teal-dark shadow-md',
  outline:   'bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-cream',
  ghost:     'bg-transparent text-navy hover:text-coral',
};

const sizes: Record<string, string> = {
  sm: 'text-sm px-4 py-2 min-h-[40px]',
  md: 'text-base px-6 py-3 min-h-[48px]',
  lg: 'text-lg px-8 py-4 min-h-[56px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-pill font-bold
        transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
