/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F17',
          card: '#131B2E',
          cardHover: '#1A253E',
          border: '#1E2D4A',
          surface: '#0F1626'
        },
        brand: {
          cyan: '#00E5FF',
          teal: '#00C2CB',
          amber: '#FFB800',
          purple: '#8B5CF6',
          blue: '#0284C7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
