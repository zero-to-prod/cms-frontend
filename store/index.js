export const state = () => ({
  submit: false,
  user: {}
})

export const mutations = {
  submit: (state, value) => {
    state.submitted = value
  },
  setUser (state, user){
    state.user = user
  }
}

export const actions = {
  async getUser({commit, rootState}){
    let response = await this.$axios.$get(rootState.route_api.user.index)

    commit('setUser', response.data.user)
  }
}
