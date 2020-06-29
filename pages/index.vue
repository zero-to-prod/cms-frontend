<template>
  <div>
    <NavbarTop/>
    <div class="content">
      <h1 class="text-center">Home Page</h1>
      <nuxt-link :to="route_dashboard">Dashboard</nuxt-link>
    </div>
  </div>
</template>
<script>
  import NavbarTop from '~/components/Navbars/NavbarTop'

  export default {
    name: 'index',
    layout: 'basic',
    auth: 'guest',
    components: {
      NavbarTop
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style scoped>
  .content {
    margin-top: var(--nav-top-height);
  }
</style>
