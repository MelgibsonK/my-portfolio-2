/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        geist: ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      fontStyle: {
        italic: 'italic',
        normal: 'normal',
      },
      colors: {
        // Vintage Color Palette
        'deep-charcoal': '#1F1F1C',
        'burnt-brass': '#B08D57',
        'antique-linen': '#F2E8DC',
        'mist-gray': '#D9D9D6',
        'oxblood': '#7C3F36',
        'dusty-olive': '#7E846B',
        'midnight-teal': '#355E63',
        'soft-white': '#FAF9F6',
        'graphite': '#3C3C3C',
        'highlight-gold': '#E6C87E',
      },
    },
  },
  plugins: [],
}
