export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, user){
    state.user = user
  }
}

export const actions = {
  async getUser({commit}){
    let response = await this.$axios.get('/user')
    // let user = response.data.data.user
    //
    // commit('setUser', user)
  }
}
