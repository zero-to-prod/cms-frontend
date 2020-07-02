import Vue from 'vue'
import {
  MdApp,
  MdDrawer,
  MdToolbar,
  MdButton,
  MdList,
  MdContent,
  MdCard,
  MdField
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css'
import {
  Menu,
  AccountMultiple,
  ChevronLeft,
  ViewDashboard,
  Login,
  Logout
} from 'vue-material-design-icons'

Vue.use(MdApp)
Vue.use(MdDrawer)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdField)

Vue.use(MdCard)
Vue.component('md-menu', Menu)
Vue.component('md-account-multiple', AccountMultiple)
Vue.component('md-chevron-left', ChevronLeft)
Vue.component('md-view-dashboard', ViewDashboard)
Vue.component('md-login', Login)
Vue.component('md-logout', Logout)

