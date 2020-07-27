<template>
  <div>
    <h1>Lang navigation</h1>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "LangNavigation.vue"
  }
</script>

<style scoped>

</style>
