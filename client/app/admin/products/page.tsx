'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const { data } = await api.get('/products?limit=50');
      setProducts(data.products);
    } catch { toast.error('Failed to load products'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
      await api.delete(`/products/${id}`);
      toast.success('Product deleted');
      fetch();
    } catch { toast.error('Delete failed'); }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-playfair text-3xl font-normal">Products</h1>
        <Link href="/admin/products/new" className="btn-primary text-sm py-2.5 px-6">
          + Add Product
        </Link>
      </div>

      <div className="bg-aurora-card border border-[rgba(240,192,64,0.18)]">
        {loading ? (
          <div className="text-center text-aurora-muted py-10">Loading...</div>
        ) : (
          <table className="w-full admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p: any) => (
                <tr key={p._id}>
                  <td className="font-playfair">{p.name}</td>
                  <td className="text-aurora-muted">{p.category?.name}</td>
                  <td>Rs. {p.price?.toLocaleString()}</td>
                  <td>
                    <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${p.inStock ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'}`}>
                      {p.inStock ? 'In Stock' : 'Out'}
                    </span>
                  </td>
                  <td>
                    <span className={`text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ${p.featured ? 'text-gold border-gold' : 'text-aurora-muted border-aurora-muted'}`}>
                      {p.featured ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/products/new?edit=${p._id}`}
                        className="border border-[rgba(240,192,64,0.2)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p._id, p.name)}
                        className="border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr><td colSpan={6} className="text-center text-aurora-muted py-8">No products yet.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
