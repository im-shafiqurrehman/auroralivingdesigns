'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';
import AdminSidebar from '@/components/layout/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, initialized, fetchMe } = useAuthStore();
  const router = useRouter();
  const hasFetched = useRef(false);

  // Ensure auth is initialized (in case AuthProvider hasn't fired yet)
  useEffect(() => {
    if (!initialized && !hasFetched.current) {
      hasFetched.current = true;
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('aurora_token') : null;
      if (token) fetchMe();
      else useAuthStore.setState({ initialized: true });
    }
  }, [initialized, fetchMe]);

  // Gate: redirect non-admins once we know who they are
  useEffect(() => {
    if (!initialized || loading) return;
    if (!user || user.role !== 'admin') {
      router.replace('/login?from=/admin');
    }
  }, [initialized, loading, user, router]);

  // Show a minimal loading state while verifying
  if (!initialized || loading || !user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <div className="font-playfair text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Aurora Admin
          </div>
          <div className="text-aurora-muted text-xs tracking-widest uppercase animate-pulse">
            Verifying access...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen" style={{ paddingTop: '68px' }}>
      <AdminSidebar />
      <div className="flex-1 bg-[#0a0a0a] overflow-y-auto">{children}</div>
    </div>
  );
}
