const colors  = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [   
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily:{
      Garamond:['EB Garamond', 'serif']
    },
    extend: {
      colors:{
        'cyan': colors.cyan,
        'teal': colors.teal
      },
      boxShadow:{
        '3xl': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
