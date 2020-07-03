<template>
  <div class="sk-flow">
    <div class="sk-flow-dot"></div>
    <div class="sk-flow-dot"></div>
    <div class="sk-flow-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skFlow'
  }
</script>
<style scoped>
  .sk-flow {
    height: 1rem;
    width: 1rem;
  }

  .sk-flow-dot {
    margin: auto;
    background-color: var(--md-theme-default-primary);
  }
</style>
