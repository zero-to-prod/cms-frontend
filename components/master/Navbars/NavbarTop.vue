<template>
    <div class="page-container md-layout-row">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="menu md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-menu/>
                </md-button>
                <span class="md-title">{{APP_TITLE}}</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped">
                <md-list>
                    <md-list-item :to="route_users" exact>
                        <md-account-multiple/>
                        <span class="md-list-item-text">Users</span>
                    </md-list-item>
                    <md-list-item :to="route_dashboard">
                        <md-view-dashboard/>
                        <span class="md-list-item-text">Dashboard</span>
                    </md-list-item>
                    <md-list-item class="logout" v-if="$auth.loggedIn" :to="route_login" @click="logout()">
                        <md-logout/>
                        <span class="md-list-item-text">Logout</span>
                    </md-list-item>
                    <md-list-item v-else :to="route_login">
                        <md-login/>
                        <span class="md-list-item-text">Login</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <slot></slot>
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
  export default {
    name: 'NavbarTop',
    data () {
      return {
        menuVisible: false
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    },
    watch: {}
  }
</script>
<style scoped>
    .md-app {
        min-height: 100vh;
    }

    .md-drawer {
      width: 150px;
      max-width: calc(100vw - 125px);
    }

    .menu {
        display: none;
    }

    @media only screen and (max-width: 599px) {
        .menu {
            display: unset;
        }
    }
</style>
