// src/components/sections/Testimonials.tsx
import { motion, useReducedMotion } from 'framer-motion';
import Badge from '../ui/Badge';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    parentName: 'Rekha Sharma',
    childGrade: 'Class 8',
    location: 'Subhash Nagar, Meerut',
    quote:
      "My son used to dread Maths. After 3 months of home tuition with Sanjeev sir, he's actually asking for extra practice sheets. The small batch really makes a difference.",
    stars: 5,
    mode: 'home',
  },
  {
    parentName: 'Anil Kumar',
    childGrade: 'Class 10',
    location: 'Shastri Nagar, Meerut',
    quote:
      "Deepika ma'am explains Science concepts so clearly. We chose online since we live a bit far, and the WhatsApp doubt support has been a lifesaver before exams.",
    stars: 5,
    mode: 'online',
  },
  {
    parentName: 'Pooja Singh',
    childGrade: 'Class 5',
    location: 'Ganga Nagar, Meerut',
    quote:
      "What I appreciate most is how honestly they update us on progress — no sugarcoating, just real feedback every month. Fees are very fair compared to coaching centres nearby.",
    stars: 5,
    mode: 'home',
  },
];

const avatarColors = [
  { bg: '#1f6f6b', text: '#fbf4e6' },
  { bg: '#d9603f', text: '#fbf4e6' },
  { bg: '#e3a93c', text: '#0e2a47' },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What <span className="text-coral italic">Parents</span> Say
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Real feedback from families across Meerut.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const avatar = avatarColors[i % avatarColors.length];
            return (
              <motion.div
                key={t.parentName}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-paper rounded-card shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6 flex flex-col overflow-hidden"
              >
                {/* Large background quote mark */}
                <span
                  className="absolute top-3 right-5 text-7xl font-display leading-none text-navy/5 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Top row: stars + mode badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="text-gold text-base tracking-tight"
                    aria-label={`${t.stars} out of 5 stars`}
                  >
                    {'★'.repeat(t.stars)}
                    <span className="sr-only">{t.stars} stars</span>
                  </div>
                  <Badge variant={t.mode === 'online' ? 'teal' : 'coral'}>
                    {t.mode === 'online' ? '🌐 Online' : '🏠 Home'}
                  </Badge>
                </div>

                {/* Quote */}
                <p className="text-sm text-ink/70 leading-relaxed mb-5 flex-1">
                  "{t.quote}"
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 border-t border-navy/8">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: avatar.bg, color: avatar.text }}
                    aria-hidden="true"
                  >
                    {getInitials(t.parentName)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-navy truncate">{t.parentName}</div>
                    <div className="text-xs text-ink/50 truncate">
                      Parent · {t.childGrade}
                      {t.location ? ` · ${t.location}` : ''}
                    </div>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-pill flex-shrink-0">
                    ✓ Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
