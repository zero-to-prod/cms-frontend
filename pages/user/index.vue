<template>
  <div>
    <md-content v-if="!loading">
      <header>
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{ user_name_abbreviation }}</md-ripple>
        </md-avatar>
        <h1>
          <span class="md-headline">{{ user.name }}</span>
        </h1>
        <p>
          <span class="md-caption">{{ $t('Last_login') }}: {{ date_long(last_login.created_at) }}</span>
        </p>
      </header>
      <md-list>
        <md-subheader>{{ $t('Name') }}</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">
            <md-avatar class="md-avatar-icon md-accent md-small">
              <md-ripple>{{ user_name_abbreviation }}</md-ripple>
            </md-avatar>
          </md-icon>
          <div class="md-list-item-text">
            <span>{{ user.name }}</span>
          </div>
        </md-list-item>
        <md-subheader>{{ $t('Email') }}</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">
            <md-email></md-email>
          </md-icon>
          <div class="md-list-item-text">
            <span>{{ user.email }}</span>
          </div>
        </md-list-item>
        <md-subheader>{{ $t('Language') }}</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">
            <md-translate></md-translate>
          </md-icon>
          <div class="md-list-item-text">
            <md-radio v-model="language"
                      :value="locale.name"
                      v-for="locale in $i18n.locales"
                      v-bind:key="locale.name">{{ locale.name }}
            </md-radio>
          </div>
        </md-list-item>
        <md-subheader>{{ $t('Details') }}</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">
            <md-calendar></md-calendar>
          </md-icon>
          <div class="md-list-item-text">
            <span>{{ date_long(user.created_at) }}</span>
            <span>Created at</span>
          </div>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-secondary">
            <md-calendar></md-calendar>
          </md-icon>
          <div class="md-list-item-text">
            <span>{{ date_long(user.updated_at) }}</span>
            <span>Updated at</span>
          </div>
        </md-list-item>
      </md-list>
    </md-content>
    <md-empty-state v-else :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      search: null,
      searched: [],
      response: {},
      loading: true,
      language: null
    }
  },
  computed: {
    user: function() {
      return this.response.data.data.user
    },
    last_login: function() {
      return this.response.data.data.last_login
    },
    /** @todo Make global function. */
    user_name_abbreviation: function() {
      return this.user.name.match(/\b\w/g).join('')
    }
  },
  methods: {
    getUsers () {
      this.loading = true
      return new Promise((resolve, reject) => {
        this.$axios.get(this.route_api_user).then(response => {
          this.response = response
          this.loading = false
        }).catch(onerror => {
          this.loading = false
          console.log(onerror)
        })
      })
    }
  },
  created () {

  },
  mounted () {
    this.getUsers()
  }
}
</script>
<style scoped>
header {
  text-align: center;
}
</style>
