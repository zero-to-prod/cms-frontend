import Vue from 'vue'

Vue.mixin({
  computed: {
    route_index() {
      return '/'
    },
    route_dashboard() {
      return '/dashboard/'
    },
    route_home() {
      return '/home/'
    },
    route_horizon_dashboard_url(){
      return process.env.API_SERVER_URL + '/horizon/dashboard'
    },
    route_indicators() {
      return '/indicators/'
    },
    route_login() {
      return '/login/'
    },
    route_products() {
      return '/products/'
    },
    route_register() {
      return '/register/'
    },
    route_telescope_dashboard_url(){
      return process.env.API_SERVER_URL + '/telescope/dashboard'
    },
    route_users() {
      return '/users/'
    },
  }
})
