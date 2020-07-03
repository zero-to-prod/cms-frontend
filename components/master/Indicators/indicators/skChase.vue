<template>
  <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skChase'
  }
</script>
<style scoped>
  .sk-chase {
    height: 1rem;
    width: 1rem;
  }

  .sk-chase-dot::before {
    background-color: var(--md-theme-default-primary)
  }
</style>
