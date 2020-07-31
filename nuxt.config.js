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
  loading: {
    color: process.env.PROGRESS_BAR_COLOR,
    height: process.env.PROGRESS_BAR_HEIGHT
  },
  css: [
    '~/assets/master/style/spinkit.min.css',
    '~/assets/master/style/md_theme.scss',
    '~/assets/master/style/master.css'
  ],
  plugins: [
    '~/plugins/master/authentication',
    '~/plugins/master/deserialize-json-api',
    '~/plugins/master/env',
    '~/plugins/master/functions',
    '~/plugins/master/global-components',
    '~/plugins/master/laravel-echo',
    '~plugins/master/mdi-js',
    '~plugins/master/requests',
    '~/plugins/master/vue-material',
    '~/plugins/master/vue-material-design-icons',
    '~/plugins/routes',
    '~/plugins/routes_api'
  ],
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxt/http',
    [
      'nuxt-i18n', {
      vueI18nLoader: true,
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-us.js'
        },
        {
          name: 'Español',
          code: 'es',
          iso: 'es-ES',
          file: 'es-es.js'
        }
        // {
        //   name: 'Française',
        //   code: 'fr',
        //   iso: 'fr-Fr',
        //   file: 'es-es.js'
        // },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }]
  ],
  router: {
    middleware: ['auth']
  },
  auth: {
    watchLoggedIn: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: 'data' }
        },
        autoFetchUser: true
      }
    }
  },
  axios: {
    baseURL: process.env.API_URL,
    apiURL: process.env.API_URL,
    progress: true
  },
  http: {
    baseURL: process.env.API_URL,
    progress: true
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'style-loader',
            'sass-loader'
          ]
        }
      ]
    }
  },
  pwa: {
    workbox: {
      clientsClaim: false
    }
  }
}
