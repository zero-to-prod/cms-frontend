<template>
  <div class="container">
    <div v-if="$auth.loggedIn">
      <button v-on:click="logout()">Logout</button>
      <!--<button v-on:click="user()">User</button>-->
    </div>
    <div v-else>
      <!--<button v-on:click="register()">Register</button>-->
      <!--<button v-on:click="login()">Login</button>-->
      <button v-on:click="oauthLogin()">Login</button>
    </div>
    <!--<button v-on:click="oauthLogout()">OauthLogout</button>-->
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  methods: {

    register () {
      return new Promise((resolve, reject) => {
        this.$axios.$post('/register', {
          'grant_type': 'password',
          'email': 'dave0016@gmail.com',
          'password': '123456789',
          'name': 'David'
        }).then(response => {
          console.log(response)
        }).catch(onerror => {
          console.log(onerror)
        })
      })
    },
    // login () {
    //   return new Promise((resolve, reject) => {
    //     this.$axios.$post('/login', {
    //       'client_id': process.env.OAUTH_CLIENT_ID,
    //       'client_secret': process.env.OAUTH_CLIENT_SECRET,
    //       'username': 'dave0016@gmail.com',
    //       'password': '123456789'
    //     }).then(response => {
    //       this.$auth.$storage.setUniversal('access_token', response.access_token)
    //       this.$auth.$storage.setUniversal('expires_in', response.expires_in)
    //       this.$auth.$storage.setUniversal('token_type', response.token_type)
    //       this.$auth.setUser({
    //         name: 'David'
    //       })
    //       this.$axios.defaults.headers.common = {
    //         Authorization: `Bearer ${response.access_token}`
    //       }
    //       console.log(response)
    //     }).catch(onerror => {
    //       console.log(onerror)
    //     })
    //   })
    // },
    login () {
      return new Promise((resolve, reject) => {
        this.$axios.$post('/login', {
          client_id: process.env.OAUTH_CLIENT_ID,
          client_secret: process.env.OAUTH_CLIENT_SECRET,
          username: 'dave0016@gmail.com',
          password: '123456789'
        }).then(response => {
          this.$auth.$storage.setUniversal('access_token', response.access_token)
          this.$auth.$storage.setUniversal('expires_in', response.expires_in)
          this.$auth.$storage.setUniversal('refresh_token', response.refresh_token)
          this.$auth.$storage.setUniversal('token_type', response.token_type)
          this.$axios.defaults.headers.common = {
            Authorization: response.access_token
          }
          this.user()
          console.log(response)
        }).catch(onerror => {
          console.log(onerror)
        })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        this.$axios.$post('/logout').then(response => {
          this.$axios.defaults.headers.common = {
            Authorization: ''
          }
          this.$auth.setUser(null)
          console.log(response)
        }).catch(onerror => {
          console.log(onerror)
        })
      })
    },
    user () {
      return new Promise((resolve, reject) => {
        this.$axios.$get('/user').then(response => {
          this.$auth.setUser(response)
          console.log(response)
        }).catch(onerror => {
          console.log(onerror)
        })
      })
    },
    async oauthLogin () {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            client_id: process.env.OAUTH_CLIENT_ID,
            client_secret: process.env.OAUTH_CLIENT_SECRET,
            username: 'dave0016@gmail.com',
            password: '123456789'
          }
        })
        this.user()
      }
      catch (err) {
        console.log(err)
      }
    },
    // oauthLogin(){
    //   this.$auth.loginWith('laravel.passport')
    // },
    oauthLogout () {
      this.$auth.logout()
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
