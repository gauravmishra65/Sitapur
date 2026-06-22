# BrightNest Tuition 🎓
### Small Batches. Every Child Gets Noticed.
**हर बच्चे पर पूरा ध्यान — छोटी क्लास, बेहतर नतीजे**

Home & online tuition website for Meerut, India. Nursery to Class 12, all subjects.
Run by **Deepika & Sanjeev Vats**, Gali No. 2, Subhash Nagar, Meerut.

> **GitHub:** https://github.com/gauravmishra65/Sitapur
> **Contact:** gaurav.mishra65@gmail.com

---

## ✨ Features

| Feature | Details |
|---|---|
| 📱 Mobile-First | Designed for 375px+, sticky call/WhatsApp bottom bar |
| 🎨 Brand Design | Navy + Gold + Coral + Teal palette, Fraunces serif |
| 📋 Lead Capture | Interest registration form (no auth required) |
| 🔐 Student Auth | Supabase email/password login + registration |
| 🎓 Student Portal | Dashboard with enrollment info + tutor contact |
| 💰 Fee Structure | Home vs Online comparison, tab-switcher |
| 🌐 Home + Online | Dual tuition modes clearly marketed |
| 🔥 Supabase Ready | Auth + DB schema included, one-line backend swap |

---

## 🚀 Quick Start

### 1. Clone
```bash
git clone https://github.com/gauravmishra65/Sitapur.git
cd Sitapur
npm install
```

### 2. Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials:
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Supabase Setup
1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema from `CLAUDE.md` → DATABASE SCHEMA
3. Copy your project URL + anon key into `.env.local`
4. In Supabase Auth settings, set **Site URL** to `http://localhost:5173`

### 4. Run
```bash
npm run dev
# → http://localhost:5173
```

### 5. Build & Deploy
```bash
npm run build
# Deploy `dist/` to Vercel, Netlify, or any static host
```

---

## 📁 Project Structure

```
src/
├── config/siteConfig.ts     ← ALL editable content (phone, fees, address, etc.)
├── lib/supabase.ts           ← Supabase client
├── hooks/useAuth.ts          ← Auth state management
├── types/index.ts            ← TypeScript types
├── components/
│   ├── layout/               ← Navbar, Footer, MobileBottomBar
│   ├── ui/                   ← Logo, Button, Card, Badge
│   ├── sections/             ← Hero, WhyUs, Subjects, Modes, Fees, etc.
│   └── auth/                 ← LoginForm, RegisterStudentForm, ProtectedRoute
└── pages/
    ├── Home.tsx              ← Marketing site (all sections)
    ├── Login.tsx             ← Student login
    ├── Register.tsx          ← Student registration
    └── Dashboard.tsx         ← Protected student portal
```

---

## ⚙️ Customization

**All content is in one file:** `src/config/siteConfig.ts`

Update these before going live:
```ts
PHONE:    '9999999999',     // ← your real phone number
WHATSAPP: '919999999999',   // ← your WhatsApp (country code + number)
EMAIL:    'gaurav.mishra65@gmail.com',
GOOGLE_MAPS_URL: '...',     // ← your Google Business Profile URL
```

**Fees** are also in `siteConfig.ts` — change monthly prices there and they
update everywhere on the site automatically.

---

## 🗄️ Database Tables

| Table | Purpose |
|---|---|
| `interest_registrations` | Lead-gen form submissions (no auth) |
| `student_profiles` | Extended profile for registered students |

Full SQL schema in `CLAUDE.md`.

---

## 🌐 Deployment (Vercel — Recommended)

1. Push to GitHub: `git push origin main`
2. Connect repo at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy — Vercel auto-detects Vite
5. Add custom domain `brightnesttuition.com` in Vercel settings

---

## 📱 Pages / Routes

| Route | Page | Auth Required |
|---|---|---|
| `/` | Full marketing site | No |
| `/login` | Student login | No |
| `/register` | Student registration | No |
| `/dashboard` | Student portal | ✅ Yes |

---

## 🧰 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (custom palette)
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (form validation)
- **React Router v6** (routing)
- **Supabase** (Auth + Postgres DB)

---

## 📞 Support

- **Owner:** Deepika & Sanjeev Vats
- **Email:** gaurav.mishra65@gmail.com
- **Address:** Gali No. 2, Subhash Nagar, Meerut, UP
- **Claude Code instructions:** See `CLAUDE.md`

---

*Made with ❤️ for students of Subhash Nagar, Meerut*
