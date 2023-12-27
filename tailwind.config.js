/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('/imgs/sanFrancisco.webp')",
        'sanFranciscoDesktop': "url('/imgs/sanFranciscoDesktop.webp')",
        'yosemite': "url('/imgs/yosemite.webp')",
        'LA': "url('/imgs/LA.webp')",
        'seattle': "url('/imgs/seattle.webp')",
        'newyork': "url('/imgs/new_york.webp')",
        'norway': "url('/imgs/norway.webp')",
        'sydney': "url('/imgs/sydney.webp')",
        'miami': "url('/imgs/miami.webp')",
        'switzerland': "url('/imgs/switzerland.webp')",
        'bali': "url('/imgs/bali.webp')",
        'chicago': "url('/imgs/chicago.webp')",
        'europe': "url('/imgs/europe.webp')",
        'iceland': "url('/imgs/iceland.webp')",
      },
      backgroundColor: {
        ...theme => theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#f6f6f6',
        'dark1': '#111827',
        'dark2': '#1f2937',
        'dark3': '#374151',
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

