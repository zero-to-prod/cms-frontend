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
          { 'http-equiv': 'pragma', content: 'no-cache' },
          { 'http-equiv': 'cache-control', content: 'max-age=31536000' },
          { 'http-equiv': 'expires', content: '0' }
        ]
      }
    }
  }
</script>
<style></style>
