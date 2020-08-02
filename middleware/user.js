export default async function ({store, from}) {
  if (store.state.user.index === null) {
    await store.dispatch('user/get')
  }
}
