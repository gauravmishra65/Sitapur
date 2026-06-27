// src/components/sections/FAQ.tsx
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? null : i));

  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;

  return (
    <section id="faq" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Questions{' '}
            <span className="text-coral italic">Parents Ask</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Everything you need to know before enrolling.
          </p>
        </div>

        <div className="space-y-3">
          {siteConfig.FAQ.map((item, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden transition-shadow duration-200 ${
                openIdx === i
                  ? 'bg-paper shadow-card-hover'
                  : 'bg-paper shadow-card hover:shadow-card-hover'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left min-h-[60px] gap-4"
                aria-expanded={openIdx === i}
              >
                <span className="font-semibold text-navy text-base leading-snug">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-bold text-xl leading-none"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="answer"
                    initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-sm text-ink/70 leading-relaxed border-t border-navy/8">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-ink/50">
          Still have a question?{' '}
          <a
            href={`tel:${siteConfig.PHONE}`}
            className="text-teal font-semibold hover:text-teal-dark underline underline-offset-2 transition-colors"
          >
            Call us directly
          </a>{' '}
          or{' '}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal font-semibold hover:text-teal-dark underline underline-offset-2 transition-colors"
          >
            WhatsApp us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
