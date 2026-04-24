'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/auth';
import api from '@/lib/api';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  badge?: number;
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [newInquiries, setNewInquiries] = useState(0);

  // Fetch unread inquiry count for badge
  useEffect(() => {
    api
      .get('/admin/stats')
      .then(({ data }) => setNewInquiries(data.newInquiries || 0))
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const navItems: NavItem[] = [
    { href: '/admin', label: 'Overview', icon: '◈' },
    { href: '/admin/products', label: 'Products', icon: '◻' },
    { href: '/admin/categories', label: 'Categories', icon: '≡' },
    {
      href: '/admin/inquiries',
      label: 'Inquiries',
      icon: '✉',
      badge: newInquiries,
    },
    { href: '/admin/settings', label: 'Settings', icon: '⚙' },
  ];

  return (
    <aside
      className="bg-[#0d0d0d] border-r border-[rgba(240,192,64,0.18)] min-h-screen flex-shrink-0 flex flex-col"
      style={{ width: '240px' }}
    >
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[rgba(240,192,64,0.12)]">
        <div className="font-playfair text-gold text-sm tracking-[0.15em] uppercase leading-snug">
          Aurora Admin
        </div>
        {user && (
          <div className="text-aurora-muted text-[0.68rem] mt-1 truncate">
            {user.name} — {user.email}
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-6 text-[0.6rem] tracking-[0.28em] uppercase text-[rgba(168,159,140,0.5)] mb-3 mt-2">
          Dashboard
        </div>

        {navItems.map((item) => {
          const isActive =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-6 py-3 text-sm transition-all duration-200 border-l-2 ${
                isActive
                  ? 'text-gold border-gold bg-[rgba(240,192,64,0.05)]'
                  : 'text-aurora-muted border-transparent hover:text-gold hover:border-[rgba(240,192,64,0.4)] hover:bg-[rgba(240,192,64,0.03)]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[0.8rem] min-w-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {/* Unread badge */}
              {item.badge != null && item.badge > 0 && (
                <span className="bg-gold text-aurora-black text-[0.6rem] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-[rgba(240,192,64,0.1)] py-3">
        <Link
          href="/"
          className="flex items-center gap-3 px-6 py-3 text-sm text-aurora-muted hover:text-gold transition-colors"
        >
          <span className="text-[0.8rem]">←</span>
          <span>View Site</span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-3 text-sm text-aurora-muted hover:text-red-400 transition-colors w-full text-left"
        >
          <span className="text-[0.8rem]">⎋</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
