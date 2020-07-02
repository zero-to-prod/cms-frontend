<template>
    <div>
        <h1>Home Page</h1>
        <nuxt-link :to="route_dashboard">Dashboard</nuxt-link>
        <br/>
        <nuxt-link :to="route_login">Login</nuxt-link>
    </div>
</template>
<script>
  import NavbarTop from '~/components/master/Navbars/NavbarTop'

  export default {
    name: 'index',
    layout: 'basic',
    auth: 'guest',
    components: {
      NavbarTop
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss" scoped></style>
