<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h3 class="text-center mt-6" v-html="APP_NAME"></h3>
            <h4 class="text-center leading-9"> Sign in to your account</h4>
            <p class="mt-2 text-sm text-center leading-5 max-w">
                Or
                <nuxt-link to="/register"
                           class="font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
                    create a new account
                </nuxt-link>
            </p>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="form-wrapper px-4 py-8 sm:rounded-lg sm:px-10">
                <form v-on:submit.prevent>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-5">
                            Email address
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="username"
                                   id="email"
                                   name="email"
                                   type="email"
                                   required
                                   autofocus
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                    </div>
                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5">
                            Password
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input v-model="password"
                                   id="password"
                                   type="password"
                                   required
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                        <p class="mt-2 text-sm text-red-600"></p>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center">
                            <input v-model="remember"
                                   id="remember"
                                   type="checkbox"
                                   class="form-checkbox w-4 h-4 transition duration-150 ease-in-out"/>
                            <label for="remember" class="block ml-2 text-sm leading-5">
                                Remember
                            </label>
                        </div>
                        <div class="text-sm leading-5">
                            <a href=""
                               class="font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div class="mt-6">
                        <simple-button :disabled="submit" @click.native="login(username, password)">
                            <div v-if="!submit">
                                Sign in
                            </div>
                            <loading v-if="submit" class="p-3"></loading>
                        </simple-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Login',
    layout: 'basic',
    auth: 'guest',
    data () {
      return {
        submit: false,
        username: null,
        password: null,
        remember: false
      }
    },
    computed: {},
    methods: {}
  }
</script>
<style scoped>
    .form-wrapper{
        background-color: var(--color-form-primary);
    }
</style>
