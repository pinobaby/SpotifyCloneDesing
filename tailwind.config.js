const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#191414',
          white: '#FFFFFF',
          gray: '#101010',
          lightgray: '#B3B3B3',
          button: '#040404',
          cardSideBar: '#242424',
          colorbutton: '#121212',
          backgroundMainContent: '#121212',
          start: '#292929', // Color inicial del degradado
          end: '#060606', // Color final del degradado
        }
      },
      backgroundImage: theme => ({
        'spotify-gradient': 'linear-gradient(180deg, #232222, #000000)', // Degradado
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
