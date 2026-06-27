// src/components/sections/Fees.tsx
import { useState } from 'react';
import { siteConfig, type TuitionMode } from '../../config/siteConfig';

type FeeTab = Extract<TuitionMode, 'home' | 'online'>;

// Which tier gets the "Most Popular" label
const POPULAR_KEY = 'secondary';

export default function Fees() {
  const [tab, setTab] = useState<FeeTab>('home');
  const rows = Object.entries(siteConfig.FEES[tab]) as [string, { label: string; price: number }][];

  const scrollToRegister = () =>
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="fees" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Simple,{' '}
            <span className="text-gold-dark italic">Honest</span> Fees
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Per month · All subjects included · No hidden charges
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-paper rounded-pill p-1.5 shadow-card">
            {(['home', 'online'] as FeeTab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 min-h-[44px] rounded-pill text-sm font-bold capitalize transition-all ${
                  tab === t
                    ? 'bg-navy text-cream shadow-md'
                    : 'text-navy/60 hover:text-navy'
                }`}
                aria-pressed={tab === t}
              >
                {t === 'home' ? '🏠' : '🌐'} {t} Tuition
              </button>
            ))}
          </div>
        </div>

        {/* Fee table */}
        <div className="bg-paper rounded-card shadow-card overflow-hidden">
          {rows.map(([key, row], i) => {
            const isPopular = key === POPULAR_KEY;
            return (
              <div
                key={row.label}
                className={`relative flex items-center justify-between px-6 py-5 transition-colors ${
                  i !== rows.length - 1 ? 'border-b border-navy/10' : ''
                } ${isPopular ? 'bg-navy/[0.03]' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-navy">{row.label}</span>
                  {isPopular && (
                    <span className="text-xs font-bold bg-coral text-cream px-2.5 py-0.5 rounded-pill">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-coral">
                    ₹{row.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-medium text-ink/50">/month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coaching centre comparison note */}
        <div className="mt-4 flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-card px-4 py-3 text-sm text-teal-dark">
          <span className="text-base" aria-hidden="true">💡</span>
          <span>
            <strong>Compare:</strong> coaching centres in Meerut charge ₹4,000–₹8,000/month with
            30+ students per class. We cap at {siteConfig.MAX_BATCH_SECONDARY} — for a fraction of the cost.
          </span>
        </div>

        {/* Discounts */}
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="bg-teal/10 border border-teal/20 rounded-card p-4 text-sm text-teal-dark font-semibold">
            🎉 {siteConfig.SIBLING_DISCOUNT_PERCENT}% off for siblings enrolled together
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-card p-4 text-sm text-gold-dark font-semibold">
            💰 {siteConfig.ADVANCE_DISCOUNT_PERCENT}% off on {siteConfig.ADVANCE_MONTHS_REQUIRED}-month advance payment
          </div>
        </div>

        <div className="text-center mt-8 space-y-3">
          <button
            onClick={scrollToRegister}
            className="block w-full sm:inline-block sm:w-auto text-sm font-bold bg-gold text-navy px-8 py-3.5 min-h-[48px] rounded-pill hover:bg-gold-dark transition-colors shadow-md"
          >
            Register Interest — Start with FREE Demo →
          </button>
          <p className="text-xs text-ink/40">No payment at this stage · We'll call you back within 24 hrs</p>
        </div>
      </div>
    </section>
  );
}
