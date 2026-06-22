// src/components/sections/RegisterForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import type { RegistrationFormData } from '../../types';

const schema = z.object({
  parentName:   z.string().min(2, "Please enter parent's name"),
  childName:    z.string().min(2, "Please enter child's name"),
  grade:        z.string().min(1, 'Please select a class'),
  subjects:     z.array(z.string()).min(1, 'Please select at least one subject'),
  phone:        z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  whatsapp:     z.string().optional(),
  sameWhatsApp: z.boolean(),
  tuitionMode:  z.enum(['home', 'online', 'either']),
  timing:       z.enum(['morning', 'afternoon', 'evening', 'flexible']),
  interestType: z.enum(['demo', 'admission', 'info']),
  message:      z.string().optional(),
}) satisfies z.ZodType<RegistrationFormData>;

const TIMING_OPTIONS: { value: RegistrationFormData['timing']; label: string }[] = [
  { value: 'morning',   label: 'Morning (7–9 AM)' },
  { value: 'afternoon', label: 'Afternoon (12–2 PM)' },
  { value: 'evening',   label: 'Evening (4–8 PM)' },
  { value: 'flexible',  label: 'Flexible / Any time' },
];

const INTEREST_OPTIONS: { value: RegistrationFormData['interestType']; label: string }[] = [
  { value: 'demo',      label: 'Free Demo Class' },
  { value: 'admission', label: 'Ready to Admit' },
  { value: 'info',      label: 'Just Need Info' },
];

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      sameWhatsApp: true,
      tuitionMode: 'either',
      timing: 'flexible',
      interestType: 'info',
      subjects: [],
    },
  });

  const sameWhatsApp = watch('sameWhatsApp');

  const toggleSubject = (id: string) => {
    const updated = selectedSubjects.includes(id)
      ? selectedSubjects.filter(s => s !== id)
      : [...selectedSubjects, id];
    setSelectedSubjects(updated);
    setValue('subjects', updated, { shouldValidate: true });
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
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
    } catch {
      setSubmitError('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Register Your <span className="text-coral italic">Interest</span>
          </h2>
          <p className="mt-3 text-ink/60 text-lg">
            No payment needed — just fill this in and we'll call you back within 24 hours.
          </p>
        </div>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-paper rounded-card shadow-card p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-6xl mb-4"
            >
              ✅
            </motion.div>
            <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
            <p className="text-ink/70 mb-6">
              We've received your interest. {siteConfig.OWNER_NAMES} will call you within
              24 hours to confirm details and the next steps.
            </p>
            <a
              href={`tel:${siteConfig.PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-teal text-cream font-bold px-6 py-3 min-h-[48px] rounded-pill shadow-md"
            >
              📞 Or Call Us Directly
            </a>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-paper rounded-card shadow-card p-6 sm:p-8 space-y-5"
          >
            {/* Parent + Child name */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="parentName" className="block text-sm font-semibold text-navy mb-1">
                  Parent's Name <span className="text-coral">*</span>
                </label>
                <input
                  id="parentName"
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  {...register('parentName')}
                  className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.parentName ? 'border-coral' : 'border-navy/20'}`}
                />
                {errors.parentName && <p className="text-coral text-sm mt-1 italic">{errors.parentName.message}</p>}
              </div>
              <div>
                <label htmlFor="childName" className="block text-sm font-semibold text-navy mb-1">
                  Child's Name <span className="text-coral">*</span>
                </label>
                <input
                  id="childName"
                  type="text"
                  placeholder="e.g. Aryan Sharma"
                  {...register('childName')}
                  className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.childName ? 'border-coral' : 'border-navy/20'}`}
                />
                {errors.childName && <p className="text-coral text-sm mt-1 italic">{errors.childName.message}</p>}
              </div>
            </div>

            {/* Grade */}
            <div>
              <label htmlFor="grade" className="block text-sm font-semibold text-navy mb-1">
                Current Class / Grade <span className="text-coral">*</span>
              </label>
              <select
                id="grade"
                {...register('grade')}
                className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.grade ? 'border-coral' : 'border-navy/20'}`}
              >
                <option value="">Select class…</option>
                {siteConfig.GRADES.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.grade && <p className="text-coral text-sm mt-1 italic">{errors.grade.message}</p>}
            </div>

            {/* Subjects */}
            <div>
              <p className="block text-sm font-semibold text-navy mb-2">
                Subjects Interested In <span className="text-coral">*</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.SUBJECTS.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleSubject(s.id)}
                    className={`px-3 py-2.5 min-h-[44px] rounded-pill text-sm font-semibold border-2 transition-all ${
                      selectedSubjects.includes(s.id)
                        ? 'bg-gold border-gold text-navy shadow-md'
                        : 'bg-paper border-navy/20 text-ink hover:border-gold'
                    }`}
                  >
                    {s.emoji} {s.label}
                  </button>
                ))}
              </div>
              {errors.subjects && <p className="text-coral text-sm mt-1 italic">{errors.subjects.message}</p>}
            </div>

            {/* Tuition mode */}
            <div>
              <p className="block text-sm font-semibold text-navy mb-2">Preferred Mode</p>
              <div className="grid grid-cols-3 gap-3">
                {(['home', 'online', 'either'] as const).map(mode => (
                  <label
                    key={mode}
                    className={`flex flex-col items-center gap-1 p-3 rounded-card border-2 cursor-pointer transition ${
                      watch('tuitionMode') === mode ? 'border-gold bg-gold/10' : 'border-navy/20'
                    }`}
                  >
                    <input type="radio" value={mode} {...register('tuitionMode')} className="sr-only" />
                    <span>{mode === 'home' ? '🏠' : mode === 'online' ? '💻' : '🤷'}</span>
                    <span className="font-semibold text-navy text-xs capitalize">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timing */}
            <div>
              <label htmlFor="timing" className="block text-sm font-semibold text-navy mb-1">
                Preferred Timing
              </label>
              <select
                id="timing"
                {...register('timing')}
                className="w-full px-4 py-3 rounded-card border border-navy/20 text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition"
              >
                {TIMING_OPTIONS.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Interest type */}
            <div>
              <p className="block text-sm font-semibold text-navy mb-2">What are you looking for?</p>
              <div className="grid grid-cols-3 gap-3">
                {INTEREST_OPTIONS.map(opt => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-center text-center p-3 min-h-[48px] rounded-card border-2 cursor-pointer transition text-xs font-semibold text-navy ${
                      watch('interestType') === opt.value ? 'border-gold bg-gold/10' : 'border-navy/20'
                    }`}
                  >
                    <input type="radio" value={opt.value} {...register('interestType')} className="sr-only" />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
                Mobile Number <span className="text-coral">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="10-digit mobile number"
                {...register('phone')}
                className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.phone ? 'border-coral' : 'border-navy/20'}`}
              />
              {errors.phone && <p className="text-coral text-sm mt-1 italic">{errors.phone.message}</p>}
            </div>

            {/* Same as WhatsApp */}
            <label className="flex items-center gap-2 min-h-[44px] cursor-pointer">
              <input type="checkbox" {...register('sameWhatsApp')} className="w-5 h-5 accent-gold" />
              <span className="text-sm text-ink/70">This is also my WhatsApp number</span>
            </label>

            {!sameWhatsApp && (
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-navy mb-1">
                  WhatsApp Number
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit WhatsApp number"
                  {...register('whatsapp')}
                  className="w-full px-4 py-3 rounded-card border border-navy/20 text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">
                Anything else we should know? (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="e.g. weak in algebra, exam next month, etc."
                {...register('message')}
                className="w-full px-4 py-3 rounded-card border border-navy/20 text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition resize-none"
              />
            </div>

            {submitError && (
              <div className="bg-coral/10 border border-coral/30 rounded-button px-4 py-3 text-coral text-sm">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-navy font-bold text-lg py-4 min-h-[56px] rounded-button hover:bg-gold-dark transition-colors disabled:opacity-60 shadow-md"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent" />
                  Submitting…
                </span>
              ) : 'Register My Interest →'}
            </button>

            <p className="text-center text-xs text-ink/50">
              No payment required. We'll call you back — that's it.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
