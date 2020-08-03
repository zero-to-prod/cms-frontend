export default function ({ app, route, redirect }) {
  console.log(app)
  // route.fullPath = app.$auth.user.user.locale + route.fullPath
  // app.router.replace(route.fullPath)
  // redirect(app.$auth.user.user.locale + route.fullPath)
}
