export const state = () => ({
  index: null
})

export const getters = {
  getIndex: (state) => {
    return JSON.parse(JSON.stringify(state.index))
  }
}

export const mutations = {
  set (state, data){
    state.index = data
  },
}

export const actions = {
  async get({commit}){
    let response = await this.$axios.get('/auth-log')

    commit('set', response.data)
  }
}
