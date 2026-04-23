'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';
import AdminSidebar from '@/components/layout/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, initialized, fetchMe } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!initialized) fetchMe();
  }, [fetchMe, initialized]);

  useEffect(() => {
    if (initialized && !loading) {
      const u = useAuthStore.getState().user;
      if (!u || u.role !== 'admin') router.replace('/login');
    }
  }, [initialized, loading, router]);

  if (!initialized || loading || !user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center text-aurora-muted">
        Verifying access...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen pt-[68px]">
      <AdminSidebar />
      <div className="flex-1 bg-[#0a0a0a] min-h-full">{children}</div>
    </div>
  );
}
