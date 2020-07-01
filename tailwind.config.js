/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['RobotoCondensed', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Eczar', 'Helvetica', 'Arial', 'serif']
      }
    },
  },
  variants: {},
  plugins: [],
  purge: [
    './dist/**/*.html',
    './dist/**/*.vue',
    './dist/**/*.jsx'
  ]
}
