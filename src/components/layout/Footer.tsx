// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { siteConfig } from '../../config/siteConfig';

export default function Footer() {
  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-deep text-cream/80 pt-14 pb-24 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="sm" variant="dark" showWordmark showTagline />
            <p className="mt-3 text-sm text-cream/60 leading-relaxed">
              Personalized home & online tuition in Sitapur.<br />
              Small batches. Real attention. Better results.
            </p>
            <p className="mt-2 text-sm font-devanagari text-gold/80">
              {siteConfig.HINDI_TAGLINE}
            </p>

            {/* Cat mascot */}
            <div className="mt-5 flex items-center gap-2">
              <img
                src="/logo-cat.png"
                alt="BrightNest Tuition friendly cat mascot"
                className="w-10 h-10 object-contain opacity-70"
              />
              <span className="text-xs text-cream/40 italic">Our Mascot 🐱</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <Link to="/login"    className="text-cream/60 hover:text-gold transition-colors block">Student Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-cream/60 hover:text-gold transition-colors block">Student Register</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-bold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>🏠</span>
                <span className="text-cream/60">
                  {siteConfig.ADDRESS_LINE1},<br />{siteConfig.ADDRESS_LINE2}
                </span>
              </li>
              <li>
                <a href={`tel:${siteConfig.PHONE}`} className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
                  📞 {siteConfig.PHONE}
                </a>
              </li>
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
                  💬 WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.EMAIL}`}
                  className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
                  ✉️ {siteConfig.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/60">
                🕐 {siteConfig.TIMINGS}
              </li>
            </ul>
          </div>

          {/* Boards & Social */}
          <div>
            <h3 className="text-cream font-bold text-sm uppercase tracking-widest mb-4">
              Boards We Cover
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['CBSE', 'ICSE', 'UP Board'].map(b => (
                <span key={b} className="bg-teal/20 text-teal-light text-xs font-bold px-3 py-1 rounded-pill border border-teal/30">
                  {b} ✓
                </span>
              ))}
            </div>

            <h3 className="text-cream font-bold text-sm uppercase tracking-widest mb-3">
              Student Portal
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/login"
                className="text-center text-xs font-bold bg-gold/20 text-gold border border-gold/30 px-3 py-2 rounded-button hover:bg-gold/30 transition">
                Student Login
              </Link>
              <Link to="/register"
                className="text-center text-xs font-bold bg-cream/10 text-cream/80 border border-cream/20 px-3 py-2 rounded-button hover:bg-cream/20 transition">
                Create Account
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} BrightNest Tuition · {siteConfig.OWNER_NAMES}</p>
          <p className="text-center">Made with ❤️ for students of Krishnapuri, Sitapur</p>
          <p>
            <a href={`mailto:${siteConfig.EMAIL}`} className="hover:text-gold transition-colors">
              {siteConfig.EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
