<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="menu md-icon-button" @click="toggleMenu">
          <md-menu/>

        </md-button>
        <span class="md-title">{{APP_TITLE}}</span>
        <div class="md-toolbar-section-end">
          <nuxt-link :to="localePath(route_user)">
            <md-account-circle class="user"/>
          </nuxt-link>
        </div>

      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped">

        <md-list :md-expand-single="true">
          <md-list-item :to="localePath(route_dashboard)">
            <md-view-dashboard class="md-icon"/>
            <span class="md-list-item-text">{{$t('Dashboard')}}</span>
          </md-list-item>
          <md-list-item :to="localePath(route_users)" exact>
            <md-account-multiple class="md-icon"/>
            <span class="md-list-item-text">{{$t('Users')}}</span>
          </md-list-item>
          <md-list-item class="logout" v-if="$auth.loggedIn" :to="localePath(route_login)" @click="logout()">
            <md-logout class="md-icon"/>
            <span class="md-list-item-text">{{$t('Logout')}}</span>
          </md-list-item>
          <md-list-item v-else :to="localePath(route_login)">
            <md-login class="md-icon"/>
            <span class="md-list-item-text">{{$t('Login')}}</span>
          </md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandAdmin">
            <md-telescope class="md-icon"/>
            <span class="md-list-item-text">{{$t('Administrator')}}</span>

            <md-list slot="md-expand">
              <md-list-item>
                <a :href="route_horizon_dashboard_url" target="_blank">
                  <span class="md-list-item-text">Horizon</span>
                </a>
              </md-list-item>
              <md-list-item>
                <a :href="route_telescope_dashboard_url" target="_blank">
                  <span class="md-list-item-text">Telescope</span>
                </a>
              </md-list-item>
              <md-list-item :to="localePath(route_auth_log)">
                <span class="md-list-item-text">{{$t('Authentication_Log')}}</span>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandLanguage">
            <md-translate class="md-icon"/>
            <span class="md-list-item-text">{{$t('Language')}}</span>
            <md-list slot="md-expand">
              <md-list-item v-for="locale in $i18n.locales"
                            v-if="locale.code !== $i18n.locale" :key="locale.code" class="md-inset"
                            :to="switchLocalePath(locale.code)">
                <span class="md-list-item-text">
                  {{ locale.name }}

                  </span>
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
  import LangSwitcher from "~/components/master/Lang/LangSwitcher";

  export default {
    name: 'NavbarTop',
    components: {
      LangSwitcher,
      LaravelHorizon
    },

    data() {
      return {
        menuVisible: false,
        expandAdmin: false,
        expandLanguage: false,
        languages: [
          {
            id: 'en',
            title: 'English',
            flagSrc: 'https://cdn.vuetifyjs.com/images/flags/us.png'
          },
          {
            id: 'kr',
            title: 'Korean',
            flagSrc: 'https://cdn.vuetifyjs.com/images/flags/kr.png'
          }
        ]
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
    width: 250px;
    max-width: calc(100vw - 125px);
  }

  .menu {
    display: none;
  }

  .user {
    color: white;
    transition: all 200ms ease-in-out;
  }

  .admin-links {
    margin-left: .5rem;
  }

  .lang-switcher {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 599px) {
    .menu {
      display: unset;
    }
  }
</style>
