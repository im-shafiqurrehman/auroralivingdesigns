'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Mould Design',
    description: 'Custom mould crafted by hand from original master sculptures.',
  },
  {
    number: '02',
    title: 'Concrete Pouring',
    description: 'Premium-grade concrete mix poured and vibration-set for zero voids.',
  },
  {
    number: '03',
    title: 'Finishing & Delivery',
    description: 'Hand-smoothed, sealed, and dispatched with care across Pakistan.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Our Process</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-normal mt-2">
            How It&apos;s Made
          </h2>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting gold line — desktop only */}
          <div
            className="hidden md:block absolute top-[38px] left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, #f0c040 20%, #f0c040 80%, transparent)',
            }}
          />

          <motion.div
            className="grid md:grid-cols-3 gap-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Golden circular badge */}
                <div
                  className="w-[76px] h-[76px] rounded-full border-2 border-gold flex items-center justify-center mb-6 bg-[#0d0d0d]"
                  style={{ boxShadow: '0 0 24px rgba(240,192,64,0.18)' }}
                >
                  <span className="font-playfair text-gold text-xl leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-playfair text-lg mb-2">{step.title}</h3>
                <p className="text-aurora-muted text-sm leading-relaxed font-light max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
