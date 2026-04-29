'use client';
import { motion } from 'framer-motion';

const tiles = [
  { src: '/1.jpg', alt: 'Craft piece 1' },
  { src: '/2.jpg', alt: 'Craft piece 2' },
  { src: '/3.jpg', alt: 'Craft piece 3' },
  { src: '/4.jpg', alt: 'Craft piece 4' },
  { src: '/5.jpg', alt: 'Craft piece 5' },
  { src: '/6.jpg', alt: 'Craft piece 6' },
];

export default function GalleryStrip() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Gallery</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-normal mt-2">
            Follow Our Work
          </h2>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative aspect-square bg-[#111111]"
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
