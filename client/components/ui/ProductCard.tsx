import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  slug: string;
  price?: number;
  shortDescription?: string;
  images: string[];
  featured: boolean;
  category: { name: string; slug: string };
}

function formatPrice(price?: number) {
  return price != null
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(price)
    : 'Price on request';
}

export default function ProductCard({ product }: { product: Product }) {
  const img = product.images?.[0] || `https://placehold.co/600x600/111111/f0c040?text=${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-aurora-card overflow-hidden transition-all duration-400 hover:shadow-[0_0_30px_rgba(240,192,64,0.2)]">
      <div className="relative aspect-[4/3] bg-[#111111]">
        <Image
          src={img}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 bg-gold text-aurora-black text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 font-medium z-10">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-1.5">
          {product.category?.name}
        </div>
        <h3 className="font-playfair text-base font-normal mb-2 leading-snug">{product.name}</h3>
        {product.shortDescription ? (
          <p className="text-aurora-muted text-sm font-light leading-relaxed mb-0 line-clamp-2">
            {product.shortDescription}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-[rgba(240,192,64,0.12)]">
        <span className="text-aurora-text font-medium">
          {formatPrice(product.price)}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="text-[0.72rem] tracking-[0.15em] uppercase text-aurora-muted hover:text-gold transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
