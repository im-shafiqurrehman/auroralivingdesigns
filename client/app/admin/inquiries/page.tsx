'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

const STATUS_COLORS: Record<string, string> = {
  new: 'text-gold border-gold',
  read: 'text-green-400 border-green-400',
  replied: 'text-blue-400 border-blue-400',
};

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  const fetch = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: '50' });
      if (filter) params.set('status', filter);
      const { data } = await api.get(`/inquiries?${params}`);
      setInquiries(data.inquiries);
      setTotal(data.total);
    } catch { toast.error('Failed to load inquiries'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, [filter]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await api.put(`/inquiries/${id}`, { status });
      toast.success(`Marked as ${status}`);
      fetch();
    } catch { toast.error('Update failed'); }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-normal">Inquiries</h1>
          <p className="text-aurora-muted text-sm mt-1">{total} total</p>
        </div>
        <div className="flex gap-2">
          {['', 'new', 'read', 'replied'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all ${
                filter === s
                  ? 'border-gold text-gold'
                  : 'border-[rgba(240,192,64,0.2)] text-aurora-muted hover:border-gold hover:text-gold'
              }`}
            >
              {s || 'All'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)]">
        {loading ? (
          <div className="text-center text-aurora-muted py-10">Loading...</div>
        ) : (
          <table className="w-full admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq: any) => (
                <tr key={inq._id}>
                  <td className="font-medium">{inq.name}</td>
                  <td className="text-aurora-muted">{inq.email}</td>
                  <td className="text-aurora-muted">{inq.phone || '—'}</td>
                  <td className="text-aurora-muted">{inq.productRef?.name || '—'}</td>
                  <td className="text-aurora-muted text-xs">
                    {new Date(inq.createdAt).toLocaleDateString('en-PK', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </td>
                  <td>
                    <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${STATUS_COLORS[inq.status] || ''}`}>
                      {inq.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-1.5 flex-wrap">
                      {inq.status !== 'read' && (
                        <button
                          onClick={() => updateStatus(inq._id, 'read')}
                          className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-2.5 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
                        >
                          Read
                        </button>
                      )}
                      {inq.status !== 'replied' && (
                        <button
                          onClick={() => updateStatus(inq._id, 'replied')}
                          className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-2.5 py-1 text-xs uppercase tracking-wider hover:border-blue-400 hover:text-blue-400 transition-all"
                        >
                          Replied
                        </button>
                      )}
                      <a
                        href={`mailto:${inq.email}?subject=Re: Aurora Living Designs Inquiry`}
                        className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-2.5 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
                      >
                        Email
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center text-aurora-muted py-10">
                    No inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Message preview panel */}
      {inquiries.length > 0 && (
        <div className="mt-8 bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-4">Messages</div>
          <div className="space-y-4">
            {inquiries.slice(0, 5).map((inq: any) => (
              <div key={inq._id} className="border-b border-[rgba(240,192,64,0.08)] pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{inq.name}</span>
                  <span className="text-xs text-aurora-muted">
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-aurora-muted text-sm font-light leading-relaxed">{inq.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
