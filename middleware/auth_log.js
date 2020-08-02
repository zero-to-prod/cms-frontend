export default async function ({store, from}) {
  if (store.state.auth_log.index === null) {
    await store.dispatch('auth_log/get')
  }
}
