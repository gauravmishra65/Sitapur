// src/components/sections/HowItWorks.tsx
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Register Your Interest',
    desc: 'Fill the quick form below with your child\'s grade and preferred subjects. Takes under 2 minutes. No payment needed.',
    highlight: 'Takes 2 mins',
    borderColor: '#1f6f6b',
    dotBg: 'bg-teal',
    dotText: 'text-cream',
    chipClass: 'bg-teal/10 border-teal/30 text-teal',
  },
  {
    num: '02',
    icon: '🎯',
    title: 'Attend a FREE Demo Class',
    desc: 'We schedule a free trial session at your preferred time. Meet the teacher, see the style, ask questions — zero commitment required.',
    highlight: '100% Free',
    borderColor: '#e3a93c',
    dotBg: 'bg-gold',
    dotText: 'text-navy',
    chipClass: 'bg-gold/15 border-gold/40 text-gold-dark',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Join Your Batch & Grow',
    desc: 'Enrol in the right batch for your child\'s grade and mode. Start seeing improvements within the first month — guaranteed.',
    highlight: 'Results in 30 days',
    borderColor: '#d9603f',
    dotBg: 'bg-coral',
    dotText: 'text-cream',
    chipClass: 'bg-coral/10 border-coral/30 text-coral',
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-paper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Getting Started is{' '}
            <span className="text-teal italic">Simple</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            From your first click to your child's first lesson — 3 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-9 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px z-0"
            style={{ background: 'linear-gradient(to right, #1f6f6b33, #e3a93c33, #d9603f33)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div
                className={`w-[72px] h-[72px] rounded-full ${step.dotBg} ${step.dotText} flex items-center justify-center shadow-card mb-5 text-3xl`}
                aria-hidden="true"
              >
                {step.icon}
              </div>

              {/* Step label */}
              <span className="text-xs font-bold text-ink/30 uppercase tracking-widest mb-2">
                Step {step.num}
              </span>

              <h3 className="text-lg font-bold text-navy mb-2.5">{step.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed mb-4 max-w-[240px]">
                {step.desc}
              </p>

              <span
                className={`inline-block text-xs font-bold px-3 py-1.5 rounded-pill border ${step.chipClass}`}
              >
                ✓ {step.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-gold text-navy font-bold text-base px-8 py-4 min-h-[48px] rounded-pill hover:bg-gold-dark hover:scale-[1.02] transition-all shadow-lg"
          >
            Start with a Free Demo →
          </button>
          <p className="mt-3 text-xs text-ink/40">
            No payment required · We call you back within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
