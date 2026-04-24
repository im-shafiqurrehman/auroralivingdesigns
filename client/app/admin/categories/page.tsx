'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface FormState {
  name: string;
  description: string;
  image: string;
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', description: '', image: '' });
  const [slugPreview, setSlugPreview] = useState('');

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
    } catch {
      toast.error('Failed to load categories');
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  useEffect(() => {
    setSlugPreview(slugify(form.name));
  }, [form.name]);

  const resetForm = () => {
    setForm({ name: '', description: '', image: '' });
    setAdding(false);
    setEditId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        await api.put(`/categories/${editId}`, form);
        toast.success('Category updated');
      } else {
        await api.post('/categories', form);
        toast.success('Category created');
      }
      resetForm();
      fetchCategories();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (cat: Category) => {
    setForm({ name: cat.name, description: cat.description || '', image: cat.image || '' });
    setEditId(cat._id);
    setAdding(false);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete category "${name}"? Products in this category will lose their category assignment.`)) return;
    try {
      await api.delete(`/categories/${id}`);
      toast.success('Category deleted');
      fetchCategories();
    } catch {
      toast.error('Delete failed');
    }
  };

  const inputClass = 'w-full bg-transparent border-b border-[rgba(240,192,64,0.2)] pb-2 pt-1 text-aurora-text text-sm outline-none focus:border-gold transition-colors placeholder-aurora-muted';
  const labelClass = 'block text-[0.68rem] tracking-[0.2em] uppercase text-aurora-muted mb-2';

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-normal">Categories</h1>
          <p className="text-aurora-muted text-sm mt-1">{categories.length} total</p>
        </div>
        <button
          onClick={() => { resetForm(); setAdding(!adding); }}
          className="btn-primary text-sm py-2.5 px-6"
        >
          {adding ? '× Cancel' : '+ Add Category'}
        </button>
      </div>

      {/* Add / Edit Form */}
      {(adding || editId) && (
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.25)] p-6 mb-8">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
            {editId ? 'Edit Category' : 'New Category'}
          </div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Category Name *</label>
              <input
                required
                type="text"
                className={inputClass}
                placeholder="Garden Fountains"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {form.name && (
                <p className="text-[0.62rem] text-aurora-muted mt-1.5">
                  Slug: <span className="text-gold">{slugPreview}</span>
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>Description</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Brief category description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Image URL</label>
              <input
                type="text"
                className={inputClass}
                placeholder="https://..."
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
            <div className="flex items-end gap-3">
              <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                {loading ? 'Saving...' : editId ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={resetForm} className="btn-ghost">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] overflow-x-auto">
        <table className="w-full admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c._id} className={editId === c._id ? 'bg-[rgba(240,192,64,0.03)]' : ''}>
                <td className="font-playfair">{c.name}</td>
                <td className="text-aurora-muted text-xs tracking-widest font-mono">{c.slug}</td>
                <td className="text-aurora-muted max-w-[260px] truncate">{c.description || '—'}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(c)}
                      className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c._id, c.name)}
                      className="border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-aurora-muted py-8">No categories yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
