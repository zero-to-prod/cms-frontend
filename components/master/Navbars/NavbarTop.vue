<template>
    <!--<header class="fixed right-0 top-0 w-full">-->
    <!--    <div class="flex flex-row-reverse">-->
    <!--        <div v-if="$auth.loggedIn">-->
    <!--            <button v-on:click="logout()" class="px-3">Logout</button>-->
    <!--        </div>-->
    <!--        <div v-else>-->
    <!--            <nuxt-link :to="route_login"><button class="px-3">Login</button></nuxt-link>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</header>-->
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary" md-elevation="0">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-menu/>
                </md-button>
                <span class="md-title">{{APP_TITLE}}</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Navigation</span>
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-chevron-left/>
                        </md-button>
                    </div>
                </md-toolbar>
                <md-list>
                    <md-list-item>
                        <nuxt-link :to="route_users">
                            <md-account-multiple/>
                        </nuxt-link>
                        <nuxt-link class="md-list-item-text" :to="route_users">
                            <span>Users</span>
                        </nuxt-link>
                    </md-list-item>
                    <md-list-item>
                        <nuxt-link :to="route_dashboard">
                            <md-view-dashboard/>
                        </nuxt-link>
                        <nuxt-link class="md-list-item-text" :to="route_dashboard">
                            <span>Dashboard</span>
                        </nuxt-link>
                    </md-list-item>
                    <md-list-item class="logout" v-if="$auth.loggedIn">
                        <md-logout v-on:click="logout()"/>
                        <nuxt-link v-on:click="logout()" class="md-list-item-text" :to="route_login">
                            <span>Logout</span>
                        </nuxt-link>
                    </md-list-item>
                    <md-list-item v-else>
                        <nuxt-link :to="route_login">
                            <md-login/>
                        </nuxt-link>
                        <nuxt-link class="md-list-item-text" :to="route_login">
                            <span>Login</span>
                        </nuxt-link>
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
    .logout:hover{
        cursor: pointer;
    }
    .md-app {
        min-height: 100vh;
    }
</style>
