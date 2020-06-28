export const state = () => ({
  submitted: false
})

export const mutations = {
  submit: (state, value) => {
    state.submitted = value
  }
}
