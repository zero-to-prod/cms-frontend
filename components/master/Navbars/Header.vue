<template>
    <header class="fixed right-0 top-0 w-full">
        <div class="flex flex-row-reverse">
            <div v-if="$auth.loggedIn">
                <button v-on:click="logout()" class="px-3">Logout</button>
            </div>
            <div v-else>
                <nuxt-link :to="route_login"><button class="px-3">Login</button></nuxt-link>
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
<style scoped>

    button {
        height: var(--nav-top-height);
    }
</style>
