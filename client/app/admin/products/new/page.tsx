'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function AdminProductForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  const isEdit = !!editId;

  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', category: '', shortDescription: '', longDescription: '',
    price: '', dimensions: '', weight: '', material: '',
    inStock: true, featured: false,
  });
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data));
    if (isEdit) {
      api.get(`/products/${editId}`).then(({ data }) => {
        setForm({
          name: data.name, category: data.category?._id || '',
          shortDescription: data.shortDescription, longDescription: data.longDescription || '',
          price: String(data.price), dimensions: data.dimensions || '',
          weight: data.weight || '', material: data.material || '',
          inStock: data.inStock, featured: data.featured,
        });
      });
    }
  }, [editId, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      images.forEach((f) => fd.append('images', f));

      if (isEdit) {
        await api.put(`/products/${editId}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('Product updated');
      } else {
        await api.post('/products', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        toast.success('Product created');
      }
      router.push('/admin/products');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="input-aurora"
        placeholder={placeholder}
        value={String(form[key])}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      />
    </div>
  );

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="font-playfair text-3xl font-normal mb-8">{isEdit ? 'Edit Product' : 'Add Product'}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Basic Info</div>
          {field('name', 'Product Name', 'text', '3-Tier Classical Garden Fountain')}
          <div>
            <label className="form-label">Category</label>
            <select
              required
              className="w-full bg-transparent border-b border-[rgba(240,192,64,0.25)] py-2 text-aurora-text outline-none"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select a category</option>
              {categories.map((c: any) => (
                <option key={c._id} value={c._id} className="bg-[#111]">{c.name}</option>
              ))}
            </select>
          </div>
          {field('price', 'Price (Rs.)', 'number', '45000')}
          <div>
            <label className="form-label">Short Description</label>
            <input className="input-aurora" placeholder="A brief one-line description..."
              value={form.shortDescription}
              onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
          </div>
          <div>
            <label className="form-label">Long Description</label>
            <textarea rows={4} className="input-aurora resize-none"
              placeholder="Full product description..."
              value={form.longDescription}
              onChange={(e) => setForm({ ...form, longDescription: e.target.value })} />
          </div>
        </div>

        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Specifications</div>
          <div className="grid grid-cols-2 gap-5">
            {field('dimensions', 'Dimensions', 'text', '90cm × 150cm')}
            {field('weight', 'Weight', 'text', '85 kg')}
            {field('material', 'Material', 'text', 'Reinforced concrete composite')}
          </div>
        </div>

        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-4">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">Settings</div>
          <div className="flex gap-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.inStock}
                onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
                className="accent-gold" />
              <span className="text-sm text-aurora-muted">In Stock</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="accent-gold" />
              <span className="text-sm text-aurora-muted">Featured (shows on homepage)</span>
            </label>
          </div>
        </div>

        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-4">Images</div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setImages(Array.from(e.target.files || []))}
            className="text-sm text-aurora-muted"
          />
          {images.length > 0 && (
            <p className="text-xs text-gold mt-2">{images.length} file(s) selected</p>
          )}
        </div>

        <div className="flex gap-4">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? 'Saving...' : isEdit ? 'Update Product' : 'Create Product'}
          </button>
          <button type="button" onClick={() => router.push('/admin/products')} className="btn-ghost">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
