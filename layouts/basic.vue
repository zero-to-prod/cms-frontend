<template>
    <div>
        <nuxt/>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        title: process.env.APP_TITLE + '| Login'
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
