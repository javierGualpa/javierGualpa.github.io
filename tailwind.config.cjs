/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-var': '#0b0b0f',
        'about-me': '#26252c',
        'gris': '#9a949f',
        'card': '#3f3c4d'
      }
    },
  },
  plugins: [],
}