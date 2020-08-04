<template>
  <md-list>
    <md-subheader>{{ $t('Name') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-avatar class="md-avatar-icon md-accent md-small">
          <md-ripple>{{ user_name_abbreviation }}</md-ripple>
        </md-avatar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ $store.state.user.index.name }}</span>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Email') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-email></md-email>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ $store.state.user.index.email }}</span>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Language') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-translate v-if="!loading"></md-translate>
        <loading v-else/>
      </md-icon>
      <div class="md-list-item-text">
        <md-radio v-model="user_locale"
                  v-for="locale in $i18n.locales"
                  :name="locale.name"
                  :value="locale.code"
                  :id="locale.code"
                  v-bind:key="locale.name"
                  @change="updateLocale(locale.code);$router.push(switchLocalePath(locale.code))"
                  >{{locale.name}}
        </md-radio>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Details') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-calendar></md-calendar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ $date_long($store.state.user.index.created_at, $i18n.locale) }}</span>
        <span>{{ $t('Created_at') }}</span>
      </div>
    </md-list-item>
    <md-list-item>
      <md-icon class="md-secondary">
        <md-calendar></md-calendar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ $date_long($store.state.user.index.updated_at, $i18n.locale) }}</span>
        <span>{{ $t('Updated_at') }}</span>
      </div>
    </md-list-item>
  </md-list>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'user-component',
  data () {
    return {
      loading: false,
      response: {},
      locales: this.$i18n.locales
    }
  },
  computed: {
    user_locale: {
      get () {
        return this.$store.state.user.index.locale
      },
      set (value) {
        this.$store.commit('user/UPDATE_LOCALE', value)
      }
    },
    url_user () {
      return this.$store.state.route_api.user.index
    },
    user_name_abbreviation() {
      return this.$user_name_abbreviation(this.$store.state.user.index.name)
    }
  },
  methods: {
    async updateLocale (locale_code) {
      await this.$store.dispatch('user/updateLocale', { locale: locale_code })
      await this.switchLocalePath(locale_code)
      // this.$router.go(this.localePath(this.url_user))
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style scoped></style>
