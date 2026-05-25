import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-aurora-card border-t border-[rgba(240,192,64,0.2)] pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[rgba(240,192,64,0.15)]">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-[rgba(240,192,64,0.3)] overflow-hidden shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Aurora Living Designs logo"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover object-center scale-[1.5]"
                />
              </div>
              <div className="font-playfair text-gold tracking-[0.15em] uppercase text-lg">
                Aurora Living Designs
              </div>
            </div>
            <p className="text-aurora-muted text-sm leading-relaxed font-light mb-4">
              Handcrafted concrete medallions, fountains, and sculptures for spaces that demand permanence. Based in North America.
            </p>
            <div className="text-gold text-xs tracking-widest">auroralivingdesigns.com</div>
          </div>

          {[
            {
              title: 'Products',
              links: [
                { href: '/products?category=garden-fountains', label: 'Garden Fountains' },
                { href: '/products?category=ceiling-medallions', label: 'Ceiling Medallions' },
                { href: '/products?category=sculptures', label: 'Sculptures' },
                { href: '/products?category=custom-pieces', label: 'Custom Pieces' },
              ],
            },
            {
              title: 'Company',
              links: [
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/products', label: 'Full Collection' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { href: 'mailto:info@auroralivingdesigns.com', label: 'info@auroralivingdesigns.com' },
                { href: 'https://wa.me/12269981419', label: '+1 (226) 998-1419 (WhatsApp)' },
                { href: 'https://www.google.com/maps?q=280+Hamilton+road,+london,+ontario', label: '280 Hamilton road, london, ontario' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] tracking-[0.25em] uppercase text-gold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-aurora-muted text-sm hover:text-gold transition-colors font-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-aurora-muted text-xs">© {new Date().getFullYear()} Aurora Living Designs. All rights reserved.</p>
          <p className="text-gold text-xs tracking-widest">auroralivingdesigns.com</p>
        </div>
      </div>
    </footer>
  );
}
