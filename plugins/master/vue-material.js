import Vue from 'vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import {
  MdApp,
  MdButton,
  MdCard,
  MdContent,
  MdDialog,
  MdDialogAlert,
  MdDrawer,
  MdField,
  MdList,
  MdMenu,
  MdProgress,
  MdSnackbar,
  MdTable,
  MdToolbar
} from 'vue-material/dist/components'
import Menu from 'vue-material-design-icons/Menu.vue'
import AccountMultiple from 'vue-material-design-icons/AccountMultiple.vue'
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ViewDashboard from 'vue-material-design-icons/ViewDashboard.vue'
import Login from 'vue-material-design-icons/Login.vue'
import Logout from 'vue-material-design-icons/Logout.vue'
import Email from 'vue-material-design-icons/Email.vue'

Vue.use(MdApp)
Vue.use(MdDrawer)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdProgress)
Vue.use(MdMenu)
Vue.use(MdSnackbar)
Vue.use(MdDialogAlert)
Vue.use(MdDialog)
Vue.use(MdTable
)
Vue.component('md-menu', Menu)
Vue.component('md-account-multiple', AccountMultiple)
Vue.component('md-account-plus', AccountPlus)
Vue.component('md-chevron-left', ChevronLeft)
Vue.component('md-view-dashboard', ViewDashboard)
Vue.component('md-login', Login)
Vue.component('md-logout', Logout)
Vue.component('md-email', Email)
Vue.component('md-table', Email)
