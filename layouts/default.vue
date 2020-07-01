<template>
    <NavbarTop>
        <nuxt/>
    </NavbarTop>
</template>
<script>
  import NavbarTop from '~/components/master/Navbars/Header'

  export default {
    components: {
      NavbarTop
    },
    data () {
      return {
        title: process.env.APP_TITLE
      }
    },
    head () {
      return {
        title: process.env.APP_TITLE,
        meta: []
      }
    }
  }
</script>
<style scoped></style>
