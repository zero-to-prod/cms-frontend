<template>
    <!--<div>-->
    <!--  <NavbarTop/>-->
    <!--  <div class="content">-->
    <!--    <h1 class="text-center font-serif">Home Page</h1>-->
    <!--    <nuxt-link :to="route_dashboard">Dashboard</nuxt-link>-->
    <!--    <nuxt-link :to="route_indicators">Indicators</nuxt-link>-->
    <!--  </div>-->
    <!--</div>-->
</template>
<script>
  import NavbarTop from '~/components/master/Navbars/Header'

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
<style lang="scss" scoped>

</style>
