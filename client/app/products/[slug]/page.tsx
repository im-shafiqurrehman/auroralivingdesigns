'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import InquiryModal from '@/components/ui/InquiryModal';
import Footer from '@/components/layout/Footer';

interface Product {
  _id: string;
  name: string;
  slug: string;
  price?: number;
  shortDescription?: string;
  longDescription: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  dimensions: string;
  weight: string;
  material: string;
  category: { name: string; slug: string };
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/${slug}`)
      .then(({ data }) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-aurora-muted">Loading...</div>;
  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-playfair text-3xl">Product not found</h1>
      <Link href="/products" className="btn-ghost">Back to Products</Link>
    </div>
  );

  const imgs = product.images?.length > 0
    ? product.images
    : [`https://placehold.co/800x800/111111/f0c040?text=${encodeURIComponent(product.name)}`];
  const priceLabel = product.price != null
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(product.price)
    : 'Price on request';

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.15em] text-aurora-muted mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          {' / '}
          <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
          {' / '}
          <span className="text-gold">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative aspect-square border border-[rgba(240,192,64,0.2)] mb-3 bg-[#111111]">
              <img
                src={imgs[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square border bg-[#111111] transition-all ${
                    activeImg === i
                      ? 'border-gold opacity-100'
                      : 'border-[rgba(240,192,64,0.15)] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2">
              {product.category?.name}
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-normal leading-snug mb-4">{product.name}</h1>
            <div className="text-2xl text-gold font-light mb-6">{priceLabel}</div>
            {product.shortDescription ? (
              <p className="text-aurora-muted leading-[1.9] text-sm font-light mb-6">{product.shortDescription}</p>
            ) : null}
            {product.longDescription && (
              <p className="text-aurora-muted leading-[1.9] text-sm font-light mb-6">{product.longDescription}</p>
            )}

            {/* Specs */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {[
                ['Dimensions', product.dimensions],
                ['Weight', product.weight],
                ['Material', product.material],
                ['Availability', product.inStock ? 'In Stock' : 'Made to Order'],
                ['Lead Time', '10–14 Business Days'],
                ['Finish', 'Hand-sanded, sealed'],
              ].filter(([, v]) => v).map(([label, value]) => (
                <div key={label} className="bg-[#161616] border border-[rgba(240,192,64,0.1)] p-3">
                  <div className="text-[0.62rem] tracking-[0.15em] uppercase text-aurora-muted mb-0.5">{label}</div>
                  <div className={`text-sm ${label === 'Availability' && product.inStock ? 'text-green-400' : ''}`}>{value}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary w-full mb-3"
            >
              Get Quotation
            </button>
            <Link href="/contact" className="btn-ghost w-full block text-center">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      <InquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productId={product._id}
        productName={product.name}
        price={product.price}
      />

      <Footer />
    </>
  );
}
