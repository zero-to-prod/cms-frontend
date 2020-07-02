import Vue from 'vue'

Vue.mixin({
  methods: {
    async login (username, password) {
      try {
        this.sending = true
        let response = await this.$auth.loginWith('local', {
          data: {
            client_id: this.OAUTH_CLIENT_ID,
            client_secret: this.OAUTH_CLIENT_SECRET,
            username: username,
            password: password
          }
        })
        await this.getUser()
        this.$store.submit(false)
      }
      catch (err) {
        console.log(err)
      }
    },
    logout () {
      this.$nuxt.$auth.logout()
    },
    getUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$get('/user').then(response => {
          this.$auth.setUser(response)
        }).catch(onerror => {
          console.log(onerror)
        })
      })
    }
  }
})
