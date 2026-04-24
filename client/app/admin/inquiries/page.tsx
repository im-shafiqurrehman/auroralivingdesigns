'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

const STATUS_COLORS: Record<string, string> = {
  new: 'text-gold border-gold',
  read: 'text-green-400 border-green-400',
  replied: 'text-blue-400 border-blue-400',
};

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  productRef?: { name: string; slug: string } | null;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: '50' });
      if (filter) params.set('status', filter);
      const { data } = await api.get(`/inquiries?${params}`);
      setInquiries(data.inquiries);
      setTotal(data.total);
    } catch {
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInquiries(); }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateStatus = async (id: string, status: string) => {
    try {
      const { data } = await api.put(`/inquiries/${id}`, { status });
      toast.success(`Marked as ${status}`);
      setInquiries((prev) => prev.map((i) => i._id === id ? { ...i, status: data.status } : i));
      if (selected?._id === id) setSelected((prev) => prev ? { ...prev, status: data.status } : null);
    } catch {
      toast.error('Update failed');
    }
  };

  return (
    <div className="p-8 relative">
      {/* Slide-over panel */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0d0d0d] border-l border-[rgba(240,192,64,0.2)] z-50 overflow-y-auto"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-6 border-b border-[rgba(240,192,64,0.12)]">
                <div className="text-[0.75rem] tracking-[0.2em] uppercase text-gold">Inquiry Detail</div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-aurora-muted hover:text-gold text-xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Status badge + actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-[0.62rem] tracking-widest uppercase border px-2.5 py-1 ${STATUS_COLORS[selected.status] || ''}`}>
                    {selected.status}
                  </span>
                  {selected.status !== 'read' && (
                    <button
                      onClick={() => updateStatus(selected._id, 'read')}
                      className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
                    >
                      Mark Read
                    </button>
                  )}
                  {selected.status !== 'replied' && (
                    <button
                      onClick={() => updateStatus(selected._id, 'replied')}
                      className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-blue-400 hover:text-blue-400 transition-all"
                    >
                      Mark Replied
                    </button>
                  )}
                </div>

                {/* Sender details */}
                <div className="space-y-3">
                  <div className="text-[0.68rem] tracking-[0.2em] uppercase text-aurora-muted">From</div>
                  <div className="font-playfair text-lg">{selected.name}</div>
                  <a href={`mailto:${selected.email}`} className="text-gold text-sm hover:underline block">
                    {selected.email}
                  </a>
                  {selected.phone && (
                    <a href={`tel:${selected.phone}`} className="text-aurora-muted text-sm hover:text-gold transition-colors block">
                      {selected.phone}
                    </a>
                  )}
                </div>

                {selected.productRef && (
                  <div className="border-t border-[rgba(240,192,64,0.1)] pt-4">
                    <div className="text-[0.68rem] tracking-[0.2em] uppercase text-aurora-muted mb-2">Product Enquiry</div>
                    <div className="text-aurora-text text-sm">{selected.productRef.name}</div>
                  </div>
                )}

                {/* Message */}
                <div className="border-t border-[rgba(240,192,64,0.1)] pt-4">
                  <div className="text-[0.68rem] tracking-[0.2em] uppercase text-aurora-muted mb-3">Message</div>
                  <p className="text-aurora-muted text-sm leading-[1.85] font-light whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>

                {/* Date */}
                <div className="text-[0.65rem] text-aurora-muted border-t border-[rgba(240,192,64,0.08)] pt-4">
                  Received:{' '}
                  {new Date(selected.createdAt).toLocaleDateString('en-PK', {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </div>

                {/* Reply CTA */}
                <a
                  href={`mailto:${selected.email}?subject=Re: Your Enquiry — Aurora Living Designs`}
                  className="btn-primary w-full text-center block"
                  onClick={() => updateStatus(selected._id, 'replied')}
                >
                  Reply via Email
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-normal">Inquiries</h1>
          <p className="text-aurora-muted text-sm mt-1">{total} total</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {['', 'new', 'read', 'replied'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all ${
                filter === s
                  ? 'border-gold text-gold'
                  : 'border-[rgba(240,192,64,0.18)] text-aurora-muted hover:border-gold hover:text-gold'
              }`}
            >
              {s || 'All'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] overflow-x-auto">
        {loading ? (
          <div className="text-center text-aurora-muted py-10">Loading...</div>
        ) : (
          <table className="w-full admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr
                  key={inq._id}
                  className="cursor-pointer"
                  onClick={() => setSelected(inq)}
                >
                  <td className="font-medium whitespace-nowrap">{inq.name}</td>
                  <td className="text-aurora-muted">{inq.email}</td>
                  <td className="text-aurora-muted whitespace-nowrap">{inq.phone || '—'}</td>
                  <td className="text-aurora-muted max-w-[200px]">
                    <span className="line-clamp-1 block">{inq.message}</span>
                  </td>
                  <td className="text-aurora-muted">{inq.productRef?.name || '—'}</td>
                  <td className="text-aurora-muted text-xs whitespace-nowrap">
                    {new Date(inq.createdAt).toLocaleDateString('en-PK', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 whitespace-nowrap ${STATUS_COLORS[inq.status] || ''}`}>
                      {inq.status}
                    </span>
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1.5">
                      {inq.status !== 'read' && (
                        <button
                          onClick={() => updateStatus(inq._id, 'read')}
                          className="border border-[rgba(240,192,64,0.18)] text-aurora-muted px-2.5 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all whitespace-nowrap"
                        >
                          Read
                        </button>
                      )}
                      {inq.status !== 'replied' && (
                        <button
                          onClick={() => updateStatus(inq._id, 'replied')}
                          className="border border-[rgba(240,192,64,0.18)] text-aurora-muted px-2.5 py-1 text-xs uppercase tracking-wider hover:border-blue-400 hover:text-blue-400 transition-all whitespace-nowrap"
                        >
                          Replied
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center text-aurora-muted py-10">
                    No inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
