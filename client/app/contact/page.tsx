'use client';
import { useState } from 'react';
import Footer from '@/components/layout/Footer';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/inquiries', form);
      toast.success('Inquiry sent. We will respond within 24 hours.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Get in Touch</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-normal mb-4">Commission a Piece</h1>
          <div className="gold-divider mb-14" />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-aurora-muted leading-[1.9] text-base font-light mb-10">
                We work directly with clients to deliver pieces that fit their space perfectly. Tell us what you have in mind — we respond within one business day.
              </p>
              {[
                ['📍', 'Location', '280 Hamilton Rd, London, Canada'],
                ['🗺️', 'Map', '280 Hamilton Rd, London, Canada'],
                ['✉', 'Email', 'info@auroralivingdesigns.online'],
                ['💬', 'WhatsApp', '+92 300 123 4567'],
                ['🌐', 'Website', 'auroralivingdesigns.online'],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex gap-4 mb-6">
                  <span className="text-gold mt-1 min-w-[20px]">{icon}</span>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.18em] uppercase text-aurora-muted mb-0.5">{label}</div>
                    <div className="text-sm font-light">{value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-8 border border-[rgba(240,192,64,0.2)] bg-aurora-card overflow-hidden">
                <iframe
                  title="Aurora Living Designs Map"
                  src="https://www.google.com/maps?q=280+Hamilton+Rd,+London,+Canada&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-8 p-5 bg-aurora-card border border-[rgba(240,192,64,0.18)]">
                <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Business Hours</div>
                <p className="text-aurora-muted text-sm leading-relaxed font-light">
                  Monday – Saturday: 9:00 AM – 6:00 PM<br />
                  Sunday: By appointment only
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-aurora-card border border-[rgba(240,192,64,0.2)] p-8">
              <h2 className="font-playfair text-xl mb-1">Send an Inquiry</h2>
              <p className="text-aurora-muted text-sm mb-7">We'll respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">First Name</label>
                    <input required className="input-aurora" placeholder="Ahmed" value={form.name.split(' ')[0]}
                      onChange={(e) => setForm({ ...form, name: `${e.target.value} ${form.name.split(' ')[1] || ''}`.trim() })} />
                  </div>
                  <div>
                    <label className="form-label">Last Name</label>
                    <input className="input-aurora" placeholder="Khan"
                      onChange={(e) => setForm({ ...form, name: `${form.name.split(' ')[0] || ''} ${e.target.value}`.trim() })} />
                  </div>
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input required type="email" className="input-aurora" placeholder="ahmed@example.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Phone / WhatsApp</label>
                  <input className="input-aurora" placeholder="+92 300 000 0000"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea required rows={4} className="input-aurora resize-none" placeholder="Describe the piece you're interested in, your space dimensions, and any custom requirements..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
