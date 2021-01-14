module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        joanne: 'red'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
