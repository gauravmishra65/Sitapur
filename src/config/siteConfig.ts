// ============================================================
// siteConfig.ts — BrightNest Tuition Site Configuration
// ALL editable content lives here. Update once, reflects everywhere.
// GitHub: https://github.com/gauravmishra65/Sitapur
// ============================================================

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────
  SITE_NAME:       'BrightNest Tuition',
  TAGLINE:         'Small Batches. Every Child Gets Noticed.',
  HINDI_TAGLINE:   'हर बच्चे पर पूरा ध्यान — छोटी क्लास, बेहतर नतीजे',
  OWNER_NAMES:     'Deepika & Sanjeev Vats',
  ESTABLISHED:     '2020',

  // ── Contact (replace with real values before going live) ───
  PHONE:           '9999999999',          // ← replace with real number
  WHATSAPP:        '919999999999',        // ← country code + number, no +
  WHATSAPP_MESSAGE:'Hi! I\'m interested in BrightNest Tuition for my child.',
  EMAIL:           'gaurav.mishra65@gmail.com',

  // ── Address ────────────────────────────────────────────────
  ADDRESS_LINE1:   'near RMP College',
  ADDRESS_LINE2:   'Sitapur, Uttar Pradesh',
  GOOGLE_MAPS_URL: 'https://www.google.com/maps/search/RMP+College+Sitapur+Uttar+Pradesh',
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
    { label: 'FAQ',             href: '#faq' },
    { label: 'Contact',         href: '#contact' },
  ],

  // ── Subjects ───────────────────────────────────────────────
  SUBJECTS: [
    { id: 'maths',    label: 'Mathematics',         emoji: '📐' },
    { id: 'science',  label: 'Science',              emoji: '🔬' },
    { id: 'english',  label: 'English',              emoji: '📖' },
    { id: 'hindi',    label: 'Hindi',                emoji: 'हिंदी ' },
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

  // ── Trust Stats (animated counters) ────────────────────────
  STATS: [
    { value: 200, suffix: '+',  label: 'Students Tutored',    icon: '🎓' },
    { value: 4,   suffix: '+',  label: 'Years of Excellence', icon: '⭐' },
    { value: 95,  suffix: '%',  label: 'Parents Satisfied',   icon: '❤️' },
    { value: 3,   suffix: '',   label: 'Boards Covered',      icon: '📚' },
  ],

  // ── FAQ ────────────────────────────────────────────────────
  FAQ: [
    {
      q: 'Do you offer a free demo class?',
      a: "Yes! Every child gets one completely FREE demo session — no obligation, no payment. You meet the teacher, see the teaching style, and then decide. Just register your interest below and we'll schedule a convenient time.",
    },
    {
      q: 'How small are the batches really?',
      a: "We cap Nursery–Class 8 batches at 6 students and Class 9–12 at 8 students. Every child is seen, corrected, and heard in every session — the opposite of a 30-student coaching centre.",
    },
    {
      q: 'What subjects do you teach?',
      a: 'Mathematics, Science, English, Hindi, Social Science, Computer Science, and Accounts & Commerce. For Class 11–12, we cover Science, Commerce, and Arts streams. Not sure if your subject is covered? Just ask.',
    },
    {
      q: 'Which school boards do you teach?',
      a: "CBSE, ICSE, and UP Board. Teaching is adapted to your child's specific board, textbooks, and exam pattern. No generic content — we teach what your school actually tests.",
    },
    {
      q: 'What are the class timings?',
      a: 'Home classes run Mon–Sat: 7 AM–9 AM (morning) and 4 PM–8 PM (evening). Online classes offer flexible morning, afternoon, and evening slots — tell us your preference when registering.',
    },
    {
      q: 'Is online tuition as effective as in-person?',
      a: 'For most students, yes. Live online classes use video, screen-sharing, and digital whiteboards. Same teachers, same small batches, same personal attention. WhatsApp doubt support is included for both modes.',
    },
    {
      q: 'Are there any discounts available?',
      a: '10% sibling discount when you enrol two children together. 5% discount on 3-month advance payment. All fees shown are inclusive — no hidden registration or material charges.',
    },
    {
      q: 'What happens after I submit the interest form?',
      a: "Deepika or Sanjeev will personally call you within 24 hours to understand your child's needs, suggest the right batch, and schedule your free demo session. No pressure — just a friendly conversation.",
    },
  ],
} as const;

export type TuitionMode = 'home' | 'online' | 'either';
export type BatchTiming = 'morning' | 'afternoon' | 'evening' | 'flexible';
export type InterestType = 'demo' | 'admission' | 'info';
