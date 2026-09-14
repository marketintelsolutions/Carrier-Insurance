/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // primaryRed: 'rgb(193,42,18)',
        primaryRed: 'rgb(193,42,18)',
        primaryBlack: '#060606',
        primaryGrey: '#999999',
      },
      maxWidth: {
        max: '1438px',
        sub: '1350px'
      },
      fontFamily: {
        inter: "Inter",
        sans: "Open Sans",
        lato: "Lato",
        montserrat: "Montserrat"
      }
    },
  },
  plugins: [],
}

