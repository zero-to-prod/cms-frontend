<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <a href="">
        <div class="w-auto h-16 mx-auto text-gray-600"/>
      </a>
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9">
        Create a new account
      </h2>
      <p class="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
        Or
        <a href="/login"
           class="font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:underline transition ease-in-out duration-150">
          sign in to your account
        </a>
      </p>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form v-on:click.prevent>
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
            <span class="block w-full rounded-md shadow-sm">
              <button type="submit" v-on:click="register()"
                      class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out">
                Register
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    auth: 'guest',
    components: {},
    data () {
      return {
        name: null,
        username: null,
        password: null,
        password_confirmation: null,
        remember: false
      }
    },
    methods: {
      register () {
        return new Promise((resolve, reject) => {
          this.$axios.$post('/register', {
            'grant_type': 'password',
            'email': this.username,
            'password': this.password,
            'name': this.name
          }).then(response => {
            console.log(response)
          }).catch(onerror => {
            console.log(onerror)
          })
        })
      }
    }

  }
</script>
<style></style>
