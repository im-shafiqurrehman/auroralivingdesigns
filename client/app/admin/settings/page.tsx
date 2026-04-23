'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AdminSettings() {
  const [form, setForm] = useState({
    siteName: 'Aurora Living Designs',
    domain: 'auroralivingdesigns.online',
    whatsapp: '+92 300 123 4567',
    email: 'info@auroralivingdesigns.online',
    address: 'Lahore, Punjab, Pakistan',
    hours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings saved (placeholder — connect to API as needed).');
  };

  const field = (key: keyof typeof form, label: string, type = 'text') => (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="input-aurora"
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      />
    </div>
  );

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="font-playfair text-3xl font-normal mb-8">Settings</h1>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Site Information</div>
          {field('siteName', 'Site Name')}
          {field('domain', 'Domain')}
        </div>

        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Contact Details</div>
          {field('email', 'Contact Email', 'email')}
          {field('whatsapp', 'WhatsApp Number')}
          {field('address', 'Address')}
          {field('hours', 'Business Hours')}
        </div>

        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-4">Security</div>
          <p className="text-aurora-muted text-sm font-light">
            Keep administrator credentials outside the frontend UI. Manage admin accounts from secure backend tooling or database admin workflows only.
          </p>
        </div>

        <button type="submit" className="btn-primary">Save Settings</button>
      </form>
    </div>
  );
}
