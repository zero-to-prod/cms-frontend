<template>
  <div>
    <md-content v-if="!loading">
      <header>
        <img>
        <h1>
          <span class="md-headline">{{user.name}}</span>
        </h1>
        <p>
          <span class="md-caption">Last login: {{date_long(last_login.created_at)}}</span>
        </p>
      </header>
    </md-content>
    <md-empty-state
      v-else
      md-icon=""
      md-label="Getting Profile"
      :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        search: null,
        searched: [],
        response: {},
        loading: true,
      }
    },
    computed: {
      user: function () {
        return this.response.data.data.user
      },
      last_login: function () {
        return this.response.data.data.last_login
      }
    },
    methods: {
      getUsers() {
        this.loading = true
        return new Promise((resolve, reject) => {
          this.$axios.get(this.route_api_user)
            .then(response => {
              this.response = response
              this.loading = false
            }).catch(onerror => {
            this.loading = false
            console.log(onerror)
          })
        })
      },
    },
    created() {

    },
    mounted() {
      this.getUsers()
    },
  }
</script>

<style scoped>
  header {
    text-align: center;
  }
</style>
