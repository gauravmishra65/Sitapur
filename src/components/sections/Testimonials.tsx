// src/components/sections/Testimonials.tsx
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    parentName: 'Rekha Sharma',
    childGrade: 'Class 8',
    quote:
      "My son used to dread Maths. After 3 months of home tuition with Sanjeev sir, he's actually asking for extra practice sheets. The small batch really makes a difference.",
    stars: 5,
    mode: 'home',
  },
  {
    parentName: 'Anil Kumar',
    childGrade: 'Class 10',
    quote:
      'Deepika ma\'am explains Science concepts so clearly. We chose online classes since we live a bit far, and the WhatsApp doubt support has been a lifesaver before exams.',
    stars: 5,
    mode: 'online',
  },
  {
    parentName: 'Pooja Singh',
    childGrade: 'Class 5',
    quote:
      'What I appreciate most is how honestly they update us on progress — no sugarcoating, just real feedback every month. Fees are fair too compared to coaching centres nearby.',
    stars: 5,
    mode: 'home',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What <span className="text-coral italic">Parents</span> Say
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Real feedback from families in Subhash Nagar and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={t.parentName} delay={i * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-gold text-lg" aria-label={`${t.stars} out of 5 stars`}>
                  {'★'.repeat(t.stars)}
                  {'☆'.repeat(5 - t.stars)}
                </div>
                <Badge variant={t.mode === 'online' ? 'teal' : 'coral'}>
                  {t.mode === 'online' ? 'Online' : 'Home'}
                </Badge>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed mb-4">"{t.quote}"</p>
              <div className="text-sm font-bold text-navy">{t.parentName}</div>
              <div className="text-xs text-ink/50">Parent · {t.childGrade}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
