<template>
  <div class="sk-swing">
    <div class="sk-swing-dot"></div>
    <div class="sk-swing-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skSwing'
  }
</script>
<style scoped>
  .sk-swing {
    height: 1rem;
    width: 1rem;
  }

  .sk-swing-dot {
    background-color: var(--color-indicator-primary);
  }
</style>
