// src/components/sections/Subjects.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

// Accent colors cycle through brand palette for visual variety
const accentColors = ['#1f6f6b', '#d9603f', '#e3a93c', '#0e2a47'];

export default function Subjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="subjects" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Every Subject,{' '}
            <span className="text-teal italic">One Roof</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            {siteConfig.GRADES_RANGE} · {siteConfig.BOARDS}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {siteConfig.SUBJECTS.map((s, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={s.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-paper rounded-card shadow-card p-5 text-center hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{ borderTop: `3px solid ${accent}` }}
              >
                <div
                  className="text-3xl mb-3 font-devanagari"
                  role="img"
                  aria-label={s.label}
                >
                  {s.emoji}
                </div>
                <div className="text-sm font-bold text-navy group-hover:text-teal transition-colors">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-sm text-ink/50">
          Don't see your subject?{' '}
          <a
            href={`tel:${siteConfig.PHONE}`}
            className="text-teal font-semibold hover:text-teal-dark underline underline-offset-2 transition-colors"
          >
            Call us — we often accommodate
          </a>
        </p>
      </div>
    </section>
  );
}
