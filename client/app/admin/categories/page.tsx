'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function AdminCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  const fetch = async () => {
    try { const { data } = await api.get('/categories'); setCategories(data); }
    catch { toast.error('Failed to load categories'); }
  };

  useEffect(() => { fetch(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/categories', form);
      toast.success('Category created');
      setForm({ name: '', description: '' });
      setAdding(false);
      fetch();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed');
    } finally { setLoading(false); }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    try { await api.delete(`/categories/${id}`); toast.success('Deleted'); fetch(); }
    catch { toast.error('Delete failed'); }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-playfair text-3xl font-normal">Categories</h1>
        <button onClick={() => setAdding(!adding)} className="btn-primary text-sm py-2.5 px-6">
          {adding ? 'Cancel' : '+ Add Category'}
        </button>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-8 grid md:grid-cols-3 gap-5 items-end">
          <div>
            <label className="form-label">Category Name</label>
            <input required className="input-aurora" placeholder="Garden Fountains"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="form-label">Description</label>
            <input className="input-aurora" placeholder="Brief description"
              value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      )}

      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)]">
        <table className="w-full admin-table">
          <thead><tr><th>Name</th><th>Slug</th><th>Description</th><th>Actions</th></tr></thead>
          <tbody>
            {categories.map((c: any) => (
              <tr key={c._id}>
                <td className="font-playfair">{c.name}</td>
                <td className="text-aurora-muted text-xs tracking-widest">{c.slug}</td>
                <td className="text-aurora-muted">{c.description || '—'}</td>
                <td>
                  <button onClick={() => handleDelete(c._id, c.name)}
                    className="border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr><td colSpan={4} className="text-center text-aurora-muted py-8">No categories yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
