
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
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
    '@nuxtjs/auth'
  ],
  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/logout', method: 'post' },
          user: false
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        autoFetchUser: false
      },
      'laravel.passport': {
        url: 'http://cms.test/api/v1',
        authorization_endpoint: 'http://cms.test/api/v1/redirect',
        token_endpoint: 'http://cms.test/api/v1/callback',
        client_id: 2,
        client_secret: '6cbtiwFuvebnq4miDOjxP3MaBEnQ7nSDrqLrFlGv',
      },
      social: {
        _scheme: 'oauth2',
        authorization_endpoint: 'http://cms.test/api/v1/redirect',
        userinfo_endpoint: 'http://cms.test/api/v1/user',
        scope: '*',
        access_type: undefined,
        access_token_endpoint: 'http://cms.test/api/v1/callback',
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: 'http://localhost:3000/',
        client_id: '2',
        token_key: 'access_token',
        state: '6cbtiwFuvebnq4miDOjxP3MaBEnQ7nSDrqLrFlGv'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://cms.test/api/v1'
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
  }
}
