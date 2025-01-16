/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#00B050'
      },
      maxWidth: {
        max: '1200px'
      }
    },
  },
  plugins: [],
}

