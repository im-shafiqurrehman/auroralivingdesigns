'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

interface Stats {
  products: number;
  categories: number;
  inquiries: number;
  newInquiries: number;
  users: number;
}

export default function AdminOverview() {
  const [stats, setStats] = useState<Stats>({
    products: 0,
    categories: 0,
    inquiries: 0,
    newInquiries: 0,
    users: 0,
  });
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/admin/stats').catch(() => null),
      api.get('/products?limit=5&sort=newest').catch(() => ({ data: { products: [] } })),
    ]).then(([statsRes, prodRes]) => {
      if (statsRes?.data) {
        setStats(statsRes.data);
      } else {
        // Fallback: compute from individual endpoints
        Promise.all([
          api.get('/products?limit=1').catch(() => ({ data: { total: 0 } })),
          api.get('/categories').catch(() => ({ data: [] })),
          api.get('/inquiries?limit=50').catch(() => ({ data: { total: 0, inquiries: [] } })),
        ]).then(([pRes, cRes, iRes]) => {
          setStats({
            products: pRes.data.total || 0,
            categories: Array.isArray(cRes.data) ? cRes.data.length : 0,
            inquiries: iRes.data.total || 0,
            newInquiries: (iRes.data.inquiries || []).filter((i: any) => i.status === 'new').length,
            users: 0,
          });
        });
      }
      setRecentProducts(prodRes.data.products || []);
    }).finally(() => setLoading(false));
  }, []);

  const statCards = [
    { label: 'Total Products', value: stats.products, sub: null, href: '/admin/products' },
    { label: 'Categories', value: stats.categories, sub: `${stats.categories} active`, href: '/admin/categories' },
    { label: 'Inquiries', value: stats.inquiries, sub: stats.newInquiries > 0 ? `${stats.newInquiries} new` : null, href: '/admin/inquiries', highlight: stats.newInquiries > 0 },
    { label: 'Total Users', value: stats.users, sub: null, href: null },
  ];

  const statusColors: Record<string, string> = {
    new: 'text-gold border-gold',
    read: 'text-green-400 border-green-400',
    replied: 'text-blue-400 border-blue-400',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-normal">Dashboard Overview</h1>
        <p className="text-aurora-muted text-sm mt-1">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {statCards.map(({ label, value, sub, href, highlight }) => {
          const inner = (
            <div className={`bg-aurora-card border p-6 transition-all duration-200 ${highlight ? 'border-[rgba(240,192,64,0.4)]' : 'border-[rgba(240,192,64,0.18)]'} ${href ? 'hover:border-[rgba(240,192,64,0.4)] cursor-pointer' : ''}`}>
              <div className="text-[0.68rem] tracking-[0.22em] uppercase text-aurora-muted mb-3">{label}</div>
              <div className="font-playfair text-4xl text-gold leading-none">{loading ? '—' : value}</div>
              {sub && (
                <div className={`text-xs mt-2 ${highlight ? 'text-gold' : 'text-aurora-muted'}`}>{sub}</div>
              )}
            </div>
          );
          return href ? (
            <Link key={label} href={href}>{inner}</Link>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>

      {/* Recent Products */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] mb-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(240,192,64,0.1)]">
          <div className="text-[0.78rem] tracking-[0.15em] uppercase text-gold">Recently Added Products</div>
          <Link href="/admin/products" className="text-xs text-aurora-muted hover:text-gold transition-colors">
            View All
          </Link>
        </div>
        <table className="w-full admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentProducts.map((p: any) => (
              <tr key={p._id}>
                <td className="font-playfair">{p.name}</td>
                <td className="text-aurora-muted">{p.category?.name || '—'}</td>
                <td>
                  {p.price != null
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }).format(p.price)
                    : 'Price on request'}
                </td>
                <td>
                  <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${p.inStock ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'}`}>
                    {p.inStock ? 'In Stock' : 'Out'}
                  </span>
                </td>
                <td className="text-aurora-muted text-xs">
                  {new Date(p.createdAt).toLocaleDateString('en-PK', {
                    day: 'numeric', month: 'short', year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
            {recentProducts.length === 0 && !loading && (
              <tr><td colSpan={5} className="text-center text-aurora-muted py-6">No products yet.</td></tr>
            )}
            {loading && (
              <tr><td colSpan={5} className="text-center text-aurora-muted py-6">Loading...</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { href: '/admin/products/new', label: 'Add New Product', icon: '+' },
          { href: '/admin/categories', label: 'Manage Categories', icon: '≡' },
          { href: '/admin/inquiries', label: 'View Inquiries', icon: '✉' },
        ].map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="border border-[rgba(240,192,64,0.15)] p-5 flex items-center gap-4 hover:border-gold hover:bg-[rgba(240,192,64,0.03)] transition-all duration-200 group"
          >
            <span className="text-gold text-lg group-hover:scale-110 transition-transform">{icon}</span>
            <span className="text-sm text-aurora-muted group-hover:text-gold transition-colors">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
