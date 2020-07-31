export default async function ({store, from}){
  if(store.state.user.length === {}){
    await store.dispatch('getUser')
  }
  console.log(from)
}