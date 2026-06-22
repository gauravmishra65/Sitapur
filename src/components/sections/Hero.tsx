// src/components/sections/Hero.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

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
            <motion.div {...fadeUp(0)}>
              <Badge variant="teal">{siteConfig.GRADES_RANGE}</Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight"
            >
              {siteConfig.TAGLINE}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 text-lg font-devanagari text-teal-dark"
            >
              {siteConfig.HINDI_TAGLINE}
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 text-base sm:text-lg text-ink/70 max-w-xl leading-relaxed"
            >
              Home & online tuition in Meerut for {siteConfig.GRADES_RANGE.toLowerCase()}.
              Batches capped at {siteConfig.MAX_BATCH_PRIMARY}–{siteConfig.MAX_BATCH_SECONDARY}{' '}
              students so every child gets real, personal attention from{' '}
              {siteConfig.OWNER_NAMES}.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo('#register')}>
                Register Interest →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#fees')}
              >
                See Fees
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60 font-semibold">
              <span>✓ {siteConfig.BOARDS}</span>
              <span>✓ Max {siteConfig.MAX_BATCH_PRIMARY} per batch (foundation)</span>
              <span>✓ Home &amp; Online modes</span>
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
                viewBox="0 0 400 360"
                role="img"
                aria-label="Illustration of a teacher with a small group of students studying together"
                className="w-full max-w-md"
              >
                {/* Background blob */}
                <ellipse cx="200" cy="190" rx="180" ry="150" fill="#e3a93c" opacity="0.12" />

                {/* Desk */}
                <rect x="70" y="250" width="260" height="14" rx="6" fill="#0e2a47" opacity="0.15" />

                {/* Book stack */}
                <rect x="100" y="210" width="80" height="14" rx="3" fill="#1f6f6b" />
                <rect x="108" y="196" width="64" height="14" rx="3" fill="#d9603f" />
                <rect x="116" y="182" width="48" height="14" rx="3" fill="#e3a93c" />

                {/* Student 1 */}
                <circle cx="260" cy="160" r="26" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="3" />
                <path d="M234 230 q26 -34 52 0 v20 h-52 Z" fill="#1f6f6b" />

                {/* Student 2 */}
                <circle cx="320" cy="190" r="22" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="3" />
                <path d="M298 248 q22 -28 44 0 v16 h-44 Z" fill="#d9603f" />

                {/* Teacher */}
                <circle cx="190" cy="130" r="30" fill="#fbf4e6" stroke="#0e2a47" strokeWidth="3" />
                <path d="M158 210 q32 -40 64 0 v30 h-64 Z" fill="#0e2a47" />

                {/* Gold spark */}
                <path d="M340 90 L345 102 L357 105 L345 108 L340 120 L335 108 L323 105 L335 102 Z" fill="#e3a93c" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
