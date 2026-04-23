'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do you ship across Pakistan?',
    a: 'Yes. We deliver to all major cities including Lahore, Karachi, Islamabad, Peshawar, and Faisalabad. Shipping costs depend on weight and distance — contact us for a quote.',
  },
  {
    q: 'Can I place a custom order?',
    a: 'Absolutely. We accept fully custom concrete pieces — bring your design, reference image, or idea and we will quote you within 24 hours.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard products ship within 3–5 working days. Custom orders take 7–14 working days depending on complexity.',
  },
  {
    q: 'Are your products weatherproof?',
    a: 'Yes. All outdoor pieces are sealed with a waterproof concrete sealant. We recommend re-sealing once a year for maximum durability.',
  },
  {
    q: 'What is the minimum order for fountains?',
    a: 'There is no minimum — you can order a single fountain. However, bulk orders of 3+ pieces qualify for a 10% discount.',
  },
  {
    q: 'Do you install the fountain on-site?',
    a: 'We offer installation services in Lahore only. For other cities, we provide a detailed installation guide with every order.',
  },
  {
    q: 'What materials do you use?',
    a: 'We use high-strength Portland cement mixed with fine aggregate, reinforced with fiber mesh where needed. No hollow or plastic cores.',
  },
  {
    q: 'How do I care for concrete products indoors?',
    a: 'Wipe with a damp cloth. Avoid acidic cleaners. Indoor pieces do not need sealing but benefit from occasional waxing for a polished look.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-[rgba(240,192,64,0.12)] last:border-0"
      style={open ? { borderLeft: '3px solid #f0c040', paddingLeft: '16px', marginLeft: '-16px' } : {}}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-playfair text-base group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gold text-2xl leading-none flex-shrink-0 select-none"
          style={{ display: 'inline-block' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-aurora-muted text-sm leading-[1.85] font-light pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <motion.section
      className="py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label justify-center">Support</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-normal mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-aurora-muted text-sm mt-3 font-light">
            Everything you need to know before ordering
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="pl-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
