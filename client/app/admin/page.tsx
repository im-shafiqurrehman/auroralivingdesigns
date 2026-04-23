'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

export default function AdminOverview() {
  const [stats, setStats] = useState({ products: 0, inquiries: 0, categories: 0, newInquiries: 0 });
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      api.get('/products?limit=1'),
      api.get('/inquiries?limit=5'),
      api.get('/categories'),
    ]).then(([pRes, iRes, cRes]) => {
      setStats({
        products: pRes.data.total,
        inquiries: iRes.data.total,
        categories: Array.isArray(cRes.data) ? cRes.data.length : 0,
        newInquiries: iRes.data.inquiries.filter((i: any) => i.status === 'new').length,
      });
      setRecentInquiries(iRes.data.inquiries);
    }).catch(() => {});
  }, []);

  const statusColors: Record<string, string> = {
    new: 'text-gold border-gold',
    read: 'text-green-400 border-green-400',
    replied: 'text-blue-400 border-blue-400',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-playfair text-3xl font-normal">Dashboard Overview</h1>
        <p className="text-aurora-muted text-sm mt-1">Welcome back. Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-10">
        {[
          ['Total Products', stats.products, ''],
          ['Total Inquiries', stats.inquiries, `${stats.newInquiries} new`],
          ['Categories', stats.categories, `${stats.categories} active`],
        ].map(([label, value, sub]) => (
          <div key={String(label)} className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-aurora-muted mb-3">{label}</div>
            <div className="font-playfair text-4xl text-gold">{value}</div>
            {sub && <div className="text-xs text-aurora-muted mt-1">{sub}</div>}
          </div>
        ))}
      </div>

      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(240,192,64,0.1)]">
          <div className="text-[0.78rem] tracking-[0.15em] uppercase text-gold">Recent Inquiries</div>
          <Link href="/admin/inquiries" className="text-xs text-aurora-muted hover:text-gold transition-colors">
            View All
          </Link>
        </div>
        <table className="w-full admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentInquiries.map((inq: any) => (
              <tr key={inq._id}>
                <td>{inq.name}</td>
                <td className="text-aurora-muted">{inq.email}</td>
                <td className="text-aurora-muted">{inq.productRef?.name || '—'}</td>
                <td className="text-aurora-muted">{new Date(inq.createdAt).toLocaleDateString()}</td>
                <td>
                  <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${statusColors[inq.status] || ''}`}>
                    {inq.status}
                  </span>
                </td>
              </tr>
            ))}
            {recentInquiries.length === 0 && (
              <tr><td colSpan={5} className="text-center text-aurora-muted py-6">No inquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
