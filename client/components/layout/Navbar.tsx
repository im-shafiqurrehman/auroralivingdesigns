'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/lib/auth';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, initialized, fetchMe, logout } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!initialized) fetchMe();
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [fetchMe, initialized]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 border-b border-[rgba(240,192,64,0.2)] transition-all duration-300 ${
        scrolled ? 'bg-[rgba(13,13,13,0.97)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="font-playfair text-lg text-gold tracking-[0.15em] uppercase">
        Aurora <span className="text-aurora-text font-light">Living Designs</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                pathname === l.href ? 'text-gold' : 'text-aurora-muted hover:text-gold'
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
        {user?.role === 'admin' && (
          <li>
            <Link
              href="/admin"
              className={`text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                pathname.startsWith('/admin') ? 'text-gold' : 'text-aurora-muted hover:text-gold'
              }`}
            >
              Admin
            </Link>
          </li>
        )}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <button
            onClick={handleLogout}
            className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all hover:border-gold hover:text-gold"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all hover:border-gold hover:text-gold"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-aurora-muted"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-[rgba(240,192,64,0.2)] md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold border-b border-[rgba(240,192,64,0.08)]"
            >
              {l.label}
            </Link>
          ))}
          {user?.role === 'admin' && (
            <Link href="/admin" onClick={() => setMenuOpen(false)} className="block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold border-b border-[rgba(240,192,64,0.08)]">
              Admin
            </Link>
          )}
          {user ? (
            <button onClick={handleLogout} className="block w-full text-left px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold">
              Sign Out
            </button>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)} className="block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold">
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
