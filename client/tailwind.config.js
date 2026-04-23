/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
