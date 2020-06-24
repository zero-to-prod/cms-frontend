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
        meta: []
      }
    }
  }
</script>
<style></style>
