import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/layout/Navbar';
import AuthProvider from '@/components/providers/AuthProvider';

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
    'Premium handcrafted concrete ceiling medallions, garden fountains, and decorative sculptures. Based in London, Ontario, Canada.',
  keywords: 'concrete medallions, garden fountains, concrete sculptures, London Ontario, handcrafted',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-aurora-black text-aurora-text font-cormorant antialiased">
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#111111',
                color: '#f5f5f0',
                border: '1px solid rgba(240,192,64,0.3)',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.9rem',
              },
            }}
          />
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
