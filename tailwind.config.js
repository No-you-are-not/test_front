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
          50: '#fff5fa',
          100: '#ffe9f5',
          200: '#ffd4eb',
          300: '#ffb8dc',
          400: '#ff9dd1',
          500: '#ff82c6',
          600: '#ff66bb',
          700: '#e64da5',
          800: '#cc3d8f',
          900: '#b32e79',
        },
        rose: {
          50: '#fff5f7',
          100: '#ffebef',
          200: '#ffd6df',
          300: '#ffc2cf',
          400: '#ffadbf',
          500: '#ff99af',
          600: '#ff859f',
          700: '#e66d8a',
          800: '#cc5575',
          900: '#b33d60',
        },
      },
    },
  },
  plugins: [],
}
