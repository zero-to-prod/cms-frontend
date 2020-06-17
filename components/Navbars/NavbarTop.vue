<template>
    <header class="items-center hover:shadow-md sm:shadow-md transition duration-150 sm:block flex justify-around p-3">
        <div class="w-32 sm:w-full">
            <div class="sm:flex sm:justify-between items-center">
                <nuxt-link :to="route_home">Home</nuxt-link>
                <div v-if="$auth.loggedIn">
                    <nuxt-link :to="route_dashboard">Dashboard</nuxt-link>
                </div>
                <div v-if="$auth.loggedIn">
                    <button v-on:click="$auth.logout()">Logout</button>
                </div>
                <div v-else>
                    <nuxt-link :to="route_login">Login</nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
  export default {
    name: 'NavbarTop',
    data () {
      return {}
    },
    methods: {},
    watch: {}
  }
</script>
<style scoped></style>