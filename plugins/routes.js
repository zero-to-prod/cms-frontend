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
    route_indicators() {
      return '/indicators/'
    },
    route_login() {
      return '/login/'
    },
    route_products() {
      return '/products/'
    },
    route_users() {
      return '/users/'
    }
  }
})
