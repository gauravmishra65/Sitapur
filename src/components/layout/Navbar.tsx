// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { siteConfig } from '../../config/siteConfig';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (!isHome) { window.location.href = '/' + href; return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* ── Fixed header wrapper ────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* Announcement bar — desktop only */}
        <div className="hidden lg:flex items-center justify-between bg-navy text-cream/75 text-xs px-8 h-9">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.PHONE}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors font-semibold"
            >
              <span>📞</span> {siteConfig.PHONE}
            </a>
            <a
              href={`mailto:${siteConfig.EMAIL}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <span>✉️</span> {siteConfig.EMAIL}
            </a>
          </div>
          <button
            onClick={() => scrollTo('#register')}
            className="flex items-center gap-1.5 text-gold font-bold hover:text-gold-light transition-colors"
          >
            ✨ Free Demo Class Available — Book Now →
          </button>
        </div>

        {/* Main navbar */}
        <nav
          className={`bg-paper/97 backdrop-blur-md transition-all duration-300 ${
            scrolled ? 'shadow-nav border-b border-navy/8' : 'border-b border-navy/5'
          }`}
        >
          {/* Gold accent line at very top of nav */}
          <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[68px]">

              {/* Logo */}
              <Link to="/" aria-label="BrightNest Tuition home" className="flex-shrink-0">
                <Logo size="sm" showWordmark showTagline={false} />
              </Link>

              {/* Desktop nav links */}
              <div className="hidden lg:flex items-center gap-1">
                {siteConfig.NAV_LINKS.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-3 py-2 text-sm font-semibold text-navy/80 hover:text-coral transition-colors group rounded-button"
                  >
                    {link.label}
                    {/* Hover underline */}
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </button>
                ))}
              </div>

              {/* Desktop right actions */}
              <div className="hidden lg:flex items-center gap-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-sm font-semibold text-navy hover:text-coral transition-colors px-3 py-2"
                    >
                      My Portal
                    </Link>
                    <button
                      onClick={signOut}
                      className="text-sm font-semibold text-coral hover:text-coral-dark transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-sm font-semibold text-navy/80 hover:text-coral px-3 py-2 rounded-button border border-navy/20 hover:border-coral transition-colors"
                    >
                      Student Login
                    </Link>
                    <button
                      onClick={() => scrollTo('#register')}
                      className="text-sm font-bold bg-gold text-navy px-5 py-2.5 rounded-pill hover:bg-gold-dark transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
                    >
                      Book FREE Demo →
                    </button>
                  </>
                )}
              </div>

              {/* Mobile hamburger — animated ×/≡ */}
              <button
                className="lg:hidden min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-button text-navy"
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-200 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Mobile slide-in menu ─────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide panel from right */}
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-paper flex flex-col shadow-2xl lg:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-navy/10">
                <Logo size="sm" showWordmark showTagline={false} />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center text-2xl text-navy/60 hover:text-coral"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <nav className="flex flex-col gap-1">
                  {siteConfig.NAV_LINKS.map(link => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-left text-base font-semibold text-navy py-3 px-3 rounded-button hover:bg-gold/10 hover:text-coral transition-colors border-b border-navy/6 last:border-0"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Panel footer — CTAs */}
              <div className="px-5 py-5 border-t border-navy/10 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.PHONE}`}
                  className="flex items-center justify-center gap-2 bg-navy text-cream font-bold text-base py-3.5 min-h-[48px] rounded-button"
                >
                  📞 Call Now
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25d366] text-white font-bold text-base py-3.5 min-h-[48px] rounded-button"
                >
                  💬 WhatsApp
                </a>
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="text-center text-sm font-semibold text-navy py-2.5 border border-navy/20 rounded-button hover:bg-navy/5"
                    >
                      My Student Portal
                    </Link>
                    <button
                      onClick={() => { signOut(); setMenuOpen(false); }}
                      className="text-center text-coral font-semibold text-sm py-2"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => scrollTo('#register')}
                      className="flex items-center justify-center bg-gold text-navy font-bold text-base py-3.5 min-h-[48px] rounded-pill shadow-md"
                    >
                      Book FREE Demo →
                    </button>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="text-center text-sm text-navy/60 hover:text-navy font-semibold py-2"
                    >
                      Student Login
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
