'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 15,  suffix: '+', label: 'Years of Craftsmanship' },
  { value: 200, suffix: '+', label: 'Custom Designs' },
  { value: 100, suffix: '%', label: 'Handmade in Canada' },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 2000;
    const interval = 16;
    const increment = target / (duration / interval);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#111111] border-y border-[rgba(240,192,64,0.15)]">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className={[
              'flex flex-col items-center justify-center py-14 px-6 text-center',
              i < stats.length - 1 ? 'border-r border-[rgba(240,192,64,0.15)]' : '',
              i < 2 ? 'border-b md:border-b-0 border-[rgba(240,192,64,0.15)]' : '',
            ].join(' ')}
          >
            <div className="font-playfair text-5xl text-gold leading-none mb-3">
              <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
            </div>
            <div className="text-[0.7rem] tracking-[0.22em] uppercase text-[#b8942a]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
