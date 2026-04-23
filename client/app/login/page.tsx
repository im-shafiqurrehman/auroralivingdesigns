'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back.');
      const u = useAuthStore.getState().user;
      router.push(u?.role === 'admin' ? '/admin' : '/');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.25)] p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="font-playfair text-gold text-sm tracking-[0.2em] uppercase mb-4">Aurora Living Designs</div>
          <h1 className="font-playfair text-2xl font-normal mb-1">Welcome Back</h1>
          <p className="text-aurora-muted text-sm">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">Email Address</label>
            <input required type="email" className="input-aurora" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input required type="password" className="input-aurora" placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-aurora-muted text-sm mt-5">
          No account?{' '}
          <Link href="/register" className="text-gold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
