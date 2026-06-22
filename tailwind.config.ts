import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0e2a47', deep: '#091b30', light: '#1a3d66' },
        gold:  { DEFAULT: '#e3a93c', light: '#f3c873', dark: '#c4912a' },
        cream: { DEFAULT: '#fbf4e6', dark: '#f0e8d0' },
        paper: { DEFAULT: '#fffdf7' },
        coral: { DEFAULT: '#d9603f', light: '#e8795e', dark: '#b84f30' },
        teal:  { DEFAULT: '#1f6f6b', light: '#2a9490', dark: '#165250' },
        ink:   { DEFAULT: '#1c2a38' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      borderRadius: {
        card:   '16px',
        button: '12px',
        pill:   '9999px',
      },
      boxShadow: {
        card:   '0 4px 24px rgba(14,42,71,0.08)',
        'card-hover': '0 12px 32px rgba(14,42,71,0.16)',
        nav:    '0 2px 20px rgba(14,42,71,0.12)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
