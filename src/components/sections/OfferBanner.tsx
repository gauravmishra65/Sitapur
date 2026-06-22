// src/components/sections/OfferBanner.tsx
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

export default function OfferBanner() {
  const reduceMotion = useReducedMotion();

  const scrollToRegister = () =>
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-12 lg:py-16 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gold font-bold uppercase tracking-widest text-sm mb-3">
            Limited Seats This Session
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6">
            Only {siteConfig.SEATS_REMAINING_EVENING} evening home-batch seats and{' '}
            {siteConfig.SEATS_REMAINING_ONLINE} online seats left
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            We keep batches small by design — once they fill, your child waits for the next
            session. Register your interest today to lock in a spot.
          </p>
          <button
            onClick={scrollToRegister}
            className="bg-gold text-navy font-bold text-base px-8 py-4 min-h-[48px] rounded-pill hover:bg-gold-light hover:scale-[1.02] transition-all shadow-lg"
          >
            Secure a Seat →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
