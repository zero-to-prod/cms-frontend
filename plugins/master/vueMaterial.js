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
import 'vue-material/dist/theme/default-dark.css'
import Menu from 'vue-material-design-icons/Menu.vue'
import AccountMultiple from 'vue-material-design-icons/AccountMultiple.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ViewDashboard from 'vue-material-design-icons/ViewDashboard.vue'
import Login from 'vue-material-design-icons/Login.vue'
import Logout from 'vue-material-design-icons/Logout.vue'

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

