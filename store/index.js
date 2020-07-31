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
  async getUser({commit}){
    let response = await this.$axios.get(this.route_api_user)
    let user = response.data.data.user

    commit('setUser', user)
  }
}
