'use client';
import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import ProductCard from '@/components/ui/ProductCard';
import Footer from '@/components/layout/Footer';

const CATEGORIES = [
  { label: 'All', value: '' },
  { label: 'Garden Fountains', value: 'garden-fountains' },
  { label: 'Ceiling Medallions', value: 'ceiling-medallions' },
  { label: 'Sculptures', value: 'sculptures' },
  { label: 'Custom Pieces', value: 'custom-pieces' },
];

const SORTS = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

interface ProductType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  images: string[];
  featured: boolean;
  category: { name: string; slug: string };
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ sort, page: String(page), limit: '9' });
      if (category) params.set('category', category);
      const { data } = await api.get(`/products?${params}`);
      setProducts(data.products);
      setTotal(data.total);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [category, sort, page]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const handleCategory = (val: string) => {
    setCategory(val);
    setPage(1);
    const params = new URLSearchParams();
    if (val) params.set('category', val);
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="pt-28 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Our Works</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-normal mb-8">Full Collection</h1>
          <div className="gold-divider mb-0" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[260px_1fr] gap-10">
        {/* Sidebar */}
        <aside>
          <div className="sticky top-24">
            <div className="mb-6 pb-5 border-b border-[rgba(240,192,64,0.15)]">
              <div className="font-playfair text-lg mb-1">Filter</div>
              <div className="text-xs text-aurora-muted">Refine your search</div>
            </div>
            <div className="mb-6">
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-3">Category</div>
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  onClick={() => handleCategory(c.value)}
                  className={`block w-full text-left py-2 text-sm transition-colors ${
                    category === c.value ? 'text-gold' : 'text-aurora-muted hover:text-aurora-text'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-aurora-muted text-sm">{loading ? '...' : `${total} products`}</span>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              className="bg-aurora-card border border-[rgba(240,192,64,0.2)] text-aurora-text text-sm px-4 py-2 outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(240,192,64,0.1)]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-aurora-card animate-pulse">
                  <div className="aspect-[4/3] bg-[#1a1a1a]" />
                  <div className="p-5 space-y-2">
                    <div className="h-2 bg-[#1a1a1a] rounded w-1/3" />
                    <div className="h-4 bg-[#1a1a1a] rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-3 gap-px bg-[rgba(240,192,64,0.1)]"
            >
              {products.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-aurora-muted">No products found.</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
