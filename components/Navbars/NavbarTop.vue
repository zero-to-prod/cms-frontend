<template>
    <nav class="fixed right-0 top-0 w-full">
        <div class="sm:w-full">
            <div class="flex flex-row-reverse">
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
<style scoped>

</style>
