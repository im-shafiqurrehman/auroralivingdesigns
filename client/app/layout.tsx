import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aurora Living Designs — Handcrafted Concrete Works',
  description:
    'Premium handcrafted concrete ceiling medallions, garden fountains, and decorative sculptures. Based in Lahore, Pakistan.',
  keywords: 'concrete medallions, garden fountains, concrete sculptures, Lahore, handcrafted',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-aurora-black text-aurora-text font-cormorant antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#111111',
              color: '#f5f5f0',
              border: '1px solid rgba(240,192,64,0.3)',
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
