// src/components/sections/WhyUs.tsx
import { siteConfig } from '../../config/siteConfig';
import Card from '../ui/Card';

const reasons = [
  {
    icon: '🎯',
    title: 'Small Batches, Big Focus',
    body: `Never more than ${siteConfig.MAX_BATCH_PRIMARY}–${siteConfig.MAX_BATCH_SECONDARY} students per batch — every child is seen, heard, and corrected, not lost in a crowd.`,
  },
  {
    icon: '🏡',
    title: 'Home or Online — Your Choice',
    body: 'Tutors visit your home in Krishnapuri, Sitapur, or join from anywhere with our live online classes. Same quality, your convenience.',
  },
  {
    icon: '👩‍🏫',
    title: 'Taught by the Owners',
    body: `${siteConfig.OWNER_NAMES} personally teach and oversee every batch — not a franchise, not a call centre.`,
  },
  {
    icon: '📈',
    title: 'Progress You Can See',
    body: 'Regular tests, doubt-clearing sessions, and direct parent updates so you always know where your child stands.',
  },
  {
    icon: '📚',
    title: 'All Boards Covered',
    body: `${siteConfig.BOARDS} — curriculum-aligned teaching from Nursery through Class 12.`,
  },
  {
    icon: '💰',
    title: 'Honest, Affordable Fees',
    body: `Sibling discount of ${siteConfig.SIBLING_DISCOUNT_PERCENT}% and ${siteConfig.ADVANCE_DISCOUNT_PERCENT}% off on ${siteConfig.ADVANCE_MONTHS_REQUIRED}-month advance payments. No hidden charges.`,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Why Parents Choose <span className="text-coral italic">BrightNest Tuition</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            We keep batches small on purpose — so attention stays big.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Card key={r.title} delay={i * 0.08}>
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-2">{r.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{r.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
