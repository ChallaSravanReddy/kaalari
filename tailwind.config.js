/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        ivory: '#FAF9F6',
        white: '#FFFFFF',
        charcoal: '#333333',
        'royal-blue': '#004AAD',
        'deep-black': '#0D0D0D',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
