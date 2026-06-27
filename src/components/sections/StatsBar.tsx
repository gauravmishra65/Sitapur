// src/components/sections/StatsBar.tsx
import { motion, useReducedMotion } from 'framer-motion';
import CountUp from '../ui/CountUp';
import { siteConfig } from '../../config/siteConfig';

export default function StatsBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy py-10 lg:py-14" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-2" role="img" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gold font-display leading-none">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-bold text-cream/50 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
