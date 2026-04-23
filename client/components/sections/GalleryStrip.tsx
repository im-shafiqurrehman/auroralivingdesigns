'use client';
import { motion } from 'framer-motion';

const tiles = [1, 2, 3, 4, 5, 6];

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
          {tiles.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src={`https://placehold.co/400x400/111111/f0c040?text=Craft+%23${n}`}
                alt={`Craft piece ${n}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-[rgba(240,192,64,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f0c040"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
