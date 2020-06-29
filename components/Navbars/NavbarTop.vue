<template>
    <nav class="fixed right-0 top-0 w-full">
        <div class="flex flex-row-reverse">
            <div v-if="$auth.loggedIn">
                <button v-on:click="logout()" :class="component_class">Logout</button>
            </div>
            <div v-else>
                <nuxt-link :to="route_login" :class="component_class">Login</nuxt-link>
            </div>
        </div>
    </nav>
</template>
<script>
  export default {
    name: 'NavbarTop',
    data () {
      return {
        component_class: 'px-3'
      }
    },
    methods: {},
    watch: {}
  }
</script>
<style scoped>
    nav {
        height: var(--nav-top-height);
        padding: 0 0 0 var(--nav-left-width);
    }
    button{
        height: var(--nav-top-height);
    }
</style>
