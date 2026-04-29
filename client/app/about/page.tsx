import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = { title: 'About — Aurora Living Designs' };

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">About Us</div>
          <h1 className="font-playfair text-5xl md:text-6xl font-normal max-w-4xl leading-[1.08] mb-8">
            Crafted spaces, restored pieces, and features with character
          </h1>
          <div className="gold-divider mb-16" />

          <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="space-y-5">
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                Aurora Living Designs brings together craftsmanship, practical execution, and a long tradition of working with wood, gypsum, and custom features. We design and deliver work that feels personal, durable, and visually refined.
              </p>
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                Our work is built for clients who want more than standard finishes. From antique restoration to custom gypsum features and outdoor installations, we create spaces and pieces that stand out.
              </p>
              <p className="text-aurora-muted text-base leading-[1.9] font-light">
                With 37+ years of experience in the field, we approach every project with an eye for detail, balance, and lasting quality.
              </p>
            </div>
            <div>
              <img
                src="/workshop.png"
                alt="Aurora Living Designs workshop"
                className="w-full h-80 object-cover border border-[rgba(240,192,64,0.2)] brightness-90"
              />
            </div>
          </div>

          <div className="bg-aurora-card border border-[rgba(240,192,64,0.2)] p-8 md:p-10 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                [
                  'Wood Antiques Restoration & Custom Crafting',
                  'We restore, refurbish, and custom craft wooden antiques while preserving their original character and improving durability and finish.',
                  ['Antique furniture restoration', 'Wood repair & refinishing', 'Custom-made wooden pieces', 'Polishing, painting & detailing'],
                ],
                [
                  'Gypsum Design & Interior/Exterior Feature Solutions',
                  'We design and execute modern gypsum board features for both interior and exterior spaces, tailored to your style and layout.',
                  ['Gypsum board walls & ceilings', 'Custom TV wall units', 'Lighting-integrated designs', 'Outdoor features and full execution'],
                ],
                [
                  'Outdoor & Feature Installations',
                  'We create bespoke outdoor and indoor features that bring a strong visual identity to the space while maintaining function and atmosphere.',
                  ['Custom fire pits & fireplaces', 'Water fountains & features', 'Garden and landscape styling', 'Feature walls & ambiance design'],
                ],
              ].map(([title, desc, items]) => (
                <div key={title as string} className="space-y-4">
                  <h2 className="font-playfair text-2xl font-normal leading-tight">{title as string}</h2>
                  <p className="text-aurora-muted text-sm leading-relaxed font-light">{desc as string}</p>
                  <ul className="space-y-2">
                    {(items as string[]).map((item) => (
                      <li key={item} className="text-sm text-aurora-text flex gap-2 items-start">
                        <span className="text-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-aurora-card border border-[rgba(240,192,64,0.2)] p-8 md:p-10 mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="section-label">Experience</div>
                <h2 className="font-playfair text-3xl font-normal mt-2">37+ years of hands-on expertise</h2>
              </div>
              <p className="text-aurora-muted text-sm leading-relaxed font-light max-w-2xl md:text-right">
                Every project benefits from decades of practical knowledge, careful finishing, and an understanding of how materials age, perform, and elevate a space over time.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-aurora-card border border-[rgba(240,192,64,0.2)] p-12 mb-16">
            <div className="section-label">Craftsmanship</div>
            <h2 className="font-playfair text-3xl font-normal mb-4">From concept to finished feature</h2>
            <div className="gold-divider mb-10" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                ['01', 'Consultation', 'We begin with your ideas, space requirements, and finish preferences.'],
                ['02', 'Design', 'Detailed planning for restoration, gypsum work, or feature installation.'],
                ['03', 'Execution', 'Careful on-site or workshop execution using quality materials and proven techniques.'],
                ['04', 'Finishing', 'Every detail is refined for durability, balance, and a polished final look.'],
              ].map(([num, title, desc]) => (
                <div key={title} className="text-center">
                  <div className="font-playfair text-5xl text-[rgba(240,192,64,0.15)] mb-4">{num}</div>
                  <h4 className="font-playfair text-base mb-2">{title}</h4>
                  <p className="text-aurora-muted text-sm leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
