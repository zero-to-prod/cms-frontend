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
        await this.getUser()
        this.$store.submit(false)
        this.sending = false
      }
      catch (err) {
        this.not_authenticated = true
        this.sending = false
      }
    },
    logout () {
      this.$nuxt.$auth.logout()
    },
    getUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$get('/user').then(response => {
          this.$auth.setUser(response)
          console.log('hit')
          this.$i18n.locale = this.$auth.user.data.user.locale;
          console.log(this.$i18n.locale)
        }).catch(onerror => {
        })
      })
    }
  }
})
