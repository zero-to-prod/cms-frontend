import Vue from 'vue'

Vue.mixin({
  computed: {
    route_api_login () {
      return '/login'
    },
    route_api_logout () {
      return '/logout'
    },
    route_api_register () {
      return '/register'
    },
    route_api_users () {
      return '/users'
    },
    route_api_user () {
      return '/index'
    },
    route_api_auth_log () {
      return '/auth-log'
    },
    route_api_users_actions_is_email_unique () {
      return '/users/actions/is-email-unique'
    },
    route_api_user_actions_update_locale () {
      return '/index/actions/update-locale'
    },
    route_api_user_actions_update_name () {
      return '/index/actions/update-name'
    }
  }
})
