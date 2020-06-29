import Vue from 'vue'

Vue.mixin({
  computed: {
    route_index() {
      return '/'
    },
    route_users() {
      return '/users/'
    },
    route_home() {
      return '/home/'
    },
    route_dashboard() {
      return '/dashboard/'
    },
    route_login() {
      return '/login/'
    },
    route_products() {
      return '/products/'
    }
  }
})
