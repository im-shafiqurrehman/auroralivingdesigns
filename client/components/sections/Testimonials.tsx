'use client';

const reviews = [
  {
    name: 'Sana Malik',
    location: 'Lahore',
    stars: 5,
    text: 'Ordered a 3-tier fountain for our farmhouse. The quality is unreal — solid, heavy, beautifully finished. Got so many compliments from guests.',
  },
  {
    name: 'Ahmed Raza',
    location: 'Karachi',
    stars: 5,
    text: 'Custom ceiling medallion for our drawing room. They matched the reference exactly. Delivery was on time and packaging was excellent.',
  },
  {
    name: 'Fatima Noor',
    location: 'Islamabad',
    stars: 5,
    text: 'Bought two lion head planters. They look straight out of an Italian villa. Will definitely order again.',
  },
  {
    name: 'Bilal Chaudhry',
    location: 'Faisalabad',
    stars: 4,
    text: 'Great craftsmanship. Slight delay in delivery but the final product was worth the wait. Highly recommend for outdoor decor.',
  },
  {
    name: 'Hina Tariq',
    location: 'Lahore',
    stars: 5,
    text: 'The attention to detail is incredible. You can tell real artisans made this — not a factory. Our garden looks transformed.',
  },
  {
    name: 'Usman Shah',
    location: 'Rawalpindi',
    stars: 5,
    text: 'Ordered a custom birdbath. They sent photos at every stage of production. The communication was excellent and the result was perfect.',
  },
  {
    name: 'Maryam Iqbal',
    location: 'Multan',
    stars: 5,
    text: 'I was skeptical ordering online but the fountain arrived exactly as shown, packed perfectly. Installation guide was clear and easy to follow.',
  },
  {
    name: 'Tariq Mehmood',
    location: 'Peshawar',
    stars: 4,
    text: 'Good quality concrete, well-finished. A little heavy to move around but that is expected. Solid purchase for anyone serious about garden aesthetics.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? 'text-gold' : 'text-[#333]'} style={{ fontSize: '13px' }}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="bg-[#111111] border border-[rgba(240,192,64,0.15)] p-6 relative flex-shrink-0 w-[300px] md:w-[340px]"
      style={{ margin: '0 12px' }}
    >
      <div
        className="font-playfair text-5xl text-gold absolute top-3 right-5 opacity-25 leading-none select-none"
        aria-hidden
      >
        "
      </div>
      <Stars count={review.stars} />
      <p className="text-[#c8c8c0] text-sm leading-[1.85] italic font-light mb-5 pr-4">{review.text}</p>
      <div className="text-gold text-[0.72rem] tracking-[0.15em] uppercase">{review.name}</div>
      <div className="text-aurora-muted text-xs mt-0.5">{review.location}</div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate reviews for seamless loop
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews, ...reviews];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <div className="section-label justify-center">Client Stories</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-normal mt-2">
          What Our Clients Say
        </h2>
        <div className="gold-divider mt-6 max-w-xs mx-auto" />
      </div>

      {/* Row 1 — scrolls left */}
      <div className="reviews-wrapper mb-4" style={{ overflow: 'hidden' }}>
        <div className="reviews-track reviews-track-left" style={{ display: 'flex', width: 'max-content' }}>
          {row1.map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="reviews-wrapper" style={{ overflow: 'hidden' }}>
        <div className="reviews-track reviews-track-right" style={{ display: 'flex', width: 'max-content' }}>
          {row2.map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .reviews-track-left {
          animation: marquee-left 35s linear infinite;
        }
        .reviews-track-right {
          animation: marquee-right 35s linear infinite;
        }
        .reviews-wrapper:hover .reviews-track-left,
        .reviews-wrapper:hover .reviews-track-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
