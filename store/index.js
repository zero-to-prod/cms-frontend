export const state = () => ({
  submit: false
})

export const mutations = {
  submit (state, value) {
    state.submit = value
  }
}