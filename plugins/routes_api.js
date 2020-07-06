import Vue from 'vue'

Vue.mixin({
  computed: {
    route_api_login() {
      return '/login'
    },
    route_api_logout() {
      return '/logout'
    },
    route_api_register() {
      return '/register'
    },
    route_api_user() {
      return '/user'
    },
    route_api_users_actions_is_email_unique() {
      return '/users/actions/is-email-unique'
    }
  }
})
