// src/pages/Dashboard.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Logo from '../components/ui/Logo';
import { siteConfig } from '../config/siteConfig';

export default function Dashboard() {
  const { user, profile, signOut } = useAuth();

  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent('Hi! I have a question about my batch at VatsTuitions.')}`;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy shadow-nav">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo size="sm" variant="dark" showWordmark />
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-cream/70 text-sm hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={signOut}
              className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 pb-24">

        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-navy mb-1">
            Hello, {profile?.full_name?.split(' ')[0] ?? 'Student'}! 👋
          </h1>
          <p className="text-ink/70">Welcome to your VatsTuitions student portal.</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          {/* Enrollment Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-paper rounded-card shadow-card p-5 col-span-1 sm:col-span-2"
          >
            <h2 className="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
              <span>📋</span> My Enrollment Details
            </h2>
            {profile ? (
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div>
                  <span className="text-ink/50 block">Student Name</span>
                  <span className="font-semibold text-navy">{profile.full_name}</span>
                </div>
                <div>
                  <span className="text-ink/50 block">Parent Name</span>
                  <span className="font-semibold text-navy">{profile.parent_name}</span>
                </div>
                <div>
                  <span className="text-ink/50 block">Class / Grade</span>
                  <span className="font-semibold text-navy">{profile.grade}</span>
                </div>
                <div>
                  <span className="text-ink/50 block">Tuition Mode</span>
                  <span className={`font-bold capitalize px-2 py-0.5 rounded-pill text-xs ${
                    profile.tuition_mode === 'online'
                      ? 'bg-teal/10 text-teal'
                      : 'bg-navy/10 text-navy'
                  }`}>
                    {profile.tuition_mode === 'online' ? '💻 Online' : '🏠 Home'}
                  </span>
                </div>
                <div>
                  <span className="text-ink/50 block">Batch Timing</span>
                  <span className="font-semibold text-navy">{profile.batch_timing ?? 'TBD — call to confirm'}</span>
                </div>
                <div>
                  <span className="text-ink/50 block">Subjects</span>
                  <span className="font-semibold text-navy">
                    {profile.subjects?.join(', ') ?? 'All subjects'}
                  </span>
                </div>
                <div>
                  <span className="text-ink/50 block">Phone</span>
                  <a href={`tel:${profile.phone}`} className="font-semibold text-teal hover:underline">
                    {profile.phone}
                  </a>
                </div>
                <div>
                  <span className="text-ink/50 block">Status</span>
                  <span className={`font-bold px-2 py-0.5 rounded-pill text-xs ${
                    profile.is_active ? 'bg-teal/10 text-teal' : 'bg-coral/10 text-coral'
                  }`}>
                    {profile.is_active ? '✓ Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-ink/50 italic">
                Profile not found. Please contact us to complete your enrollment.
              </p>
            )}
          </motion.div>

          {/* Contact Tutor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-navy rounded-card shadow-card p-5 flex flex-col gap-3"
          >
            <h2 className="text-lg font-display font-bold text-cream mb-1">
              Contact Your Tutor
            </h2>
            <p className="text-cream/60 text-sm">Deepika & Sanjeev Vats</p>
            <a
              href={`tel:${siteConfig.PHONE}`}
              className="flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 rounded-button min-h-[44px] text-sm hover:bg-gold-dark transition"
            >
              📞 Call Now
            </a>
            <a
              href={waUrl}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal text-cream font-bold py-3 rounded-button min-h-[44px] text-sm hover:bg-teal-dark transition"
            >
              💬 WhatsApp
            </a>
            <p className="text-cream/40 text-xs text-center">
              {siteConfig.TIMINGS}
            </p>
          </motion.div>
        </div>

        {/* Notice / Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gold/10 border border-gold/30 rounded-card p-5 mb-6"
        >
          <h2 className="text-base font-bold text-navy mb-2 flex items-center gap-2">
            📢 Notice Board
          </h2>
          {/* TODO: Replace with dynamic announcements from Supabase `announcements` table */}
          <ul className="space-y-2 text-sm text-ink">
            <li className="flex items-start gap-2">
              <span className="text-coral mt-0.5">•</span>
              <span>Welcome to VatsTuitions! Your batch details will be shared via WhatsApp within 24 hours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-0.5">•</span>
              <span>For online students: class link will be sent on WhatsApp 15 minutes before each session.</span>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/#fees"
            className="bg-paper rounded-card p-4 text-center border border-navy/10 hover:border-gold hover:shadow-card transition text-sm font-semibold text-navy"
          >
            📋 Fee Structure
          </Link>
          <Link
            to="/#subjects"
            className="bg-paper rounded-card p-4 text-center border border-navy/10 hover:border-gold hover:shadow-card transition text-sm font-semibold text-navy"
          >
            📚 Subjects
          </Link>
          <a
            href={`mailto:${siteConfig.EMAIL}`}
            className="bg-paper rounded-card p-4 text-center border border-navy/10 hover:border-gold hover:shadow-card transition text-sm font-semibold text-navy"
          >
            ✉️ Email Us
          </a>
          <Link
            to="/"
            className="bg-paper rounded-card p-4 text-center border border-navy/10 hover:border-gold hover:shadow-card transition text-sm font-semibold text-navy"
          >
            🏠 Main Website
          </Link>
        </div>

      </main>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden grid grid-cols-2 z-50"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a href={`tel:${siteConfig.PHONE}`}
          className="bg-navy text-cream font-bold text-sm py-4 flex items-center justify-center gap-2 min-h-[60px]">
          📞 Call Tutor
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="bg-teal text-cream font-bold text-sm py-4 flex items-center justify-center gap-2 min-h-[60px]">
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
