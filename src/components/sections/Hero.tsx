// src/components/sections/Hero.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const trustBadges = [
  { icon: '🏆', text: 'CBSE / ICSE / UP Board' },
  { icon: '👥', text: 'Max 6 per batch' },
  { icon: '🏠', text: 'Home & Online' },
  { icon: '🎁', text: 'Free demo class' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream bg-dot-grid pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 flex-wrap">
              <Badge variant="teal">{siteConfig.GRADES_RANGE}</Badge>
              <span className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 text-gold-dark text-xs font-bold px-3 py-1.5 rounded-pill">
                ✨ Established {siteConfig.ESTABLISHED}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight"
            >
              {siteConfig.TAGLINE}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 text-lg font-devanagari text-teal"
            >
              {siteConfig.HINDI_TAGLINE}
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 text-base sm:text-lg text-ink/70 max-w-xl leading-relaxed"
            >
              Home &amp; online tuition in Meerut for{' '}
              {siteConfig.GRADES_RANGE.toLowerCase()}. Batches capped at{' '}
              {siteConfig.MAX_BATCH_PRIMARY}–{siteConfig.MAX_BATCH_SECONDARY} students so
              every child gets real, personal attention from {siteConfig.OWNER_NAMES}.
            </motion.p>

            {/* Free demo offer chip */}
            <motion.div {...fadeUp(0.38)} className="mt-6">
              <span className="inline-flex items-center gap-2 bg-teal/10 border border-teal/25 text-teal text-sm font-semibold px-4 py-2.5 rounded-pill">
                🎁{' '}
                <span>
                  First demo class is{' '}
                  <strong className="font-bold">FREE</strong> — no commitment needed
                </span>
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.46)} className="mt-5 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo('#register')}>
                Book FREE Demo →
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('#fees')}>
                See Fee Structure
              </Button>
            </motion.div>

            {/* Trust badge row */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 flex flex-wrap items-center gap-2"
            >
              {trustBadges.map(badge => (
                <span
                  key={badge.text}
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink/60 bg-paper/70 px-3 py-1.5 rounded-pill border border-navy/10"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Illustration column */}
          <motion.div
            {...fadeUp(0.25)}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg
                viewBox="0 0 420 380"
                role="img"
                aria-label="Illustration of a teacher with a small group of students studying together"
                className="w-full max-w-md"
              >
                {/* Background blob */}
                <ellipse cx="210" cy="200" rx="190" ry="160" fill="#e3a93c" opacity="0.10" />
                <ellipse cx="180" cy="210" rx="140" ry="110" fill="#1f6f6b" opacity="0.06" />

                {/* Desk surface */}
                <rect x="60" y="264" width="300" height="16" rx="8" fill="#0e2a47" opacity="0.12" />

                {/* Book stack on desk */}
                <rect x="80" y="224" width="88" height="14" rx="4" fill="#1f6f6b" />
                <rect x="88" y="210" width="72" height="14" rx="4" fill="#d9603f" />
                <rect x="96" y="196" width="56" height="14" rx="4" fill="#e3a93c" />

                {/* Open notebook */}
                <rect x="195" y="230" width="80" height="56" rx="4" fill="#fffdf7" stroke="#0e2a47" strokeWidth="1.5" strokeOpacity="0.2" />
                <line x1="235" y1="230" x2="235" y2="286" stroke="#0e2a47" strokeWidth="1" strokeOpacity="0.15" />
                <line x1="205" y1="244" x2="230" y2="244" stroke="#1f6f6b" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="205" y1="254" x2="230" y2="254" stroke="#1f6f6b" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="205" y1="264" x2="225" y2="264" stroke="#1f6f6b" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="241" y1="244" x2="266" y2="244" stroke="#d9603f" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="241" y1="254" x2="266" y2="254" stroke="#d9603f" strokeWidth="1.5" strokeOpacity="0.4" />

                {/* Student 1 — left */}
                <circle cx="130" cy="165" r="28" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="2.5" />
                {/* hair */}
                <path d="M102 158 q28-36 56 0" fill="#0e2a47" opacity="0.7" />
                {/* smile */}
                <path d="M122 172 q8 8 16 0" fill="none" stroke="#0e2a47" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M102 228 q28-36 56 0 v22 h-56 Z" fill="#d9603f" opacity="0.9" />

                {/* Student 2 — right */}
                <circle cx="300" cy="185" r="24" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="2.5" />
                <path d="M276 178 q24-30 48 0" fill="#0e2a47" opacity="0.5" />
                <path d="M276 242 q24-30 48 0 v18 h-48 Z" fill="#1f6f6b" opacity="0.9" />

                {/* Teacher — center */}
                <circle cx="215" cy="128" r="34" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="3" />
                {/* teacher hair bun */}
                <path d="M181 120 q34-46 68 0" fill="#0e2a47" opacity="0.8" />
                <circle cx="215" cy="110" r="10" fill="#0e2a47" opacity="0.8" />
                {/* smile */}
                <path d="M205 136 q10 10 20 0" fill="none" stroke="#0e2a47" strokeWidth="2" strokeOpacity="0.5" />
                <path d="M179 212 q36-46 72 0 v34 h-72 Z" fill="#0e2a47" />

                {/* Pointer in hand */}
                <line x1="250" y1="200" x2="280" y2="160" stroke="#e3a93c" strokeWidth="3" strokeLinecap="round" />
                <circle cx="281" cy="158" r="3" fill="#e3a93c" />

                {/* Gold star sparkles */}
                <path d="M360 85 L364 98 L377 100 L364 103 L360 116 L356 103 L343 100 L356 98 Z" fill="#e3a93c" opacity="0.9" />
                <path d="M65 130 L67.5 138 L76 140 L67.5 142 L65 150 L62.5 142 L54 140 L62.5 138 Z" fill="#1f6f6b" opacity="0.7" />
                <circle cx="350" cy="160" r="4" fill="#d9603f" opacity="0.6" />
                <circle cx="80" cy="95" r="3" fill="#e3a93c" opacity="0.5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
