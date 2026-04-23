'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'The ceiling medallion they crafted for our drawing room is nothing short of extraordinary. The detail work is museum-quality. Our architect was speechless.',
    author: 'Zara Mahmood',
    location: 'Defence Housing Authority, Lahore',
  },
  {
    text: 'We ordered a custom fountain for our corporate lobby. The craftsmanship, the finish, the delivery — everything was flawless. Worth every rupee.',
    author: 'Bilal Chaudhry',
    location: 'Gulberg III, Lahore',
  },
  {
    text: 'Working with Aurora on our boutique hotel project was a pleasure. They understood the aesthetic immediately and delivered pieces that elevated every space.',
    author: 'Nadia Khawaja',
    location: 'Interior Designer, Karachi',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">Client Stories</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-normal mb-4">What Our Clients Say</h2>
        <div className="gold-divider mb-12" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-aurora-card border border-[rgba(240,192,64,0.18)] p-7 relative"
            >
              <div className="font-playfair text-6xl text-gold-dark absolute top-4 right-5 opacity-40 leading-none">"</div>
              <div className="text-gold text-xs tracking-widest mb-4">★★★★★</div>
              <p className="text-aurora-muted text-sm leading-[1.85] italic font-light mb-5">{t.text}</p>
              <div className="text-[0.78rem] tracking-[0.12em] uppercase text-gold">{t.author}</div>
              <div className="text-aurora-muted text-xs mt-1">{t.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
