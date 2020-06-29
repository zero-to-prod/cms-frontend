<template>
  <div class="sk-bounce">
    <div class="sk-bounce-dot"></div>
    <div class="sk-bounce-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skBounce'
  }
</script>
<style scoped>
  .sk-bounce {
    height: 1rem;
    width: 1rem;
  }

  .sk-bounce-dot {
    background-color: var(--color-indicator-primary)
  }
</style>
