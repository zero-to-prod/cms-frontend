<template>
  <main>
    <nuxt/>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        title: process.env.APP_TITLE + '| Login'
      }
    },
    head() {
      return {
        title: process.env.APP_TITLE,
        meta: [],
        bodyAttrs: {
        }
      }
    }
  }
</script>
<style scoped></style>
