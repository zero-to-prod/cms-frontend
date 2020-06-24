<template>
    <div>
        <NavbarTop/>
        <div class="flex">
            <NavbarLeft/>
            <nuxt/>
        </div>
    </div>

</template>
<script>
  import NavbarLeft from '~/components/Navbars/NavbarLeft'
  import NavbarTop from '~/components/Navbars/NavbarTop'

  export default {
    components: {
      NavbarLeft,
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
        meta: [
          { 'http-equiv': 'pragma', content: process.env.CACHE_PRAGMA },
          { 'http-equiv': 'cache-control', content: process.env.CACHE_CONTROL },
          { 'http-equiv': 'expires', content: process.env.CACHE_EXPIRES }
        ]
      }
    }
  }
</script>
<style></style>
