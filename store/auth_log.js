export const state = () => ({
  auth_log: null,
  test: 'test',
  last_login: '2020-07-3T12:38:12.000000Z'
})

export const getters = {
  getAuthLog: (state) => {
    return state.auth_log
  },
  lastLogin: (state) => {
    // return $nuxt.date_long(state.last_login)
    return state.last_login
  }
}
export const setters = {
  setAuthLog: (state, auth_log) => {
    state.auth_log = auth_log
  }
}
export const mutations = {
  setAuthLog: (state, auth_log) => {
    state.auth_log = auth_log
  }
}
export const actions = {
  getAuthLog(state) {
    return new Promise((resolve, reject) => {
      this.$axios.get(this.$store.state.route_api.auth_log.index)
        .then(response => {
          state.commit('setAuthLog', response.data.data)
        }).catch(onerror => {
        console.log(onerror)
      })
    })
  },
}
