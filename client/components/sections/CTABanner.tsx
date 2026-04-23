'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, #1a1400 0px, #1a1400 1px, transparent 1px, transparent 8px)',
        backgroundColor: '#111111',
      }}
    >
      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(240,192,64,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label justify-center mb-4">Order Now</div>
        <h2 className="font-playfair text-3xl md:text-5xl font-normal mb-4 leading-tight">
          Ready to Order Something Timeless?
        </h2>
        <p className="text-aurora-muted text-base font-light mb-10">
          Reach out today. We respond within a few hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="border border-gold text-gold px-8 py-3 text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-gold hover:text-aurora-black inline-block"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
