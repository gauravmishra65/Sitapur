// src/components/sections/Fees.tsx
import { useState } from 'react';
import { siteConfig, type TuitionMode } from '../../config/siteConfig';

type FeeTab = Extract<TuitionMode, 'home' | 'online'>;

export default function Fees() {
  const [tab, setTab] = useState<FeeTab>('home');
  const rows = Object.values(siteConfig.FEES[tab]);

  const scrollToRegister = () =>
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="fees" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Simple, <span className="text-gold-dark italic">Honest</span> Fees
          </h2>
          <p className="mt-3 text-ink/60 text-lg">Per subject, per month. No surprises.</p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-paper rounded-pill p-1.5 shadow-card">
            {(['home', 'online'] as FeeTab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 min-h-[44px] rounded-pill text-sm font-bold capitalize transition-colors ${
                  tab === t ? 'bg-navy text-cream' : 'text-navy/60 hover:text-navy'
                }`}
                aria-pressed={tab === t}
              >
                {t} Tuition
              </button>
            ))}
          </div>
        </div>

        {/* Fee table */}
        <div className="bg-paper rounded-card shadow-card overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-6 py-5 ${
                i !== rows.length - 1 ? 'border-b border-navy/10' : ''
              }`}
            >
              <span className="font-semibold text-navy">{row.label}</span>
              <span className="text-lg font-bold text-coral">
                ₹{row.price.toLocaleString('en-IN')}
                <span className="text-xs font-medium text-ink/50">/month</span>
              </span>
            </div>
          ))}
        </div>

        {/* Discounts */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="bg-teal/10 border border-teal/20 rounded-card p-4 text-sm text-teal-dark font-semibold">
            🎉 {siteConfig.SIBLING_DISCOUNT_PERCENT}% off for siblings enrolled together
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-card p-4 text-sm text-gold-dark font-semibold">
            💰 {siteConfig.ADVANCE_DISCOUNT_PERCENT}% off on {siteConfig.ADVANCE_MONTHS_REQUIRED}-month advance payment
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={scrollToRegister}
            className="text-sm font-bold bg-gold text-navy px-6 py-3 min-h-[44px] rounded-pill hover:bg-gold-dark transition-colors shadow-md"
          >
            Register Interest →
          </button>
        </div>
      </div>
    </section>
  );
}
