# BrightNest Tuition — Claude Code Master Instructions
# GitHub: https://github.com/gauravmishra65/Sitapur
# Contact: gaurav.mishra65@gmail.com
# Owner: Deepika & Sanjeev Vats

## PROJECT OVERVIEW
Full-stack marketing + lead-capture website for BrightNest Tuition — a home-based and
online tuition service in Meerut, India. Nursery to Class 12, all subjects.
Includes student registration/login portal (Supabase Auth) and an interest
registration form (no payment, lead-gen only).

## TECH STACK
- React 18 + TypeScript + Vite
- Tailwind CSS (custom palette — see tailwind.config.ts)
- Framer Motion (scroll-reveal, micro-animations)
- React Hook Form + Zod (form validation)
- React Router v6 (public site + auth pages)
- Supabase (Auth + Postgres DB — see src/lib/supabase.ts)
- Fonts: Fraunces + Manrope + Noto Sans Devanagari (Google Fonts)
- All illustrations: inline SVG (no external image deps)

## REPOSITORY STRUCTURE
```
brightnest-tuition/
├── CLAUDE.md                    ← YOU ARE HERE
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── index.html
├── .env.example                 ← Supabase keys go here
├── public/
│   ├── favicon.ico
│   └── logo-cat.png             ← uploaded cat logo asset
├── src/
│   ├── main.tsx
│   ├── App.tsx                  ← Router setup
│   ├── config/
│   │   └── siteConfig.ts        ← ALL editable constants (phone, fees, etc.)
│   ├── lib/
│   │   └── supabase.ts          ← Supabase client init
│   ├── types/
│   │   └── index.ts             ← TypeScript types
│   ├── hooks/
│   │   ├── useAuth.ts           ← Auth state hook
│   │   └── useScrollSpy.ts      ← Active nav section detection
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Sticky nav + hamburger
│   │   │   ├── Footer.tsx
│   │   │   └── MobileBottomBar.tsx ← Always-visible Call/WhatsApp
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Logo.tsx         ← SVG inline logo (Open Book V mark)
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Subjects.tsx
│   │   │   ├── Modes.tsx        ← Home vs Online section
│   │   │   ├── Fees.tsx         ← Fee table with tab switcher
│   │   │   ├── Testimonials.tsx
│   │   │   ├── OfferBanner.tsx
│   │   │   ├── RegisterForm.tsx ← Main lead-gen form
│   │   │   └── Contact.tsx
│   │   └── auth/
│   │       ├── LoginForm.tsx
│   │       ├── RegisterStudentForm.tsx
│   │       └── ProtectedRoute.tsx
│   └── pages/
│       ├── Home.tsx             ← All sections assembled
│       ├── Login.tsx
│       ├── Register.tsx         ← Student account registration
│       └── Dashboard.tsx        ← Student portal (post-login)
```

## DATABASE SCHEMA (Supabase)
Run these SQL statements in Supabase SQL editor:

```sql
-- Interest registrations (lead-gen form, no auth required)
CREATE TABLE interest_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name TEXT NOT NULL,
  child_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  subjects TEXT[] NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  tuition_mode TEXT NOT NULL CHECK (tuition_mode IN ('home','online','either')),
  timing_preference TEXT NOT NULL,
  interest_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Student accounts (Supabase Auth handles passwords)
-- After Supabase Auth creates auth.users, this extends with tuition-specific data
CREATE TABLE student_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  subjects TEXT[],
  tuition_mode TEXT DEFAULT 'home',
  batch_timing TEXT,
  enrollment_date DATE DEFAULT CURRENT_DATE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE interest_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;

-- Students can only read their own profile
CREATE POLICY "Students read own profile"
  ON student_profiles FOR SELECT
  USING (auth.uid() = id);

-- Students can update own profile
CREATE POLICY "Students update own profile"
  ON student_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Anyone can insert an interest registration (no auth needed)
CREATE POLICY "Anyone can register interest"
  ON interest_registrations FOR INSERT
  WITH CHECK (TRUE);
```

## COMPONENT IMPLEMENTATION RULES

### Logo (src/components/ui/Logo.tsx)
Use the BrightNest Tuition Open Book V SVG mark (NOT the uploaded cat image — that was
a test upload). The logo is:
- Circle ring in gold (#e3a93c)
- Left book page: navy (#0e2a47)
- Right book page: coral (#d9603f)
- 4-point star: teal (#1f6f6b)
- Wordmark: "BrightNest" in Fraunces Bold navy + "Tuition" in Fraunces Italic coral
- Tagline below: "NURSERY TO CLASS 12" in Manrope, teal, spaced

The cat logo (public/logo-cat.png) should be displayed in the footer as a
fun mascot element with caption "Our Mascot" — it's a friendly sleeping cat
that can represent a calm, cosy study environment.

### Color Palette (tailwind.config.ts)
```js
colors: {
  navy:  { DEFAULT: '#0e2a47', deep: '#091b30' },
  gold:  { DEFAULT: '#e3a93c', light: '#f3c873' },
  cream: { DEFAULT: '#fbf4e6' },
  paper: { DEFAULT: '#fffdf7' },
  coral: { DEFAULT: '#d9603f' },
  teal:  { DEFAULT: '#1f6f6b' },
  ink:   { DEFAULT: '#1c2a38' },
}
```

### siteConfig.ts — ALL CONSTANTS HERE, NOTHING HARDCODED
```ts
export const siteConfig = {
  SITE_NAME: "BrightNest Tuition",
  TAGLINE: "Small Batches. Every Child Gets Noticed.",
  HINDI_TAGLINE: "हर बच्चे पर पूरा ध्यान — छोटी क्लास, बेहतर नतीजे",
  OWNER_NAMES: "Deepika & Sanjeev Vats",
  PHONE: "9999999999",            // ← Replace with real number
  WHATSAPP: "919999999999",       // ← Replace (country code, no +)
  WHATSAPP_MESSAGE: "Hi! I'm interested in BrightNest Tuition for my child.",
  EMAIL: "gaurav.mishra65@gmail.com",
  ADDRESS_LINE1: "Gali No. 2, Subhash Nagar",
  ADDRESS_LINE2: "Meerut, Uttar Pradesh",
  GOOGLE_MAPS_URL: "https://maps.google.com",  // ← Replace with real GMB link
  TIMINGS: "Mon–Sat, 7 AM – 9 AM & 4 PM – 8 PM",
  BOARDS: "CBSE / ICSE / UP Board",
  MAX_BATCH_PRIMARY: 6,
  MAX_BATCH_SECONDARY: 8,
  SEATS_REMAINING_EVENING: 3,     // ← Update honestly when full
  SEATS_REMAINING_ONLINE: 5,
  FEES: {
    home: {
      foundation: { label: "Nursery – Class 5",  price: 1800 },
      middle:     { label: "Class 6 – 8",        price: 2200 },
      secondary:  { label: "Class 9 – 10",       price: 2800 },
      senior:     { label: "Class 11 – 12",      price: 3500 },
    },
    online: {
      foundation: { label: "Nursery – Class 5",  price: 1200 },
      middle:     { label: "Class 6 – 8",        price: 1600 },
      secondary:  { label: "Class 9 – 10",       price: 2000 },
      senior:     { label: "Class 11 – 12",      price: 2500 },
    },
  },
} as const;
```

### Form Submit Handler Pattern (RegisterForm.tsx)
```ts
const onSubmit = async (data: RegistrationFormData) => {
  setIsSubmitting(true);
  try {
    // ── BACKEND INTEGRATION POINT ──────────────────────────────────────────
    // Currently: logs to console. To connect Supabase, replace this block:
    //
    // const { error } = await supabase
    //   .from('interest_registrations')
    //   .insert([{ ...data, created_at: new Date().toISOString() }]);
    // if (error) throw error;
    //
    // To send email notification too, add a Supabase Edge Function trigger
    // on the interest_registrations table INSERT event, sending to:
    // gaurav.mishra65@gmail.com
    // ──────────────────────────────────────────────────────────────────────
    console.log('[BrightNest Tuition] New interest registration:', data);
    await new Promise(r => setTimeout(r, 1000)); // simulate async
    setSubmitSuccess(true);
  } catch (err) {
    setSubmitError('Something went wrong. Please call us directly.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Auth Flow (Supabase Auth)
Student Registration page:
1. Collect: full name, parent name, grade, phone, email, password, subjects, tuition mode
2. Call: supabase.auth.signUp({ email, password })
3. On success: insert into student_profiles with the returned user.id
4. Show email verification notice
5. After verification: redirect to /dashboard

Student Login page:
1. Collect: email + password
2. Call: supabase.auth.signInWithPassword({ email, password })
3. On success: redirect to /dashboard
4. Show "Forgot password?" → supabase.auth.resetPasswordForEmail(email)

Student Dashboard (/dashboard) — simple, not a full LMS:
- Welcome card: "Hello [name]! Your [grade] batch is active."
- Their enrolled subjects, batch timing, tuition mode
- WhatsApp group invite note (teachers share group link manually)
- Quick contact: call tutor, WhatsApp tutor
- Reminder: "Next session: [editable from siteConfig or DB field]"
- A "Update my details" form (name, phone, subjects) → UPDATE student_profiles

ProtectedRoute: if no Supabase session → redirect to /login

### Mobile-First Rules (CRITICAL)
- Min tap target: 44px height on ALL buttons and links
- Font: never below 14px on mobile
- No horizontal scroll at any breakpoint
- Form fields: full-width on mobile, comfortable padding
- Sticky bottom bar: fixed, mobile-only (hidden lg:hidden)
- All cards: responsive grid (1-col mobile → 2-col tablet → 3-4 col desktop)
- Test at 375px, 390px (iPhone 14), 412px (Pixel 7) viewport widths

### Animation Rules (Framer Motion)
- Use `useReducedMotion()` — if true, skip all animations
- Hero text: stagger fade-up (0.15s per line)
- Hero illustration: gentle float (y: -8 to 8, 3s infinite ease-in-out)
- Section headings + cards: fade-in-up on viewport enter
- CTA buttons: scale(1.02) hover + box-shadow lift
- Nav: background opacity transition on scroll
- Auth forms: slide-in from right on mount
- Success states: checkmark scale 0→1.2→1 + fade text

### Accessibility
- Every form field: explicit <label htmlFor>
- SVG illustrations: role="img" aria-label="..."
- Color contrast: navy-on-cream ≥ 4.5:1 ✓ gold-on-navy ≥ 3:1 ✓
- Focus rings: visible, gold outline on dark bg / navy outline on light bg
- Keyboard navigation: full tab flow through nav, form, buttons
- Skip-to-main link at top of page

## ENVIRONMENT VARIABLES (.env.local)
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
These must NEVER be committed. .env.local is in .gitignore.
Share .env.example (with placeholder values) in the repo.

## DEPLOYMENT
- Recommended: Vercel (connect to https://github.com/gauravmishra65/Sitapur)
- Set env vars in Vercel dashboard: VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY
- Custom domain: vatsTuitions.com (once registered)
- Build command: npm run build
- Output dir: dist

## WHAT NOT TO BUILD
- No payment/checkout (lead-gen only)
- No full LMS / video player / assignment system
- No blog or CMS
- No social login (email/password only for now)
- No heavy analytics (add <!-- TODO: Google Analytics --> comment)
- Dashboard is intentionally simple — not a full student portal

## GITHUB REPO
https://github.com/gauravmishra65/Sitapur
Contact: gaurav.mishra65@gmail.com
