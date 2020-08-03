export const state = () => ({
  user: {
    index: 'user',
    actions: {
      is_email_unique: '/user/actions/is-email-unique',
      update_locale: '/user/actions/update-locale',
      update_name: '/user/actions/update-name'
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
