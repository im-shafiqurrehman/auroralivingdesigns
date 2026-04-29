import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Testimonials from '@/components/sections/Testimonials';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
import GalleryStrip from '@/components/sections/GalleryStrip';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/layout/Footer';
import api from '@/lib/api';
import ProductCard from '@/components/ui/ProductCard';

async function getFeaturedProducts() {
  try {
    const { data } = await api.get('/products?featured=true&limit=3');
    return data.products;
  } catch {
    return [];
  }
}

const categories = [
  {
    name: 'Wood Antiques Restoration',
    slug: 'wood-antiques-restoration',
    icon: '🪵',
    label: 'Restoration & Crafting',
  },
  {
    name: 'Gypsum Design & Interiors',
    slug: 'gypsum-design-interiors',
    icon: '◈',
    label: 'Interior & Exterior',
  },
  {
    name: 'Custom TV Walls',
    slug: 'gypsum-design-interiors',
    icon: '▣',
    label: 'Feature Walls',
  },
  {
    name: 'Custom Pieces',
    slug: 'custom-pieces',
    icon: '✦',
    label: 'Bespoke',
  },
];

export default async function HomePage() {
  const featured = await getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Category strip */}
      <div className="bg-aurora-card border-y border-[rgba(240,192,64,0.2)]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.slug}`}
              className={`p-8 flex flex-col gap-2 hover:bg-[rgba(240,192,64,0.04)] transition-colors duration-300 ${
                i < categories.length - 1 ? 'border-r border-[rgba(240,192,64,0.15)]' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-[rgba(240,192,64,0.15)]' : ''}`}
            >
              <span className="text-3xl mb-1">{cat.icon}</span>
              <span className="font-playfair text-sm">{cat.name}</span>
              <span className="text-[0.7rem] tracking-[0.15em] text-gold">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
            <div>
              <div className="section-label">Featured Works</div>
              <h2 className="font-playfair text-3xl md:text-4xl font-normal">Signature Services</h2>
            </div>
            <Link href="/products" className="btn-ghost self-start md:self-auto">
              View All Services
            </Link>
          </div>
          <div className="gold-divider mb-10" />
          {featured.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(240,192,64,0.12)]">
              {featured.map((p: Parameters<typeof ProductCard>[0]['product']) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-px bg-[rgba(240,192,64,0.12)]">
              {[
                { name: 'Antique Dining Table Restoration', category: 'Wood Antiques Restoration', price: 15000 },
                { name: 'Custom Gypsum TV Wall Unit', category: 'Gypsum Design & Interiors', price: 45000 },
                { name: 'Gypsum Ceiling Design & Installation', category: 'Gypsum Design & Interiors', price: 30000 },
              ].map((p) => (
                <div key={p.name} className="bg-aurora-card p-5">
                  <div className="aspect-[4/3] bg-[#161616] border border-[rgba(240,192,64,0.1)] mb-4 flex items-center justify-center">
                    <span className="text-aurora-muted text-xs">Image</span>
                  </div>
                  <div className="text-[0.68rem] tracking-widest uppercase text-gold mb-1">{p.category}</div>
                  <div className="font-playfair text-sm mb-3">{p.name}</div>
                  <div className="text-aurora-text text-sm">Rs. {p.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 px-6 bg-aurora-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[rgba(240,192,64,0.2)] z-0" />
            <img
              src="/workshop.jpg"
              alt="Workshop"
              className="relative z-10 w-full h-96 object-cover brightness-90 contrast-110"
            />
          </div>
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-normal mb-4">
              37+ Years of Craft & Precision
            </h2>
            <div className="w-16 gold-divider mb-6" />
            <p className="text-aurora-muted leading-[1.9] text-base font-light mb-4">
              Aurora Living Designs brings over 37 years of hands-on expertise to every project. From restoring irreplaceable wooden antiques to designing statement gypsum feature walls, every detail is handled personally by our team.
            </p>
            <p className="text-aurora-muted leading-[1.9] text-base font-light mb-8">
              We work with homeowners, interior designers, and developers who value craftsmanship over shortcuts. No subcontracting. No compromises.
            </p>
            <div className="space-y-5">
              {[
                ['01', 'Wood Antiques Restoration', 'Preserving original character while improving durability. Antique furniture, custom woodwork, refinishing, and detailing.'],
                ['02', 'Gypsum Design & Interiors', 'Concept to completion for gypsum ceilings, TV walls, and lighting-integrated designs for interior and exterior spaces.'],
                ['03', 'Outdoor Features', 'Fire pits, water features, garden elements, and bespoke exterior structures built to last.'],
              ].map(([num, title, desc]) => (
                <div key={title} className="flex gap-5 items-start">
                  <span className="font-playfair text-2xl text-[rgba(240,192,64,0.2)] leading-none min-w-[40px]">{num}</span>
                  <div>
                    <h4 className="font-playfair text-sm mb-1">{title}</h4>
                    <p className="text-aurora-muted text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <StatsBar />

      {/* How It's Made — Process */}
      <ProcessSection />

      {/* Testimonials — marquee */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* Instagram / Gallery Strip */}
      <GalleryStrip />

      {/* CTA Banner */}
      <CTABanner />

      <Footer />
    </>
  );
}
