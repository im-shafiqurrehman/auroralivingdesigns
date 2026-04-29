'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '@/lib/api';
import toast from 'react-hot-toast';

interface Props {
  open: boolean;
  onClose: () => void;
  productId?: string;
  productName?: string;
  price?: number;
}

function formatPrice(price?: number) {
  return price != null
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(price)
    : 'Price on request';
}

export default function InquiryModal({ open, onClose, productId, productName, price }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/inquiries', { ...form, productRef: productId });
      toast.success('Inquiry sent! We will contact you within 24 hours.');
      setForm({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch {
      toast.error('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-aurora-card border border-[rgba(240,192,64,0.25)] p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-aurora-muted hover:text-gold transition-colors text-lg"
            >
              ✕
            </button>
            <h2 className="font-playfair text-xl font-normal mb-1">Get Quotation</h2>
            {productName && (
              <p className="text-aurora-muted text-sm mb-6">
                {productName} — {formatPrice(price)}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="form-label">Your Name</label>
                <input
                  required
                  className="input-aurora"
                  placeholder="Ahmed Khan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  required
                  type="email"
                  className="input-aurora"
                  placeholder="ahmed@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Phone / WhatsApp</label>
                <input
                  className="input-aurora"
                  placeholder="+92 300 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea
                  required
                  rows={3}
                  className="input-aurora resize-none"
                  placeholder="Any custom requirements or questions..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
