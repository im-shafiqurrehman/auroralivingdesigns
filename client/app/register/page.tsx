'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { register } = useAuthStore();
  const router = useRouter();

  const validate = () => {
    if (!form.name.trim()) { toast.error('Name is required'); return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) { toast.error('Please enter a valid email address'); return false; }
    if (form.password.length < 8) { toast.error('Password must be at least 8 characters'); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success('Account created. Welcome!');
      router.push('/');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = () => {
    const len = form.password.length;
    if (!len) return null;
    if (len < 6) return { label: 'Too short', color: 'bg-red-500', width: '25%' };
    if (len < 8) return { label: 'Weak', color: 'bg-orange-400', width: '50%' };
    if (len < 12) return { label: 'Good', color: 'bg-yellow-400', width: '75%' };
    return { label: 'Strong', color: 'bg-green-400', width: '100%' };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,192,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,192,64,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative bg-aurora-card border border-[rgba(240,192,64,0.25)] p-10 w-full max-w-md">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="text-center mb-8">
          <div className="font-playfair text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Aurora Living Designs
          </div>
          <h1 className="font-playfair text-2xl font-normal mb-1">Create Account</h1>
          <p className="text-aurora-muted text-sm">Join our platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="form-label">Full Name</label>
            <input
              required
              type="text"
              autoComplete="name"
              className="input-aurora"
              placeholder="Ahmed Khan"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="form-label">Email Address</label>
            <input
              required
              type="email"
              autoComplete="email"
              className="input-aurora"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              required
              type="password"
              autoComplete="new-password"
              className="input-aurora"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {strength && (
              <div className="mt-2">
                <div className="h-0.5 bg-[rgba(240,192,64,0.1)] w-full">
                  <div
                    className={`h-full transition-all duration-300 ${strength.color}`}
                    style={{ width: strength.width }}
                  />
                </div>
                <span className="text-[0.62rem] text-aurora-muted mt-1 block">{strength.label}</span>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[rgba(240,192,64,0.12)] text-center">
          <p className="text-aurora-muted text-sm">
            Already registered?{' '}
            <Link href="/login" className="text-gold hover:underline transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
