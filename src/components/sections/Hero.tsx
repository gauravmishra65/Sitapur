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
      className="relative overflow-hidden bg-cream bg-dot-grid pt-24 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column — always left on desktop, top on mobile */}
          <div className="lg:order-1">
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
              Home &amp; online tuition in Sitapur for{' '}
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

          {/* Illustration column — always right on desktop */}
          <motion.div
            {...fadeUp(0.25)}
            className="relative flex items-center justify-center lg:order-2"
          >
            <div className="relative w-full max-w-lg">
              {/* Cream blob background to match page */}
              <div className="absolute inset-0 -m-4 rounded-[40%_60%_55%_45%/45%_55%_45%_55%] bg-cream" />
              <img
                src="/tanrica-geography-10113450_1920.png"
                alt="Teacher explaining to attentive students in a small classroom"
                className="relative w-full h-auto"
                style={{ mixBlendMode: 'multiply' }}
                width={520}
                height={520}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
