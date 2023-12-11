/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('/imgs/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/imgs/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/imgs/yosemite.jpg')",
        'LA': "url('/imgs/LA.jpg')",
        'seattle': "url('/imgs/seattle.jpg')",
        'new_york': "url('/imgs/new_york.jpg')",
        'norway': "url('/imgs/norway.jpg')",
        'sydney': "url('/imgs/sydney.jpg')",
        'miami': "url('/imgs/miami.jpg')",
        'switzerland': "url('/imgs/switzerland.jpg')",
        'bali': "url('/imgs/bali.jpg')",
        'chicago': "url('/imgs/chicago.jpg')",
        'europe': "url('/imgs/europe.jpg')",
        'iceland': "url('/imgs/iceland.jpg')",
      },
      backgroundColor: {
        ...theme => theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#CCCCCC',
      },
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#CCCCCC',
      },
      fontFamily: { 
        Montserrat: ["Monserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

