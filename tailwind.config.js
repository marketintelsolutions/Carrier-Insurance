/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryRed: '#CC1517',
        primaryBlack: '#060606',
        primaryGrey: '#999999',
        primaryBlue: '#131730'
      },
      maxWidth: {
        max: '1438px'
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

