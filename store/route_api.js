export const state = () => ({
  user: {
    index: 'user',
    actions: {
      is_email_unique: '/users/actions/is-email-unique',
      update_locale: '/index/actions/update-locale',
      update_name: '/index/actions/update-name'
    }
  },
  users: {
    index: '/users'
  },
  login: {
    index: '/login'
  },
  logout: {
    index: '/logout'
  },
  register: {
    index: '/register'
  },
  auth_log: {
    index: '/auth-log'
  }
})
