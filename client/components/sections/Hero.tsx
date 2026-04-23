'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(240,192,64,0.06)_0%,transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,192,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,192,64,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="section-label mb-6">Lahore, Pakistan · Est. 2018</div>
          <h1 className="font-playfair text-5xl md:text-6xl leading-[1.08] font-normal mb-6">
            Crafted in<br />
            <em className="text-gold not-italic">Concrete.</em><br />
            Built to Last.
          </h1>
          <p className="text-aurora-muted text-base leading-relaxed font-light mb-8 max-w-md">
            Every piece begins as raw material and ends as an heirloom. Handcrafted ceiling medallions, garden fountains, and ornamental sculptures for spaces that demand permanence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary">View Collection</Link>
            <Link href="/contact" className="btn-ghost">Request a Quote</Link>
          </div>

          <div className="flex gap-10 mt-10 pt-8 border-t border-[rgba(240,192,64,0.15)]">
            {[['200+', 'Pieces Crafted'], ['8+', 'Years Experience'], ['100%', 'Handmade']].map(
              ([num, label]) => (
                <div key={label}>
                  <span className="font-playfair text-2xl text-gold block">{num}</span>
                  <span className="text-[0.7rem] tracking-[0.2em] uppercase text-aurora-muted">{label}</span>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 relative overflow-hidden border border-[rgba(240,192,64,0.2)]">
            <img
              src="https://placehold.co/700x360/111111/f0c040?text=Victorian+Ceiling+Medallion"
              alt="Ceiling medallion"
              className="w-full h-64 object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(240,192,64,0.06)] to-transparent pointer-events-none" />
          </div>
          <div className="relative overflow-hidden border border-[rgba(240,192,64,0.2)]">
            <img
              src="https://placehold.co/340x200/161616/f0c040?text=Garden+Fountain"
              alt="Garden fountain"
              className="w-full h-40 object-cover brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(240,192,64,0.06)] to-transparent pointer-events-none" />
          </div>
          <div className="relative overflow-hidden border border-[rgba(240,192,64,0.2)]">
            <img
              src="https://placehold.co/340x200/111111/b8942a?text=Lion+Plaque"
              alt="Lion sculpture"
              className="w-full h-40 object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(240,192,64,0.06)] to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
