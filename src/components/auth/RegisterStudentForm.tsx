// src/components/auth/RegisterStudentForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import Logo from '../ui/Logo';
import { siteConfig } from '../../config/siteConfig';

const schema = z.object({
  fullName:        z.string().min(2, 'Please enter your full name'),
  parentName:      z.string().min(2, "Please enter parent's name"),
  grade:           z.string().min(1, 'Please select your class'),
  phone:           z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  subjects:        z.array(z.string()).min(1, 'Please select at least one subject'),
  tuitionMode:     z.enum(['home', 'online']),
  batchTiming:     z.string().min(1, 'Please choose a preferred timing'),
  email:           z.string().email('Please enter a valid email address'),
  password:        z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine(d => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});
type FormData = z.infer<typeof schema>;

const TIMINGS = ['Morning (7–9 AM)', 'Afternoon (12–2 PM)', 'Evening (4–8 PM)', 'Flexible'];

export default function RegisterStudentForm() {
  const navigate = useNavigate();
  const [error,         setError]         = useState('');
  const [isSubmitting,  setIsSubmitting]  = useState(false);
  const [success,       setSuccess]       = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tuitionMode: 'home', subjects: [] },
  });

  const toggleSubject = (id: string) => {
    const updated = selectedSubjects.includes(id)
      ? selectedSubjects.filter(s => s !== id)
      : [...selectedSubjects, id];
    setSelectedSubjects(updated);
    setValue('subjects', updated, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');
    try {
      // 1. Create Supabase auth user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email:    data.email,
        password: data.password,
        options:  { emailRedirectTo: `${window.location.origin}/dashboard` },
      });
      if (signUpError) throw signUpError;
      if (!authData.user) throw new Error('Could not create account. Please try again.');

      // 2. Insert student profile
      const { error: profileError } = await supabase
        .from('student_profiles')
        .insert([{
          id:           authData.user.id,
          full_name:    data.fullName,
          parent_name:  data.parentName,
          grade:        data.grade,
          phone:        data.phone,
          subjects:     data.subjects,
          tuition_mode: data.tuitionMode,
          batch_timing: data.batchTiming,
        }]);
      if (profileError) throw profileError;

      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed.';
      setError(msg.includes('already registered')
        ? 'This email is already registered. Please log in instead.'
        : msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md mx-auto py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="text-2xl font-display font-bold text-navy mb-2">Account Created!</h2>
        <p className="text-ink/70 mb-6">
          Welcome to VatsTuitions! We've sent a verification email to your address.
          Please verify your email, then log in to access your student portal.
        </p>
        <div className="bg-gold/10 border border-gold/30 rounded-card p-4 mb-6 text-sm text-navy">
          <p className="font-semibold mb-1">📞 What happens next?</p>
          <p>Our team will call you within 24 hours to confirm your batch and timing.</p>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-gold text-navy font-bold py-4 rounded-button shadow-md"
        >
          Go to Login →
        </button>
        <div className="mt-3 text-sm text-ink/50">
          Need help? <a href={`tel:${siteConfig.PHONE}`} className="text-teal hover:underline">Call us</a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex justify-center mb-4">
          <Logo size="md" showWordmark showTagline />
        </Link>
        <h1 className="text-2xl font-display font-bold text-navy">Create Student Account</h1>
        <p className="text-ink/70 mt-1">Join VatsTuitions — your child's personalized learning portal</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-1">
            Student's Full Name <span className="text-coral">*</span>
          </label>
          <input id="fullName" type="text" placeholder="e.g. Aryan Sharma"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.fullName ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.fullName && <p className="text-coral text-sm mt-1 italic">{errors.fullName.message}</p>}
        </div>

        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className="block text-sm font-semibold text-navy mb-1">
            Parent / Guardian Name <span className="text-coral">*</span>
          </label>
          <input id="parentName" type="text" placeholder="e.g. Rajesh Sharma"
            {...register('parentName')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.parentName ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.parentName && <p className="text-coral text-sm mt-1 italic">{errors.parentName.message}</p>}
        </div>

        {/* Grade */}
        <div>
          <label htmlFor="grade" className="block text-sm font-semibold text-navy mb-1">
            Current Class / Grade <span className="text-coral">*</span>
          </label>
          <select id="grade" {...register('grade')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.grade ? 'border-coral' : 'border-navy/20'}`}
          >
            <option value="">Select class…</option>
            {siteConfig.GRADES.map(g => <option key={g} value={g}>{g}</option>)}
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

        {/* Tuition Mode */}
        <div>
          <p className="block text-sm font-semibold text-navy mb-2">
            Tuition Mode <span className="text-coral">*</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            {(['home', 'online'] as const).map(mode => (
              <label key={mode}
                className={`flex items-center gap-2 p-3 rounded-card border-2 cursor-pointer transition ${
                  watch('tuitionMode') === mode ? 'border-gold bg-gold/10' : 'border-navy/20'
                }`}
              >
                <input type="radio" value={mode} {...register('tuitionMode')} className="sr-only" />
                <span>{mode === 'home' ? '🏠' : '💻'}</span>
                <span className="font-semibold text-navy text-sm capitalize">{mode === 'home' ? 'Home Tuition' : 'Online Tuition'}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Batch Timing */}
        <div>
          <label htmlFor="batchTiming" className="block text-sm font-semibold text-navy mb-1">
            Preferred Batch Timing <span className="text-coral">*</span>
          </label>
          <select id="batchTiming" {...register('batchTiming')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.batchTiming ? 'border-coral' : 'border-navy/20'}`}
          >
            <option value="">Select timing…</option>
            {TIMINGS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.batchTiming && <p className="text-coral text-sm mt-1 italic">{errors.batchTiming.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
            Mobile Number <span className="text-coral">*</span>
          </label>
          <input id="phone" type="tel" inputMode="numeric" placeholder="10-digit mobile number"
            {...register('phone')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.phone ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.phone && <p className="text-coral text-sm mt-1 italic">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="regEmail" className="block text-sm font-semibold text-navy mb-1">
            Email Address <span className="text-coral">*</span>
          </label>
          <input id="regEmail" type="email" autoComplete="email" placeholder="your@email.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.email ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.email && <p className="text-coral text-sm mt-1 italic">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="regPassword" className="block text-sm font-semibold text-navy mb-1">
            Create Password <span className="text-coral">*</span>
          </label>
          <input id="regPassword" type="password" autoComplete="new-password" placeholder="Min. 8 characters"
            {...register('password')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.password ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.password && <p className="text-coral text-sm mt-1 italic">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-navy mb-1">
            Confirm Password <span className="text-coral">*</span>
          </label>
          <input id="confirmPassword" type="password" autoComplete="new-password" placeholder="Re-enter password"
            {...register('confirmPassword')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.confirmPassword ? 'border-coral' : 'border-navy/20'}`}
          />
          {errors.confirmPassword && <p className="text-coral text-sm mt-1 italic">{errors.confirmPassword.message}</p>}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-coral/10 border border-coral/30 rounded-button px-4 py-3 text-coral text-sm">
            {error}
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={isSubmitting}
          className="w-full bg-gold text-navy font-bold text-lg py-4 rounded-button hover:bg-gold-dark transition-colors disabled:opacity-60 min-h-[56px] shadow-md mt-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent" />
              Creating Account…
            </span>
          ) : 'Create My Student Account →'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-ink/60">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-coral hover:underline">Sign in here</Link>
        </p>
      </div>
      <div className="mt-2 text-center">
        <Link to="/" className="text-sm text-navy/60 hover:text-navy">← Back to VatsTuitions website</Link>
      </div>
    </motion.div>
  );
}
