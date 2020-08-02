export const state = () => ({
  index: null,
  last_login: null
})

export const getters = {
  get (state){
    return state.index
  },
  name(state){
    return state.index.name
  },
}

export const mutations = {
  SET_USER (state, user){
    state.index = user
  },
  SET_LAST_LOGIN(state, last_login){
    state.last_login = last_login
  },
  UPDATE_LOCALE(state, locale){
    state.index.locale = locale
  }
}

export const actions = {
  async get({commit, rootState}){
    let response = await this.$axios.get(rootState.route_api.user.index)

    commit('SET_USER', response.data.data.user)
    commit('SET_LAST_LOGIN', response.data.data.last_login)
  },
  async updateLocale({commit, rootState}, parameters ){
    let response = await this.$axios.post(rootState.route_api.user.actions.update_locale, {
      user_locale: parameters.locale
    })
    commit('UPDATE_LOCALE', parameters.locale)
  }
}
