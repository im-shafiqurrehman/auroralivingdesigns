'use client';
import { useEffect } from 'react';
import { useAuthStore } from '@/lib/auth';

/**
 * AuthProvider — mounts once at the root layout.
 * Reads the token from localStorage and calls /api/auth/me to hydrate
 * the auth store on every fresh page load / tab open.
 * No UI — purely initialises state.
 */
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { initialized, fetchMe } = useAuthStore();

  useEffect(() => {
    // Only run on client; only once per session (guard with initialized flag)
    if (!initialized) {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('aurora_token') : null;
      if (token) {
        fetchMe();
      } else {
        // Mark as initialised so UI doesn't stall on "Verifying access…"
        useAuthStore.setState({ initialized: true });
      }
    }
  }, [initialized, fetchMe]);

  return <>{children}</>;
}
