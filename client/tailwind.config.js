/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#f0c040',
        'gold-dark': '#b8942a',
        'gold-dim': 'rgba(240,192,64,0.15)',
        'aurora-black': '#0d0d0d',
        'aurora-card': '#111111',
        'aurora-card2': '#161616',
        'aurora-text': '#f5f5f0',
        'aurora-muted': '#a89f8c',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #f0c040 0%, #b8942a 50%, #f0c040 100%)',
        'diagonal-lines':
          'repeating-linear-gradient(45deg, #1a1400 0px, #1a1400 1px, transparent 1px, transparent 8px)',
      },
    },
  },
  plugins: [],
};
