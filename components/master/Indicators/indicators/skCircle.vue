<template>
  <div class="sk-circle">
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skCircle'
  }
</script>
<style scoped>
  .sk-circle {
    height: 1rem;
    width: 1rem;
  }

  .sk-circle-dot::before {
    background-color: var(--color-indicator-primary)
  }
</style>
