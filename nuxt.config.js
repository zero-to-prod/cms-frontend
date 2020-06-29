require('dotenv').config()
export default {
  mode: process.env.APP_MODE,
  loadingIndicator: {
    name: process.env.PAGE_LOADING_INDICATOR_NAME,
    color: process.env.PAGE_LOADING_INDICATOR_COLOR,
    background: process.env.PAGE_LOADING_INDICATOR_BACKGROUND
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { 'http-equiv': 'pragma', content: process.env.CACHE_PRAGMA },
      { 'http-equiv': 'cache-control', content: process.env.CACHE_CONTROL },
      { 'http-equiv': 'expires', content: process.env.CACHE_EXPIRES }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: process.env.PROGRESS_BAR_COLOR,
    height: process.env.PROGRESS_BAR_HEIGHT
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/spinkit.min.css',
    process.env.APP_THEME,
    // '~/assets/css/master.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/routes',
    '~/plugins/authentication',
    '~/plugins/env',
    '~/plugins/globalComponents'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    'nuxt-purgecss'
  ],
  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: { url: '/logout', method: 'post' },
          user: false
        },
        autoFetchUser: false
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL,
    apiURL: process.env.API_URL,
    progress: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/],
    purgeCSSInDev: true
  },
  pwa: {
    workbox: {
      clientsClaim: false
    }
  }
}
