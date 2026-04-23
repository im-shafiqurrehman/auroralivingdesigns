import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  images: string[];
  featured: boolean;
  category: { name: string; slug: string };
}

export default function ProductCard({ product }: { product: Product }) {
  const img = product.images?.[0] || `https://placehold.co/600x600/111111/f0c040?text=${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-aurora-card group overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(240,192,64,0.2)]">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={img}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 bg-gold text-aurora-black text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 font-medium z-10">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-1.5">
          {product.category?.name}
        </div>
        <h3 className="font-playfair text-base font-normal mb-2 leading-snug">{product.name}</h3>
        <p className="text-aurora-muted text-sm font-light leading-relaxed mb-0 line-clamp-2">
          {product.shortDescription}
        </p>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-[rgba(240,192,64,0.12)]">
        <span className="text-aurora-text font-medium">
          Rs. {product.price.toLocaleString()}
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
