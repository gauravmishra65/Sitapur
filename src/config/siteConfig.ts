// ============================================================
// siteConfig.ts — VatsTuitions Site Configuration
// ALL editable content lives here. Update once, reflects everywhere.
// GitHub: https://github.com/gauravmishra65/Sitapur
// ============================================================

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────
  SITE_NAME:       'VatsTuitions',
  TAGLINE:         'Small Batches. Every Child Gets Noticed.',
  HINDI_TAGLINE:   'हर बच्चे पर पूरा ध्यान — छोटी क्लास, बेहतर नतीजे',
  OWNER_NAMES:     'Deepika & Sanjeev Vats',
  ESTABLISHED:     '2020',

  // ── Contact (replace with real values before going live) ───
  PHONE:           '9999999999',          // ← replace with real number
  WHATSAPP:        '919999999999',        // ← country code + number, no +
  WHATSAPP_MESSAGE:'Hi! I\'m interested in VatsTuitions for my child.',
  EMAIL:           'gaurav.mishra65@gmail.com',

  // ── Address ────────────────────────────────────────────────
  ADDRESS_LINE1:   'Gali No. 2, Subhash Nagar',
  ADDRESS_LINE2:   'Meerut, Uttar Pradesh — 250001',
  GOOGLE_MAPS_URL: 'https://maps.google.com',  // ← replace with real GMB link
  TIMINGS:         'Mon–Sat: 7 AM – 9 AM & 4 PM – 8 PM',
  TIMINGS_ONLINE:  'Flexible — morning, afternoon, evening slots available',

  // ── Academic ───────────────────────────────────────────────
  BOARDS:          'CBSE / ICSE / UP Board',
  GRADES_RANGE:    'Nursery to Class 12',

  // ── Batch Sizes ────────────────────────────────────────────
  MAX_BATCH_PRIMARY:   6,   // Nursery – Class 8
  MAX_BATCH_SECONDARY: 8,   // Class 9 – 12

  // ── Urgency (keep honest — update when seats fill/open) ────
  SEATS_REMAINING_EVENING: 3,
  SEATS_REMAINING_ONLINE:  5,

  // ── Fee Structure (INR per month, all subjects) ────────────
  FEES: {
    home: {
      foundation: { label: 'Nursery – Class 5',  price: 1800 },
      middle:     { label: 'Class 6 – 8',        price: 2200 },
      secondary:  { label: 'Class 9 – 10',       price: 2800 },
      senior:     { label: 'Class 11 – 12',      price: 3500 },
    },
    online: {
      foundation: { label: 'Nursery – Class 5',  price: 1200 },
      middle:     { label: 'Class 6 – 8',        price: 1600 },
      secondary:  { label: 'Class 9 – 10',       price: 2000 },
      senior:     { label: 'Class 11 – 12',      price: 2500 },
    },
  },

  // ── Discounts ──────────────────────────────────────────────
  SIBLING_DISCOUNT_PERCENT:  10,
  ADVANCE_DISCOUNT_PERCENT:   5,
  ADVANCE_MONTHS_REQUIRED:    3,

  // ── Navigation Links ───────────────────────────────────────
  NAV_LINKS: [
    { label: 'Home',            href: '#home' },
    { label: 'Subjects',        href: '#subjects' },
    { label: 'Why Us',          href: '#why-us' },
    { label: 'Fees',            href: '#fees' },
    { label: 'Online Classes',  href: '#modes' },
    { label: 'Testimonials',    href: '#testimonials' },
    { label: 'Contact',         href: '#contact' },
  ],

  // ── Subjects ───────────────────────────────────────────────
  SUBJECTS: [
    { id: 'maths',    label: 'Mathematics',         emoji: '📐' },
    { id: 'science',  label: 'Science',              emoji: '🔬' },
    { id: 'english',  label: 'English',              emoji: '📖' },
    { id: 'hindi',    label: 'Hindi',                emoji: 'हि' },
    { id: 'social',   label: 'Social Science',       emoji: '🌍' },
    { id: 'computer', label: 'Computer Science',     emoji: '💻' },
    { id: 'accounts', label: 'Accounts & Commerce',  emoji: '📊' },
    { id: 'all',      label: 'All Other Subjects',   emoji: '⭐' },
  ],

  // ── Grade Dropdown Options ─────────────────────────────────
  GRADES: [
    'Nursery', 'LKG', 'UKG',
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8',
    'Class 9', 'Class 10',
    'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 11 (Arts)',
    'Class 12 (Science)', 'Class 12 (Commerce)', 'Class 12 (Arts)',
  ],
} as const;

export type TuitionMode = 'home' | 'online' | 'either';
export type BatchTiming = 'morning' | 'afternoon' | 'evening' | 'flexible';
export type InterestType = 'demo' | 'admission' | 'info';
