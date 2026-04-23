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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success('Account created.');
      router.push('/');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.25)] p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="font-playfair text-gold text-sm tracking-[0.2em] uppercase mb-4">Aurora Living Designs</div>
          <h1 className="font-playfair text-2xl font-normal mb-1">Create Account</h1>
          <p className="text-aurora-muted text-sm">Join our platform</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">Full Name</label>
            <input required className="input-aurora" placeholder="Ahmed Khan"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="form-label">Email Address</label>
            <input required type="email" className="input-aurora" placeholder="you@example.com"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input required type="password" className="input-aurora" placeholder="••••••••"
              value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-aurora-muted text-sm mt-5">
          Already registered?{' '}
          <Link href="/login" className="text-gold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
