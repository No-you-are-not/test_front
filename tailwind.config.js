/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#fda4cb',
          400: '#fb6ba8',
          500: '#f43f85',
          600: '#e2195f',
          700: '#c41048',
          800: '#a2103c',
          900: '#881235',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
    },
  },
  plugins: [],
}
