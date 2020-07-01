<template>
  <div>
    <NavbarTop class="navbar-top"/>
    <NavbarLeft class="navbar-left"/>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  import NavbarLeft from '~/components/master/Navbars/NavbarLeft'
  import NavbarTop from '~/components/master/Navbars/Header'

  export default {
    components: {
      NavbarLeft,
      NavbarTop
    },
    data() {
      return {
        title: process.env.APP_TITLE
      }
    },
    head() {
      return {
        title: process.env.APP_TITLE,
        meta: [],
      }
    }
  }
</script>
<style scoped>
  .content{
    min-height: calc(100vh - (64px + 80px + (30px * 2)));
    margin: var(--nav-top-height) 0 0 var(--nav-left-width)
  }
</style>
