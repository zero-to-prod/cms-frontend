<template>
  <div class="sk-fold">
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
  </div>
</template>

<script>
  export default {
    name: "skFold"
  }
</script>

<style scoped>
  .sk-fold {
    height: 1rem;
    width: 1rem;
  }

  .sk-fold-cube::before {
    background-color: var(--md-theme-default-primary);
  }
</style>
