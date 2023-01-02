/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        brand: '#046fff'
      },
      backgroundColor: {
        primary: '#046fff',
        secondary: '#fe0000'
      }
    },
  },
  plugins: [],
}
