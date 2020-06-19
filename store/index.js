export const state = () => ({
  submitted: false
})

export const mutations = {
  submit (state, value) {
    state.submit = value
  }
}