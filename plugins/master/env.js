import Vue from 'vue'

Vue.mixin({
  computed: {
    APP_NAME() {
      return process.env.APP_NAME
    },
    APP_TITLE() {
      return process.env.APP_TITLE
    },
    APP_MODE() {
      return process.env.APP_MODE
    },
    API_SERVER_URL() {
      return process.env.API_SERVER_URL
    },
    API_URL() {
      return process.env.API_URL
    },
    OAUTH_CLIENT_ID() {
      return process.env.OAUTH_CLIENT_ID
    },
    OAUTH_CLIENT_SECRET() {
      return process.env.OAUTH_CLIENT_SECRET
    },
    PROGRESS_BAR_COLOR() {
      return process.env.PROGRESS_BAR_COLOR
    },
    PROGRESS_BAR_HEIGHT() {
      return process.env.PROGRESS_BAR_HEIGHT
    },
    PAGE_LOADING_INDICATOR_NAME() {
      return process.env.PAGE_LOADING_INDICATOR_NAME
    },
    PAGE_LOADING_INDICATOR_COLOR() {
      return process.env.PAGE_LOADING_INDICATOR_COLOR
    },
    PAGE_LOADING_INDICATOR_BACKGROUND() {
      return process.env.PAGE_LOADING_INDICATOR_BACKGROUND
    },
    LOADING_INDICATOR_ON() {
      return process.env.LOADING_INDICATOR_ON
    },
    LOADING_INDICATOR() {
      return process.env.LOADING_INDICATOR
    },
    CACHE_CONTROL() {
      return process.env.CACHE_CONTROL
    },
    CACHE_PRAGMA() {
      return process.env.CACHE_PRAGMA
    },
    CACHE_EXPIRES() {
      return process.env.CACHE_EXPIRES
    }
  }
})
