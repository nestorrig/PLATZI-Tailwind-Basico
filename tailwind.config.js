/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('./src/assets/imgs/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./src/assets/imgs/sanFranciscoDesktop.jpg')",
        'yosemite': "url('./src/assets/imgs/yosemite.jpg')",
        'LA': "url('./src/assets/imgs/LA.jpg')",
        'seattle': "url('./src/assets/imgs/seattle.jpg')",
        'new_york': "url('./src/assets/imgs/new_york.jpg')",
        'norway': "url('./src/assets/imgs/norway.jpg')",
        'sydney': "url('./src/assets/imgs/sydney.jpg')",
        'miami': "url('./src/assets/imgs/miami.jpg')",
        'switzerland': "url('./src/assets/imgs/switzerland.jpg')",
        'bali': "url('./src/assets/imgs/bali.jpg')",
        'chicago': "url('./src/assets/imgs/chicago.jpg')",
        'europe': "url('./src/assets/imgs/europe.jpg')",
        'iceland': "url('./src/assets/imgs/iceland.jpg')",
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

