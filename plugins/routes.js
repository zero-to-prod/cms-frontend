import Vue from 'vue'

Vue.mixin({
  computed: {
    r_user () {
      return '/user'
    },
    r_auth_log () {
      return '/auth_log/'
    },
    r_index () {
      return '/'
    },
    r_dashboard () {
      return '/dashboard/'
    },
    r_home () {
      return '/home/'
    },
    r_horizon_dashboard_url () {
      return this.API_SERVER_URL + '/horizon/dashboard'
    },
    r_login () {
      return '/login/'
    },
    r_register () {
      return '/register/'
    },
    r_telescope_dashboard_url () {
      return this.API_SERVER_URL + '/telescope/dashboard'
    },
    r_users () {
      return '/user/'
    }
  },
  methods: {
    r (path) {
      return this.localePath(path)
    }
  }
})
