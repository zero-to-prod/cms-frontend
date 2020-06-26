<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h3 class="text-center mt-6" v-html="app_name"></h3>
            <h4 class="text-center leading-9"> Create a new account</h4>
            <p class="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
                Or
                <nuxt-link to="/login"
                           class="font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    sign in to your account
                </nuxt-link>
            </p>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 bg-white sm:rounded-lg sm:px-10">
                <form v-on:click.prevent v-if="has_not_registered">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 leading-5">
                            Name
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="name"
                                   id="name"
                                   type="text"
                                   required
                                   autofocus
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 @error('name') border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red @enderror"/>
                        </div>
                        <p class="mt-2 text-sm text-red-600"></p>
                    </div>
                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium text-gray-700 leading-5">
                            Email address
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="username"
                                   id="email"
                                   type="email"
                                   required
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 @error('email') border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red @enderror"/>
                        </div>
                        <p class="mt-2 text-sm text-red-600"></p>
                    </div>
                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium text-gray-700 leading-5">
                            Password
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="password"
                                   id="password"
                                   type="password"
                                   required
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 @error('password') border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red @enderror"/>
                        </div>
                        <p class="mt-2 text-sm text-red-600"></p>
                    </div>
                    <div class="mt-6">
                        <label for="password_confirmation" class="block text-sm font-medium text-gray-700 leading-5">
                            Confirm Password
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="password_confirmation"
                                   id="password_confirmation"
                                   type="password"
                                   required
                                   class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 appearance-none rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                    </div>
                    <div class="mt-6">
                        <simple-button @click.native="register()">
                            <div v-if="!submit">
                                Register
                            </div>
                            <loading v-if="submit"></loading>
                        </simple-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Register',
    layout: 'basic',
    auth: 'guest',
    components: {},
    data () {
      return {
        submit: false,
        has_not_registered: true,
        name: null,
        username: null,
        password: null,
        password_confirmation: null,
        remember: false
      }
    },
    computed: {
      app_name () {
        return process.env.APP_NAME
      }
    },
    methods: {
      register () {
        this.$nuxt.$loading.start()
        return new Promise((resolve, reject) => {
          this.$axios.$post('/register', {
            'grant_type': 'password',
            'email': this.username,
            'password': this.password,
            'name': this.name
          }).then(response => {
            this.has_not_registered = false
            this.$nuxt.$loading.finish()
            this.$router.push({ path: 'login' })
          }).catch(onerror => {
            console.log(onerror)
          })
        })
      }
    }

  }
</script>
<style></style>
