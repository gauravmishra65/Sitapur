// src/components/ui/Logo.tsx
// VatsTuitions Open Book V Mark — inline SVG, no external deps
// Design: V shape = two open book pages (navy + coral), gold ring, teal star

import { siteConfig } from '../../config/siteConfig';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}

const sizes = { sm: 36, md: 48, lg: 72 };
const wordmarkSizes = { sm: 22, md: 30, lg: 46 };
const taglineSizes  = { sm:  8, md: 10, lg: 14 };

export default function Logo({
  size = 'md',
  variant = 'light',
  showWordmark = true,
  showTagline = false,
  className = '',
}: LogoProps) {
  const px = sizes[size];
  const wms = wordmarkSizes[size];
  const tls = taglineSizes[size];
  const isDark = variant === 'dark';

  // In dark variant (on navy bg): book pages become cream + gold, ring stays gold
  const leftPage  = isDark ? '#fbf4e6' : '#0e2a47';
  const rightPage = isDark ? '#e3a93c' : '#d9603f';

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label={`${siteConfig.SITE_NAME} logo`}>
      {/* Icon mark */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 220 220"
        role="img"
        aria-label="VatsTuitions Open Book V mark"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Gold circle ring */}
        <circle cx="110" cy="110" r="103" fill="none" stroke="#e3a93c" strokeWidth="4.5" />

        {/* Left book page */}
        <path d="M48 66 L106 168 L106 88 Q106 71 92 65 L48 54 Z" fill={leftPage} />
        {/* Page lines left */}
        <path d="M60 75 L98 86"   stroke={isDark ? '#0e2a47' : '#fbf4e6'} strokeWidth="2.6" opacity="0.65" strokeLinecap="round" />
        <path d="M66 89 L101 98"  stroke={isDark ? '#0e2a47' : '#fbf4e6'} strokeWidth="2.4" opacity="0.55" strokeLinecap="round" />

        {/* Right book page */}
        <path d="M172 66 L114 168 L114 88 Q114 71 128 65 L172 54 Z" fill={rightPage} />
        {/* Page lines right */}
        <path d="M160 75 L122 86"  stroke={isDark ? '#0e2a47' : '#fbf4e6'} strokeWidth="2.6" opacity="0.65" strokeLinecap="round" />
        <path d="M154 89 L119 98"  stroke={isDark ? '#0e2a47' : '#fbf4e6'} strokeWidth="2.4" opacity="0.55" strokeLinecap="round" />

        {/* Teal 4-point star (achievement spark) */}
        <path d="M110 28 L115 40 L127 43 L115 46 L110 58 L105 46 L93 43 L105 40 Z" fill="#1f6f6b" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: wms, lineHeight: 1 }}>
            <span style={{ color: isDark ? '#fbf4e6' : '#0e2a47' }}>Vats</span>
            <span style={{ color: '#d9603f', fontStyle: 'italic', fontWeight: 600 }}>Tuitions</span>
          </div>
          {showTagline && (
            <div style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: tls,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#1f6f6b',
              marginTop: 4,
            }}>
              Nursery to Class 12
            </div>
          )}
        </div>
      )}
    </div>
  );
}
