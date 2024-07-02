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
          button:'#040404',
          cardSideBar:'#242424',
          colorbutton:'#121212'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
