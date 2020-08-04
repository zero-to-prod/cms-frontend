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
        this.$store.submit(false)
        this.sending = false
      }
      catch (err) {
        this.not_authenticated = true
        this.sending = false
      }
    },
    async logout () {
      await this.$nuxt.$auth.logout()
    },
    getUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$get(this.route_api_user).then(response => {
          this.$auth.setUser(response)
          this.setLocale(response.user.locale);
        }).catch(onerror => {
        })
      })
    }
  }
})
