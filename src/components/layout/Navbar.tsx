// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { siteConfig } from '../../config/siteConfig';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-paper/95 backdrop-blur-sm shadow-nav'
    : 'bg-transparent';

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (!isHome) { window.location.href = '/' + href; return; }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" aria-label="BrightNest Tuition home">
              <Logo size="sm" showWordmark showTagline={false} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {siteConfig.NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-semibold text-navy hover:text-coral transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.PHONE}`}
                className="text-sm font-bold text-teal hover:text-teal-dark flex items-center gap-1"
                aria-label={`Call ${siteConfig.PHONE}`}
              >
                📞 {siteConfig.PHONE}
              </a>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-sm font-semibold text-navy hover:text-coral"
                  >
                    My Portal
                  </Link>
                  <button
                    onClick={signOut}
                    className="text-sm font-semibold text-coral hover:text-coral-dark"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-semibold text-navy hover:text-coral px-3 py-1.5 rounded-button border border-navy/20 hover:border-coral transition-colors"
                  >
                    Student Login
                  </Link>
                  <button
                    onClick={() => scrollTo('#register')}
                    className="text-sm font-bold bg-gold text-navy px-4 py-2 rounded-pill hover:bg-gold-dark transition-colors shadow-md"
                  >
                    Register Interest →
                  </button>
                </>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden min-w-[44px] min-h-[44px] flex flex-col items-center justify-center rounded-button text-navy"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
              <span className="block w-5 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-20 px-6 pb-24 overflow-y-auto lg:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl text-navy"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Nav links */}
            <div className="flex flex-col gap-4 mb-8">
              {siteConfig.NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-xl font-bold text-navy border-b border-gold/30 pb-3 hover:text-coral transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Auth + CTA */}
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={`tel:${siteConfig.PHONE}`}
                className="flex items-center justify-center gap-2 bg-teal text-cream font-bold text-lg py-3.5 rounded-button"
              >
                📞 Call {siteConfig.PHONE}
              </a>
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="text-center bg-navy text-cream font-bold text-lg py-3.5 rounded-button"
                  >
                    My Student Portal
                  </Link>
                  <button
                    onClick={() => { signOut(); setMenuOpen(false); }}
                    className="text-center text-coral font-semibold text-base py-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-center bg-navy text-cream font-bold text-lg py-3.5 rounded-button"
                  >
                    Student Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="text-center border-2 border-navy text-navy font-bold text-lg py-3.5 rounded-button"
                  >
                    Create Student Account
                  </Link>
                  <button
                    onClick={() => scrollTo('#register')}
                    className="text-center bg-gold text-navy font-bold text-lg py-3.5 rounded-pill shadow-md"
                  >
                    Register Interest →
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
