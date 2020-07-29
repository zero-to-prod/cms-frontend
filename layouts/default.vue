<template>
  <navbar-top>
    <nuxt/>
  </navbar-top>
</template>
<script>
import NavbarTop from '~/components/master/Navbars/NavbarMain'

export default {
  name: 'default-layout',
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
