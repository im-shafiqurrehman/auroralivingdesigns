'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import toast from 'react-hot-toast';

interface Product {
  _id: string;
  name: string;
  category?: { name: string };
  price: number;
  inStock: boolean;
  featured: boolean;
  images: string[];
  createdAt: string;
}

interface ConfirmModal {
  open: boolean;
  id: string;
  name: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [confirm, setConfirm] = useState<ConfirmModal>({ open: false, id: '', name: '' });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: '100' });
      if (categoryFilter) params.set('category', categoryFilter);
      const { data } = await api.get(`/products?${params}`);
      setProducts(data.products);
    } catch {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [categoryFilter]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data)).catch(() => {});
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async () => {
    try {
      await api.delete(`/products/${confirm.id}`);
      toast.success('Product deleted');
      setConfirm({ open: false, id: '', name: '' });
      fetchProducts();
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="p-8">
      {/* Confirmation Modal */}
      {confirm.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.75)]">
          <div className="bg-[#111111] border border-[rgba(240,192,64,0.25)] p-8 max-w-sm w-full mx-4">
            <h3 className="font-playfair text-xl mb-3">Confirm Delete</h3>
            <p className="text-aurora-muted text-sm mb-6 leading-relaxed">
              Are you sure you want to delete{' '}
              <span className="text-aurora-text font-medium">
                &quot;{confirm.name}&quot;
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="flex-1 border border-red-500 text-red-400 py-2.5 text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirm({ open: false, id: '', name: '' })}
                className="flex-1 btn-ghost py-2.5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-normal">Products</h1>
          <p className="text-aurora-muted text-sm mt-1">{filtered.length} items</p>
        </div>
        <Link href="/admin/products/new" className="btn-primary text-sm py-2.5 px-6">
          + Add Product
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full bg-aurora-card border border-[rgba(240,192,64,0.18)] px-4 py-2.5 text-sm text-aurora-text placeholder-aurora-muted outline-none focus:border-[rgba(240,192,64,0.4)] transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-aurora-card border border-[rgba(240,192,64,0.18)] px-4 py-2.5 text-sm text-aurora-muted outline-none focus:border-[rgba(240,192,64,0.4)] transition-colors min-w-[180px]"
        >
          <option value="">All Categories</option>
          {categories.map((c: any) => (
            <option key={c._id} value={c.slug} className="bg-[#111]">
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)] overflow-x-auto">
        {loading ? (
          <div className="text-center text-aurora-muted py-12">Loading...</div>
        ) : (
          <table className="w-full admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p._id}>
                  <td>
                    <div className="w-12 h-12 border border-[rgba(240,192,64,0.1)] overflow-hidden flex items-center justify-center bg-[#0d0d0d] flex-shrink-0">
                      {p.images?.[0] ? (
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-aurora-muted text-[0.55rem] text-center leading-tight px-1">
                          No img
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="font-playfair max-w-[180px]">
                    <span className="line-clamp-1 block">{p.name}</span>
                  </td>
                  <td className="text-aurora-muted">{p.category?.name || '—'}</td>
                  <td className="whitespace-nowrap">Rs. {p.price?.toLocaleString()}</td>
                  <td>
                    <span
                      className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 whitespace-nowrap ${
                        p.inStock
                          ? 'text-green-400 border-green-400'
                          : 'text-red-400 border-red-400'
                      }`}
                    >
                      {p.inStock ? 'In Stock' : 'Out'}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${
                        p.featured
                          ? 'text-gold border-gold'
                          : 'text-aurora-muted border-[rgba(168,159,140,0.25)]'
                      }`}
                    >
                      {p.featured ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {/* Now links to the proper edit/[id] route */}
                      <Link
                        href={`/admin/products/edit/${p._id}`}
                        className="border border-[rgba(240,192,64,0.25)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all whitespace-nowrap"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() =>
                          setConfirm({ open: true, id: p._id, name: p.name })
                        }
                        className="border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center text-aurora-muted py-10">
                    {search || categoryFilter
                      ? 'No products match your filters.'
                      : 'No products yet. Add your first product.'}
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
