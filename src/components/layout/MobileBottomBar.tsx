// src/components/layout/MobileBottomBar.tsx
// Fixed sticky bar — MOBILE ONLY (hidden on lg+)
// Shows "Call Now" + "WhatsApp Us" always visible while scrolling
// Hides when #register form is in viewport

import { useEffect, useState } from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const registerSection = document.getElementById('register');
    if (!registerSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '0px 0px -20% 0px' }
    );
    observer.observe(registerSection);
    return () => observer.disconnect();
  }, []);

  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 lg:hidden
        transition-transform duration-300
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-2 shadow-nav">
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.PHONE}`}
          className="flex items-center justify-center gap-2 bg-navy text-cream font-bold text-base py-4 min-h-[60px] active:bg-navy-deep"
          aria-label={`Call ${siteConfig.PHONE}`}
        >
          <span className="text-xl">📞</span>
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-teal text-cream font-bold text-base py-4 min-h-[60px] active:bg-teal-dark"
          aria-label="Chat on WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
