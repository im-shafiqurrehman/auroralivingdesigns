import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = { title: 'About — Aurora Living Designs' };

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Our Story</div>
          <h1 className="font-playfair text-5xl md:text-6xl font-normal max-w-3xl leading-[1.08] mb-8">
            Concrete as a medium for permanence
          </h1>
          <div className="gold-divider mb-16" />

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-5">
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                Aurora Living Designs was founded in 2018 by a family of craftsmen who had spent generations working with stone and plaster. When they turned to concrete, they discovered a material that could carry the same detail and weight as stone at a fraction of the cost, and with twice the durability.
              </p>
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                Today, we supply architects, developers, interior designers, and private homeowners across Ontario and surrounding regions in Canada. Our pieces appear in hotels, corporate lobbies, private residences, and gardens across the Greater Toronto Area and Southwestern Ontario.
              </p>
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                Everything we make is hand-cast in our London workshop. No two pieces are identical. That is the point.
              </p>
            </div>
            <div>
              <img
                src="https://placehold.co/600x400/111111/f0c040?text=Workshop"
                alt="Aurora workshop"
                className="w-full h-80 object-cover border border-[rgba(240,192,64,0.2)] brightness-90"
              />
            </div>
          </div>

          {/* Process */}
          <div className="bg-aurora-card border border-[rgba(240,192,64,0.2)] p-12 mb-16">
            <div className="section-label">Craftsmanship</div>
            <h2 className="font-playfair text-3xl font-normal mb-4">From raw material to heirloom</h2>
            <div className="gold-divider mb-10" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                ['01', 'Design', 'Client consultation and technical drawing of the piece to exact specifications.'],
                ['02', 'Sculpting', 'Master model hand-sculpted in clay or plaster by our artisans.'],
                ['03', 'Casting', 'Premium concrete poured and cured under controlled conditions for maximum strength.'],
                ['04', 'Finishing', 'Each surface hand-sanded and sealed, quality checked before delivery.'],
              ].map(([num, title, desc]) => (
                <div key={title} className="text-center">
                  <div className="font-playfair text-5xl text-[rgba(240,192,64,0.15)] mb-4">{num}</div>
                  <h4 className="font-playfair text-base mb-2">{title}</h4>
                  <p className="text-aurora-muted text-sm leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop photos */}
          <div className="section-label">Workshop</div>
          <h2 className="font-playfair text-3xl font-normal mb-4">Our London Studio</h2>
          <div className="gold-divider mb-8" />
          <div className="grid md:grid-cols-3 gap-3">
            {['Mold Room', 'Casting Floor', 'Finishing Station'].map((label) => (
              <img
                key={label}
                src={`https://placehold.co/600x400/161616/f0c040?text=${encodeURIComponent(label)}`}
                alt={label}
                className="w-full h-56 object-cover border border-[rgba(240,192,64,0.15)] brightness-75"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
