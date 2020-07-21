<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="menu md-icon-button" @click="toggleMenu">
          <md-menu/>
        </md-button>
        <span class="md-title">{{APP_TITLE}}</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped">
        <md-list>
          <md-list-item :to="route_dashboard">
            <md-view-dashboard class="md-icon"/>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>
          <md-list-item :to="route_users" exact>
            <md-account-multiple class="md-icon"/>
            <span class="md-list-item-text">Users</span>
          </md-list-item>
          <md-list-item class="logout" v-if="$auth.loggedIn" :to="route_login" @click="logout()">
            <md-logout class="md-icon"/>
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
          <md-list-item v-else :to="route_login">
            <md-login class="md-icon"/>
            <span class="md-list-item-text">Login</span>
          </md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandAdmin">
            <md-telescope class="md-icon"/>
            <span class="md-list-item-text">Admin</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">
                <a :href="route_horizon_dashboard_url" target="_blank">
                  <span class="md-list-item-text">Horizon</span>
                </a>
              </md-list-item>
              <md-list-item class="md-inset">
                <a :href="route_telescope_dashboard_url" target="_blank">
                  <span class="md-list-item-text">Telescope</span>
                </a>
              </md-list-item>
              <md-list-item class="md-inset" :to="route_auth_log">
                <span class="md-list-item-text">Auth Log</span>
              </md-list-item>
            </md-list>
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
  import LaravelHorizon from "~/components/master/Icons/LaravelHorizon";

  export default {
    name: 'NavbarTop',
    components: {
      LaravelHorizon
    },
    data() {
      return {
        menuVisible: false,
        expandAdmin: false,
      }
    },
    methods: {
      toggleMenu() {
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
    width: 200px;
    max-width: calc(100vw - 125px);
  }

  .menu {
    display: none;
  }

  .admin-links {
    margin-left: .5rem;
  }

  @media only screen and (max-width: 599px) {
    .menu {
      display: unset;
    }
  }
</style>
