module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'hacker': ['Hacker'],
      'montserrat-bold': ['Montserrat-Bold'],
      'montserrat-medium': ['Montserrat-Medium'],
    },
    extend: {
      colors: {
        'green' : '#10a370',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
