export const state = () => ({
  products: null
})

export const getters = {
  getProducts: (state) => {
    return state.products
  }
}
export const setters = {
  setProducts: (state, products) => {
    state.products = products
  }
}
export const mutations = {
  setProducts: (state, posts) => {
    state.products = posts
  }
}
export const actions = {
  getProducts (state) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/products').then(response => {
        state.commit('setProducts', response.data)
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
    })
  }
}