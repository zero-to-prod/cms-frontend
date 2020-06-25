<template>
    <nav class="items-center shadow-md flex justify-around">
        <div class="sm:w-full">
            <div class="flex sm:justify-between items-center">
                <nuxt-link :to="route_home" class="p-3">Home</nuxt-link>
                <div v-if="$auth.loggedIn">
                    <nuxt-link :to="route_dashboard" class="p-3">Dashboard</nuxt-link>
                </div>
                <div v-if="$auth.loggedIn">
                    <button v-on:click="logout()" class="p-3">Logout</button>
                </div>
                <div v-else>
                    <nuxt-link :to="route_login" class="p-3">Login</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
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