<template>
  <div class="sk-grid">
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
  </div>
</template>

<script>
  export default {
    name: "skGrid"
  }
</script>

<style scoped>
  .sk-grid {
    height: 1rem;
    width: 1rem;
  }

  .sk-grid-cube {
    background-color: var(--md-theme-default-primary);
  }
</style>
