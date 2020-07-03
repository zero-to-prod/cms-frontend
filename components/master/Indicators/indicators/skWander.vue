<template>
  <div class="sk-wander">
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
  </div>
</template>

<script>
  export default {
    name: "skWander"
  }
</script>

<style scoped>
  .sk-wander {
    height: 1rem;
    width: 1rem;
  }

  .sk-wander-cube {
    background-color: var(--md-theme-default-primary);
  }
</style>
