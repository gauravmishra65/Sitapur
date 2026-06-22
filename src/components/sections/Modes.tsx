// src/components/sections/Modes.tsx
import { siteConfig } from '../../config/siteConfig';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function Modes() {
  const scrollToRegister = () =>
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="modes" className="py-16 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Learn at <span className="text-coral italic">Home</span> or{' '}
            <span className="text-teal italic">Online</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Same teachers, same small batches — pick what works for your family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Card hover={false} className="border-2 border-coral/20">
            <Badge variant="coral">In-Person</Badge>
            <h3 className="text-2xl font-bold text-navy mt-4 mb-2">Home Tuition</h3>
            <p className="text-ink/65 text-sm leading-relaxed mb-4">
              Tutor visits your home in {siteConfig.ADDRESS_LINE2.split(',')[0]} for focused,
              face-to-face teaching with zero screen time.
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>✓ Max {siteConfig.MAX_BATCH_PRIMARY} students (foundation), {siteConfig.MAX_BATCH_SECONDARY} (secondary+)</li>
              <li>✓ Timings: {siteConfig.TIMINGS}</li>
              <li>✓ Direct face-to-face doubt clearing</li>
              <li>✓ Notebooks checked in person every session</li>
            </ul>
          </Card>

          <Card hover={false} className="border-2 border-teal/20">
            <Badge variant="teal">Live Online</Badge>
            <h3 className="text-2xl font-bold text-navy mt-4 mb-2">Online Tuition</h3>
            <p className="text-ink/65 text-sm leading-relaxed mb-4">
              Live, interactive classes from anywhere — ideal if you're outside Subhash Nagar
              or prefer flexible timing.
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>✓ {siteConfig.TIMINGS_ONLINE}</li>
              <li>✓ Recorded sessions for revision</li>
              <li>✓ Digital worksheets &amp; WhatsApp doubt support</li>
              <li>✓ Lower fees than home tuition</li>
            </ul>
          </Card>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={scrollToRegister}
            className="inline-flex items-center justify-center min-h-[44px] px-2 text-sm font-bold text-navy underline text-underline-gold hover:text-coral transition-colors"
          >
            Not sure which mode fits you? Register and tell us — we'll help you decide →
          </button>
        </div>
      </div>
    </section>
  );
}
