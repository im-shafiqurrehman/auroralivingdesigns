import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-aurora-card border-t border-[rgba(240,192,64,0.2)] pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[rgba(240,192,64,0.15)]">
          <div className="md:col-span-1">
            <div className="font-playfair text-gold tracking-[0.15em] uppercase mb-4 text-lg">
              Aurora Living Designs
            </div>
            <p className="text-aurora-muted text-sm leading-relaxed font-light mb-4">
              Handcrafted concrete medallions, fountains, and sculptures for spaces that demand permanence. Based in Lahore, Pakistan.
            </p>
            <div className="text-gold text-xs tracking-widest">auroralivingdesigns.online</div>
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
                { href: 'mailto:info@auroralivingdesigns.online', label: 'info@auroralivingdesigns.online' },
                { href: 'https://wa.me/923001234567', label: '+92 300 123 4567 (WhatsApp)' },
                { href: '#', label: 'Lahore, Punjab, Pakistan' },
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
          <p className="text-gold text-xs tracking-widest">auroralivingdesigns.online</p>
        </div>
      </div>
    </footer>
  );
}
