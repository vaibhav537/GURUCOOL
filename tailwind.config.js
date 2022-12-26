const colors  = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [   
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
