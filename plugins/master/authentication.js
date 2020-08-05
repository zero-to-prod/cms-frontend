import Vue from 'vue'

Vue.mixin({
  methods: {
    async login (email, password) {
      this.not_authenticated = false
      try {
        this.sending = true
        let response = await this.$auth.loginWith('local', {
          data: {
            client_id: this.OAUTH_CLIENT_ID,
            client_secret: this.OAUTH_CLIENT_SECRET,
            email: email,
            password: password
          }
        })
        await this.$router.push(this.switchLocalePath(response.user.locale))
        await this.$store.submit(false)
        this.sending = false
      }
      catch (err) {
        this.not_authenticated = true
        this.sending = false
      }
    },
    async logout () {
      await this.$nuxt.$auth.logout()
      await this.$router.push(this.r_login)
    },
    async getUser() {
      response = await this.$axios.$get(this.route_api_user)
      await this.$auth.setUser(response)
    }
  }
})
