import Vue from 'vue'

Vue.mixin({
  computed: {
    r_user () {
      return this.r('/user')
    },
    r_auth_log () {
      return this.r('/auth_log/')
    },
    r_index () {
      return this.r('/')
    },
    r_dashboard () {
      return this.r('/dashboard/')
    },
    r_home () {
      return this.r('/home/')
    },
    r_horizon_dashboard_url () {
      return this.API_SERVER_URL + '/horizon/dashboard'
    },
    r_login () {
      return this.r('/login/')
    },
    r_register () {
      return '/register/'
    },
    r_telescope_dashboard_url () {
      return this.API_SERVER_URL + '/telescope/dashboard'
    },
    r_users () {
      return this.r('/user/')
    }
  },
  methods: {
    r (path) {
      return this.localePath(path)
    }
  }
})
