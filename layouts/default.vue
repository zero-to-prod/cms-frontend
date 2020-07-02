<template>
    <navbar-top>
        <nuxt/>
    </navbar-top>
</template>
<script>
  import NavbarTop from '~/components/master/Navbars/NavbarTop'

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
