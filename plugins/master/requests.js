import Vue from 'vue'

Vue.mixin({
  methods: {
    getUser () {
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
    },

    changeLocale () {
      this.loading = true
      return new Promise((resolve, reject) => {
        this.$axios.post(this.route_api_user_actions_update_locale, {
          id: this.user.id,
          user_locale: this.user.locale
        }).then(response => {
          this.loading = false
          this.$router.push(this.switchLocalePath(this.user.locale))
        }).catch(onerror => {
          this.loading = false
          console.log(onerror)
        })
      })
    }

  }
})
