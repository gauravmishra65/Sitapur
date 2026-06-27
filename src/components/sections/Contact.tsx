// src/components/sections/Contact.tsx
import { siteConfig } from '../../config/siteConfig';

export default function Contact() {
  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Get in <span className="text-teal italic">Touch</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            Questions before registering? Reach us directly — we reply fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Details */}
          <div className="bg-cream rounded-card shadow-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏠</span>
              <div>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Address</h3>
                <p className="text-ink/70 text-sm">
                  {siteConfig.ADDRESS_LINE1}<br />
                  {siteConfig.ADDRESS_LINE2}
                </p>
                <a
                  href={siteConfig.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral text-sm font-semibold hover:underline mt-1 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Phone</h3>
                <a href={`tel:${siteConfig.PHONE}`} className="text-ink/70 text-sm hover:text-coral transition-colors">
                  {siteConfig.PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">WhatsApp</h3>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/70 text-sm hover:text-coral transition-colors"
                >
                  Chat with us instantly
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Email</h3>
                <a href={`mailto:${siteConfig.EMAIL}`} className="text-ink/70 text-sm hover:text-coral transition-colors">
                  {siteConfig.EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-1">Timings</h3>
                <p className="text-ink/70 text-sm">{siteConfig.TIMINGS}</p>
                <p className="text-ink/50 text-xs mt-0.5">Online: {siteConfig.TIMINGS_ONLINE}</p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${siteConfig.PHONE}`}
              className="flex items-center justify-center gap-2 bg-navy text-cream font-bold text-lg py-5 min-h-[56px] rounded-card shadow-card hover:bg-navy-deep transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal text-cream font-bold text-lg py-5 min-h-[56px] rounded-card shadow-card hover:bg-teal-dark transition-colors"
            >
              💬 Message on WhatsApp
            </a>
            <button
              onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 bg-gold text-navy font-bold text-lg py-5 min-h-[56px] rounded-card shadow-card hover:bg-gold-dark transition-colors"
            >
              📝 Register Interest Online
            </button>

            <div className="bg-cream rounded-card p-5 mt-2 text-center">
              <p className="text-sm text-ink/60">
                Prefer a quick visit? Drop by during class hours — we're always happy to meet
                new families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
