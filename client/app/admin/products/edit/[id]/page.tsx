'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import toast from 'react-hot-toast';

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
          checked ? 'bg-gold' : 'bg-[rgba(240,192,64,0.15)]'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </div>
      <span className="text-sm text-aurora-muted group-hover:text-aurora-text transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [categories, setCategories] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slugEdited, setSlugEdited] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const [form, setForm] = useState({
    name: '',
    slug: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    price: '',
    dimensions: '',
    weight: '',
    material: '',
    inStock: true,
    featured: false,
  });

  const set = (key: keyof typeof form, val: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  // Auto-slug from name unless user has manually edited it
  useEffect(() => {
    if (!slugEdited && form.name) {
      set('slug', slugify(form.name));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.name]);

  // Load categories + product data
  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data)).catch(() => {});
    if (id) {
      api
        .get(`/products/${id}`)
        .then(({ data }) => {
          setForm({
            name: data.name || '',
            slug: data.slug || '',
            category: data.category?._id || '',
            shortDescription: data.shortDescription || '',
            longDescription: data.longDescription || '',
            price: String(data.price || ''),
            dimensions: data.dimensions || '',
            weight: data.weight || '',
            material: data.material || '',
            inStock: data.inStock ?? true,
            featured: data.featured ?? false,
          });
          setSlugEdited(true);
          setExistingImages(data.images || []);
        })
        .catch(() => toast.error('Could not load product'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles((prev) => [...prev, ...files]);
    setImagePreviews((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);
  };

  const removeNewImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index: number) =>
    setExistingImages((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category) {
      toast.error('Please select a category');
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      imageFiles.forEach((f) => fd.append('images', f));
      existingImages.forEach((url) => fd.append('existingImages', url));

      await api.put(`/products/${id}`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Product updated successfully');
      router.push('/admin/products');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-[rgba(240,192,64,0.2)] pb-2 pt-1 text-aurora-text text-sm outline-none focus:border-gold transition-colors placeholder-aurora-muted';
  const labelClass =
    'block text-[0.7rem] tracking-[0.2em] uppercase text-aurora-muted mb-2';
  const shortDescLen = form.shortDescription.length;

  if (loading) {
    return (
      <div className="p-8 text-aurora-muted text-sm">Loading product...</div>
    );
  }

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/products"
          className="text-aurora-muted hover:text-gold transition-colors text-sm"
        >
          ← Products
        </Link>
        <span className="text-[rgba(240,192,64,0.25)]">/</span>
        <h1 className="font-playfair text-3xl font-normal">Edit Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">
            Basic Information
          </div>

          <div>
            <label className={labelClass}>Product Name *</label>
            <input
              required
              type="text"
              className={inputClass}
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Slug (URL)</label>
            <input
              type="text"
              className={inputClass}
              value={form.slug}
              onChange={(e) => {
                setSlugEdited(true);
                set('slug', e.target.value);
              }}
            />
            <p className="text-[0.65rem] text-aurora-muted mt-1">
              Auto-generated from name. Edit to customise.
            </p>
          </div>

          <div>
            <label className={labelClass}>Category *</label>
            <select
              required
              className="w-full bg-transparent border-b border-[rgba(240,192,64,0.2)] pb-2 pt-1 text-sm text-aurora-text outline-none focus:border-gold transition-colors"
              value={form.category}
              onChange={(e) => set('category', e.target.value)}
            >
              <option value="">— Select a category —</option>
              {categories.map((c: any) => (
                <option key={c._id} value={c._id} className="bg-[#111]">
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Price (Rs.) *</label>
            <input
              required
              type="number"
              min={0}
              className={inputClass}
              value={form.price}
              onChange={(e) => set('price', e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-end justify-between mb-2">
              <label className={labelClass + ' mb-0'}>Short Description *</label>
              <span
                className={`text-[0.62rem] tabular-nums ${
                  shortDescLen > 160 ? 'text-red-400' : 'text-aurora-muted'
                }`}
              >
                {shortDescLen}/160
              </span>
            </div>
            <input
              required
              className={inputClass}
              value={form.shortDescription}
              onChange={(e) => set('shortDescription', e.target.value)}
              maxLength={180}
            />
          </div>

          <div>
            <label className={labelClass}>Long Description</label>
            <textarea
              rows={5}
              className={inputClass + ' resize-none'}
              value={form.longDescription}
              onChange={(e) => set('longDescription', e.target.value)}
            />
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">
            Specifications
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(
              [
                ['dimensions', 'Dimensions', '90cm × 150cm'],
                ['weight', 'Weight', '85 kg'],
                ['material', 'Material', 'Portland cement, fiber mesh'],
              ] as [keyof typeof form, string, string][]
            ).map(([key, label, placeholder]) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder={placeholder}
                  value={String(form[key])}
                  onChange={(e) => set(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
            Visibility & Stock
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Toggle
              checked={form.inStock}
              onChange={(v) => set('inStock', v)}
              label="In Stock"
            />
            <Toggle
              checked={form.featured}
              onChange={(v) => set('featured', v)}
              label="Featured on Homepage"
            />
          </div>
        </div>

        {/* Images */}
        <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-5">
            Product Images
          </div>

          {/* Existing images */}
          {existingImages.length > 0 && (
            <div className="mb-5">
              <p className={labelClass + ' mb-3'}>Current Images</p>
              <div className="flex flex-wrap gap-3">
                {existingImages.map((url, i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 border border-[rgba(240,192,64,0.2)]"
                  >
                    <img
                      src={url}
                      alt={`img ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(i)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New image previews */}
          {imagePreviews.length > 0 && (
            <div className="mb-5">
              <p className={labelClass + ' mb-3'}>New Images (to upload)</p>
              <div className="flex flex-wrap gap-3">
                {imagePreviews.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 border border-[rgba(240,192,64,0.2)]"
                  >
                    <img
                      src={src}
                      alt={`new ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(i)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <label className="flex items-center gap-3 border border-dashed border-[rgba(240,192,64,0.25)] p-4 cursor-pointer hover:border-gold transition-colors">
            <span className="text-gold text-xl">+</span>
            <div>
              <div className="text-sm text-aurora-muted">Click to add more images</div>
              <div className="text-[0.65rem] text-aurora-muted mt-0.5">
                JPG, PNG, WebP — max 10 MB each
              </div>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-60 min-w-[140px]"
          >
            {saving ? 'Saving...' : 'Update Product'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/products')}
            className="btn-ghost"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
