'use client';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/auth';
import api from '@/lib/api';
import toast from 'react-hot-toast';

interface StoreConfig {
  storeName: string;
  contactEmail: string;
  whatsapp: string;
  location: string;
  mapUrl: string;
}

export default function AdminSettings() {
  const { user } = useAuthStore();

  // ── Store config state ──────────────────────────────────────────────────
  const [store, setStore] = useState<StoreConfig>({
    storeName: '',
    contactEmail: '',
    whatsapp: '',
    location: '',
    mapUrl: '',
  });
  const [storeLoading, setStoreLoading] = useState(false);
  const [storeEditing, setStoreEditing] = useState(false);

  // ── Password state ──────────────────────────────────────────────────────
  const [pwForm, setPwForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [pwLoading, setPwLoading] = useState(false);
  const [pwEditing, setPwEditing] = useState(false);

  useEffect(() => {
    api.get('/admin/settings/store')
      .then(({ data }) => setStore(data))
      .catch((err: any) => toast.error(err?.response?.data?.message || 'Failed to load store settings'));
  }, []);

  const handleStoreSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStoreLoading(true);
    try {
      const { data } = await api.put('/admin/settings/store', store);
      setStore(data);
      toast.success('Store settings saved');
      setStoreEditing(false);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Save failed');
    } finally {
      setStoreLoading(false);
    }
  };

  const handlePasswordSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwForm.newPassword !== pwForm.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    if (pwForm.newPassword.length < 8) {
      toast.error('New password must be at least 8 characters');
      return;
    }
    setPwLoading(true);
    try {
      await api.put('/admin/settings/password', {
        currentPassword: pwForm.currentPassword,
        newPassword: pwForm.newPassword,
      });
      toast.success('Password updated');
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setPwEditing(false);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to update password');
    } finally {
      setPwLoading(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border-b border-[rgba(240,192,64,0.25)] pb-2 pt-1 text-aurora-text text-sm outline-none focus:border-gold transition-colors placeholder-aurora-muted';
  const labelClass =
    'block text-[0.68rem] tracking-[0.2em] uppercase text-aurora-muted mb-2';

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-10">
        <h1 className="font-playfair text-3xl font-normal">Settings</h1>
        <p className="text-aurora-muted text-sm mt-1">
          Admin account and platform configuration.
        </p>
      </div>

      {/* ── Admin Profile ──────────────────────────────────────────────── */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-6">
        <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
          Admin Profile
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-[rgba(240,192,64,0.08)]">
            <div>
              <div className={labelClass}>Name</div>
              <div className="text-sm">{user?.name || '—'}</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-[rgba(240,192,64,0.08)]">
            <div>
              <div className={labelClass}>Email</div>
              <div className="text-sm">{user?.email || '—'}</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <div className={labelClass}>Role</div>
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

      {/* ── Change Password ────────────────────────────────────────────── */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">
            Change Password
          </div>
          {!pwEditing && (
            <button
              onClick={() => setPwEditing(true)}
              className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-4 py-1.5 text-[0.65rem] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
            >
              Change
            </button>
          )}
        </div>

        {!pwEditing ? (
          <p className="text-aurora-muted text-sm">
            Password last updated when account was created. Click Change to update.
          </p>
        ) : (
          <form onSubmit={handlePasswordSave} className="space-y-5">
            <div>
              <label className={labelClass}>Current Password</label>
              <input
                required
                type="password"
                className={inputClass}
                placeholder="Enter current password"
                value={pwForm.currentPassword}
                onChange={(e) => setPwForm({ ...pwForm, currentPassword: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>New Password</label>
              <input
                required
                type="password"
                className={inputClass}
                placeholder="Min 8 characters"
                value={pwForm.newPassword}
                onChange={(e) => setPwForm({ ...pwForm, newPassword: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Confirm New Password</label>
              <input
                required
                type="password"
                className={inputClass}
                placeholder="Repeat new password"
                value={pwForm.confirmPassword}
                onChange={(e) => setPwForm({ ...pwForm, confirmPassword: e.target.value })}
              />
            </div>
            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                disabled={pwLoading}
                className="btn-primary disabled:opacity-60 text-sm py-2.5 px-6"
              >
                {pwLoading ? 'Saving...' : 'Update Password'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setPwEditing(false);
                  setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="btn-ghost text-sm py-2.5 px-6"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ── Store Information ──────────────────────────────────────────── */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">
            Store Information
          </div>
          {!storeEditing && (
            <button
              onClick={() => setStoreEditing(true)}
              className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-4 py-1.5 text-[0.65rem] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
            >
              Edit
            </button>
          )}
        </div>

        {!storeEditing ? (
          <div className="space-y-5">
            {[
              ['Store Name', store.storeName],
              ['Contact Email', store.contactEmail],
              ['WhatsApp', store.whatsapp],
              ['Location', store.location],
              ['Map URL', store.mapUrl],
            ].map(([label, value]) => (
              <div key={label}>
                <div className={labelClass}>{label}</div>
                <div className="text-sm text-aurora-muted border-b border-[rgba(240,192,64,0.1)] pb-2">
                  {value || '—'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <form onSubmit={handleStoreSave} className="space-y-5">
            {(
              [
                ['storeName', 'Store Name', 'Aurora Living Designs', 'text'],
                ['contactEmail', 'Contact Email', 'info@example.com', 'email'],
                ['whatsapp', 'WhatsApp', '+1 (000) 000-0000', 'text'],
                ['location', 'Location', '123 Main St, City', 'text'],
                ['mapUrl', 'Google Maps URL', 'https://maps.google.com/...', 'text'],
              ] as [keyof StoreConfig, string, string, string][]
            ).map(([key, label, placeholder, type]) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  type={type}
                  className={inputClass}
                  placeholder={placeholder}
                  value={store[key]}
                  onChange={(e) => setStore({ ...store, [key]: e.target.value })}
                />
              </div>
            ))}
            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                disabled={storeLoading}
                className="btn-primary disabled:opacity-60 text-sm py-2.5 px-6"
              >
                {storeLoading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => setStoreEditing(false)}
                className="btn-ghost text-sm py-2.5 px-6"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
