/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    // colors: {
    //   'brand-primary': 'var(--color-brand-primary)',
    //   'brand-secondary': 'var(--color-brand-secondary)',
    //   'background-primary': 'var(--color-background-primary)',
    //   'background-secondary': 'var(--color-background-secondary)',
    //   'text-primary': 'var(--color-text-primary)',
    //   'text-secondary': 'var(--color-text-secondary)',
    //   'button-primary': 'var(--color-button-primary)',
    //   'button-primary-hover': 'var(--color-button-primary-hover)',
    //   'button-secondary': 'var(--color-button-secondary)',
    //   'button-secondary-hover': 'var(--color-button-secondary-hover)'
    // }
  },
  variants: {},
  plugins: [],
  purge: [
    './dist/**/*.html',
    './dist/**/*.vue',
    './dist/**/*.jsx'
  ]
}
