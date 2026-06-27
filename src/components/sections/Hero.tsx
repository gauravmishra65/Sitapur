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
                viewBox="0 0 420 400"
                role="img"
                aria-label="Education illustration — open book with floating subject symbols"
                className="w-full max-w-md"
              >
                {/* ── Soft background glows ── */}
                <ellipse cx="210" cy="210" rx="190" ry="170" fill="#e3a93c" opacity="0.08" />
                <ellipse cx="175" cy="225" rx="135" ry="110" fill="#1f6f6b" opacity="0.07" />

                {/* ── Book shadow ── */}
                <ellipse cx="210" cy="318" rx="115" ry="10" fill="#0e2a47" opacity="0.08" />

                {/* ── Open book — left page ── */}
                <path
                  d="M 80 305 L 88 148 Q 89 135 104 132 L 207 124 L 207 305 Z"
                  fill="#fffdf7"
                />
                <path
                  d="M 80 305 L 88 148 Q 89 135 104 132 L 207 124 L 207 305 Z"
                  fill="none" stroke="#0e2a47" strokeWidth="1.5" strokeOpacity="0.10"
                />
                {/* Left page curl at bottom */}
                <path d="M 80 305 Q 145 295 207 305" fill="none" stroke="#0e2a47" strokeWidth="1" strokeOpacity="0.07" />

                {/* ── Open book — right page ── */}
                <path
                  d="M 213 124 L 316 132 Q 331 135 332 148 L 334 305 L 213 305 Z"
                  fill="#fffdf7"
                />
                <path
                  d="M 213 124 L 316 132 Q 331 135 332 148 L 334 305 L 213 305 Z"
                  fill="none" stroke="#0e2a47" strokeWidth="1.5" strokeOpacity="0.10"
                />
                {/* Right page curl */}
                <path d="M 213 305 Q 274 295 334 305" fill="none" stroke="#0e2a47" strokeWidth="1" strokeOpacity="0.07" />

                {/* ── Book spine ── */}
                <rect x="205" y="124" width="10" height="181" rx="3" fill="#0e2a47" opacity="0.55" />

                {/* ── Left page content lines ── */}
                {/* Teal heading bar */}
                <rect x="105" y="160" width="82" height="5" rx="2.5" fill="#1f6f6b" opacity="0.35" />
                <rect x="105" y="174" width="88" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                <rect x="105" y="183" width="74" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                <rect x="105" y="192" width="82" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                {/* Formula-like block */}
                <rect x="115" y="208" width="42" height="18" rx="4" fill="#1f6f6b" opacity="0.12" />
                <rect x="164" y="212" width="22" height="10" rx="3" fill="#e3a93c" opacity="0.30" />
                {/* More lines */}
                <rect x="105" y="236" width="68" height="3" rx="1.5" fill="#0e2a47" opacity="0.10" />
                <rect x="105" y="245" width="80" height="3" rx="1.5" fill="#0e2a47" opacity="0.10" />
                <rect x="105" y="254" width="60" height="3" rx="1.5" fill="#0e2a47" opacity="0.10" />
                {/* Coral accent bar */}
                <rect x="105" y="270" width="78" height="4" rx="2" fill="#d9603f" opacity="0.20" />
                <rect x="105" y="282" width="65" height="3" rx="1.5" fill="#0e2a47" opacity="0.09" />

                {/* ── Right page content ── */}
                {/* Gold heading */}
                <rect x="222" y="160" width="90" height="5" rx="2.5" fill="#e3a93c" opacity="0.40" />
                <rect x="222" y="174" width="76" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                <rect x="222" y="183" width="88" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                <rect x="222" y="192" width="70" height="3" rx="1.5" fill="#0e2a47" opacity="0.11" />
                {/* Graph bars (visual element) */}
                <rect x="224" y="230" width="14" height="28" rx="3" fill="#1f6f6b" opacity="0.30" />
                <rect x="244" y="222" width="14" height="36" rx="3" fill="#d9603f" opacity="0.28" />
                <rect x="264" y="216" width="14" height="42" rx="3" fill="#e3a93c" opacity="0.35" />
                <rect x="284" y="238" width="14" height="20" rx="3" fill="#0e2a47" opacity="0.18" />
                {/* x-axis */}
                <line x1="222" y1="260" x2="302" y2="260" stroke="#0e2a47" strokeWidth="1.5" strokeOpacity="0.15" />
                {/* More lines */}
                <rect x="222" y="272" width="82" height="3" rx="1.5" fill="#0e2a47" opacity="0.10" />
                <rect x="222" y="281" width="68" height="3" rx="1.5" fill="#0e2a47" opacity="0.10" />
                <rect x="222" y="290" width="74" height="3" rx="1.5" fill="#0e2a47" opacity="0.09" />

                {/* ── Floating subject bubbles ── */}

                {/* Math — π (top right, navy) */}
                <circle cx="354" cy="100" r="34" fill="#0e2a47" />
                <circle cx="354" cy="100" r="31" fill="#0e2a47" stroke="#e3a93c" strokeWidth="2" strokeOpacity="0.4" />
                <text x="354" y="112" textAnchor="middle" fill="#e3a93c" fontSize="30"
                  fontFamily="Georgia, 'Times New Roman', serif" fontWeight="bold">π</text>

                {/* Science — atom-ish (right, teal) */}
                <circle cx="368" cy="210" r="28" fill="#1f6f6b" />
                <circle cx="368" cy="210" r="7" fill="#fffdf7" opacity="0.9" />
                <ellipse cx="368" cy="210" rx="22" ry="9" fill="none" stroke="#fffdf7" strokeWidth="2" strokeOpacity="0.65" />
                <ellipse cx="368" cy="210" rx="22" ry="9" fill="none" stroke="#fffdf7" strokeWidth="2" strokeOpacity="0.65"
                  transform="rotate(60 368 210)" />
                <ellipse cx="368" cy="210" rx="22" ry="9" fill="none" stroke="#fffdf7" strokeWidth="2" strokeOpacity="0.65"
                  transform="rotate(-60 368 210)" />

                {/* English / Hindi — ABC (top left, coral) */}
                <circle cx="60" cy="112" r="30" fill="#d9603f" />
                <text x="60" y="120" textAnchor="middle" fill="white" fontSize="15"
                  fontFamily="Manrope, 'Segoe UI', sans-serif" fontWeight="800" letterSpacing="1">ABC</text>

                {/* Commerce — ₹ (left, gold) */}
                <circle cx="48" cy="222" r="26" fill="#e3a93c" />
                <text x="48" y="231" textAnchor="middle" fill="#0e2a47" fontSize="22"
                  fontFamily="Manrope, 'Segoe UI', sans-serif" fontWeight="800">₹</text>

                {/* ── Graduation cap ── */}
                {/* Board (flat top) */}
                <rect x="158" y="76" width="100" height="13" rx="3" fill="#0e2a47" />
                {/* Cap triangle */}
                <polygon points="208,56 170,76 246,76" fill="#0e2a47" />
                {/* Cap button */}
                <circle cx="208" cy="56" r="6" fill="#e3a93c" />
                {/* Tassel string */}
                <line x1="246" y1="76" x2="258" y2="96" stroke="#e3a93c" strokeWidth="2.5" strokeLinecap="round" />
                {/* Tassel end */}
                <circle cx="258" cy="99" r="5" fill="#e3a93c" />
                <line x1="253" y1="104" x2="248" y2="116" stroke="#e3a93c" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="258" y1="104" x2="258" y2="116" stroke="#e3a93c" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="263" y1="104" x2="268" y2="116" stroke="#e3a93c" strokeWidth="1.5" strokeLinecap="round" />

                {/* ── Gold star sparkles ── */}
                <path d="M 390 158 L 393 168 L 403 171 L 393 174 L 390 184 L 387 174 L 377 171 L 387 168 Z"
                  fill="#e3a93c" opacity="0.85" />
                <path d="M 35 165 L 37 172 L 44 174 L 37 176 L 35 183 L 33 176 L 26 174 L 33 172 Z"
                  fill="#1f6f6b" opacity="0.70" />
                <path d="M 308 52 L 310 58 L 316 60 L 310 62 L 308 68 L 306 62 L 300 60 L 306 58 Z"
                  fill="#d9603f" opacity="0.75" />

                {/* ── Decorative dots ── */}
                <circle cx="82" cy="60" r="5" fill="#e3a93c" opacity="0.45" />
                <circle cx="358" cy="290" r="6" fill="#1f6f6b" opacity="0.35" />
                <circle cx="66" cy="310" r="4" fill="#d9603f" opacity="0.35" />
                <circle cx="390" cy="310" r="5" fill="#e3a93c" opacity="0.30" />
                <circle cx="330" cy="55" r="4" fill="#0e2a47" opacity="0.18" />
                <circle cx="95" cy="338" r="3.5" fill="#1f6f6b" opacity="0.28" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
