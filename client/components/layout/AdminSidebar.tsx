'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';

const navItems = [
  { href: '/admin', label: 'Overview', icon: '◈' },
  { href: '/admin/products', label: 'Products', icon: '◻' },
  { href: '/admin/categories', label: 'Categories', icon: '≡' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: '✉' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <aside className="bg-aurora-card border-r border-[rgba(240,192,64,0.2)] min-h-screen w-64 flex-shrink-0">
      <div className="px-6 py-5 border-b border-[rgba(240,192,64,0.15)]">
        <div className="font-playfair text-gold text-sm tracking-widest uppercase">Aurora Admin</div>
        {user && <div className="text-aurora-muted text-xs mt-1 truncate">{user.email}</div>}
      </div>

      <nav className="py-4">
        <div className="px-6 text-[0.62rem] tracking-[0.25em] uppercase text-aurora-muted mb-3 mt-2">Dashboard</div>
        {navItems.map((item) => {
          const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 border-l-2 ${
                active
                  ? 'text-gold border-gold bg-[rgba(240,192,64,0.04)]'
                  : 'text-aurora-muted border-transparent hover:text-gold hover:border-gold hover:bg-[rgba(240,192,64,0.03)]'
              }`}
            >
              <span className="text-xs min-w-[18px]">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}

        <div className="mt-6 pt-6 border-t border-[rgba(240,192,64,0.1)]">
          <Link
            href="/"
            className="flex items-center gap-3 px-6 py-3 text-sm text-aurora-muted hover:text-gold transition-colors"
          >
            <span className="text-xs">←</span> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 text-sm text-aurora-muted hover:text-gold transition-colors w-full text-left"
          >
            <span className="text-xs">⎋</span> Sign Out
          </button>
        </div>
      </nav>
    </aside>
  );
}
