import Vue from 'vue'

Vue.mixin({
  methods: {
    async login (username, password) {
      try {
        this.submit = true;
        this.$nuxt.$loading.start()
        let response = await this.$auth.loginWith('local', {
          data: {
            client_id: this.OAUTH_CLIENT_ID,
            client_secret: this.OAUTH_CLIENT_SECRET,
            username: username,
            password: password
          }
        })
        this.submit = false;
        await this.getUser()
        this.$nuxt.$loading.finish()
        this.$store.submit(false)
      }
      catch (err) {
        this.submit = false;
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
