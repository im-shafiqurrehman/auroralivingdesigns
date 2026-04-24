'use client';
import { useAuthStore } from '@/lib/auth';

export default function AdminSettings() {
  const { user } = useAuthStore();

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-10">
        <h1 className="font-playfair text-3xl font-normal">Settings</h1>
        <p className="text-aurora-muted text-sm mt-1">
          Admin account and platform configuration.
        </p>
      </div>

      {/* Admin Profile Card */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-6">
        <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
          Admin Profile
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-[rgba(240,192,64,0.08)]">
            <div>
              <div className="text-[0.68rem] tracking-[0.18em] uppercase text-aurora-muted mb-0.5">
                Name
              </div>
              <div className="text-sm">{user?.name || '—'}</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-[rgba(240,192,64,0.08)]">
            <div>
              <div className="text-[0.68rem] tracking-[0.18em] uppercase text-aurora-muted mb-0.5">
                Email
              </div>
              <div className="text-sm">{user?.email || '—'}</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <div className="text-[0.68rem] tracking-[0.18em] uppercase text-aurora-muted mb-0.5">
                Role
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">{user?.role}</span>
                <span className="text-[0.62rem] tracking-widest uppercase border border-gold text-gold px-2 py-0.5">
                  Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Info (placeholder) */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-6">
        <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
          Store Information
        </div>
        <div className="space-y-5">
          {[
            ['Store Name', 'Aurora Living Designs'],
            ['Contact Email', 'info@auroralivingdesigns.online'],
            ['WhatsApp', '+1 (226) 998-1419'],
            ['Location', '280 Hamilton Rd, London, Ontario'],
            ['Map', 'https://www.google.com/maps?q=280+Hamilton+Rd,+London,+Ontario'],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="text-[0.68rem] tracking-[0.18em] uppercase text-aurora-muted mb-1">
                {label}
              </div>
              <div className="text-sm text-aurora-muted border-b border-[rgba(240,192,64,0.1)] pb-2">
                {value}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[0.65rem] text-aurora-muted mt-6 leading-relaxed">
          ⚙ Full settings management (password change, store config, email
          templates) is coming in a future update.
        </p>
      </div>

    </div>
  );
}
