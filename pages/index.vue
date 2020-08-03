<template>
  <div>
    <h1>Home Page</h1>
    <nuxt-link :to="r_dashboard" v-html="$t('Dashboard')"/>
    <br/>
    <nuxt-link :to="r_login" v-html="$t('Login')"/>
    <nuxt-link :to="r_register" v-html="$t('Register')"/>
  </div>
</template>
<script>
import NavbarTop from '~/components/master/Navbars/NavbarMain'

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
