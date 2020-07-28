<template>
  <div>
    <md-content v-if="!loading">
      <header>
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{ user_name_abbreviation(user.name) }}</md-ripple>
        </md-avatar>
        <h1>
          <span class="md-headline">{{ user.name }}</span>
        </h1>
        <p>
          <span class="md-caption">{{ $t('Last_login') }}: {{ date_long(last_login.created_at) }}</span>
        </p>
      </header>
      <user-component v-bind:user="user"/>
    </md-content>
    <md-empty-state v-else :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>
<script>
import UserComponent from '~/components/master/User/UserComponent'

export default {
  name: 'User',
  components: {
    UserComponent
  },
  data () {
    return {
      response: {},
      loading: true
    }
  },
  computed: {
    user: function() {
      return this.response.data.data.user
    },
    last_login: function() {
      return this.response.data.data.last_login
    }
  },
  methods: {},
  created () {

  },
  mounted () {
    this.getUser()
  }
}
</script>
<style scoped>
header {
  text-align: center;
}
</style>
