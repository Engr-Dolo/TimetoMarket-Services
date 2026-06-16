/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        bg: '#0A0F1A',
        surface: '#161E2E',
        surface2: '#1C2635',
        clay: '#D97D54',
        'clay-dim': 'rgba(217,125,84,0.12)',
        green: '#3E5C4A',
        warm: '#E8E2D9',
        muted: 'rgba(232,226,217,0.45)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}