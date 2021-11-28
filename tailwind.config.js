module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display"],
        roboto: ["Roboto"]
      },
      colors:{
        accent:'#FAF4EF',
        inverse: '#4B4B4B'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius:{
        '4x1': '5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
