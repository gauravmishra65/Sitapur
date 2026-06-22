// src/components/auth/LoginForm.tsx
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
  email:    z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const [error,        setError]        = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSent,    setResetSent]    = useState(false);

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email:    data.email,
        password: data.password,
      });
      if (authError) throw authError;
      navigate('/dashboard', { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(msg.includes('Invalid') ? 'Incorrect email or password. Please try again.' : msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = getValues('email');
    if (!email) { setError('Please enter your email first, then click Forgot Password.'); return; }
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (resetError) { setError('Could not send reset email. Please contact us.'); return; }
    setResetSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex justify-center mb-4">
          <Logo size="md" showWordmark showTagline />
        </Link>
        <h1 className="text-2xl font-display font-bold text-navy">Student Login</h1>
        <p className="text-ink/70 mt-1">Welcome back! Enter your details to continue.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition
              ${errors.email ? 'border-coral' : 'border-navy/20 focus:border-gold'}`}
          />
          {errors.email && (
            <p className="text-coral text-sm mt-1 italic">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-navy mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            {...register('password')}
            className={`w-full px-4 py-3 rounded-card border text-ink text-base bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition
              ${errors.password ? 'border-coral' : 'border-navy/20 focus:border-gold'}`}
          />
          {errors.password && (
            <p className="text-coral text-sm mt-1 italic">{errors.password.message}</p>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-coral/10 border border-coral/30 rounded-button px-4 py-3 text-coral text-sm">
            {error}
          </div>
        )}

        {/* Reset sent */}
        {resetSent && (
          <div className="bg-teal/10 border border-teal/30 rounded-button px-4 py-3 text-teal text-sm">
            ✓ Password reset link sent! Check your email.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold text-navy font-bold text-lg py-4 rounded-button hover:bg-gold-dark transition-colors disabled:opacity-60 min-h-[56px] shadow-md"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent" />
              Signing In…
            </span>
          ) : 'Sign In →'}
        </button>

        {/* Forgot password */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-teal hover:underline"
          >
            Forgot password?
          </button>
        </div>
      </form>

      {/* Register link */}
      <div className="mt-8 text-center p-4 bg-paper rounded-card border border-navy/10">
        <p className="text-sm text-ink/70 mb-2">New student at BrightNest Tuition?</p>
        <Link
          to="/register"
          className="font-bold text-coral hover:underline"
        >
          Create your student account →
        </Link>
      </div>

      {/* Back to site */}
      <div className="text-center mt-4">
        <Link to="/" className="text-sm text-navy/60 hover:text-navy">
          ← Back to BrightNest Tuition website
        </Link>
      </div>

      {/* Help */}
      <div className="text-center mt-2">
        <p className="text-xs text-ink/50">
          Need help?{' '}
          <a href={`tel:${siteConfig.PHONE}`} className="text-teal hover:underline">
            Call us
          </a>
          {' '}or{' '}
          <a
            href={`https://wa.me/${siteConfig.WHATSAPP}`}
            target="_blank" rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </motion.div>
  );
}
