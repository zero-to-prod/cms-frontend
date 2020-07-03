<template>
  <div class="sk-circle-fade">
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
  </div>
</template>
<script>
  export default {
    name: 'skCircleFade'
  }
</script>
<style scoped>
  .sk-circle-fade {
    height: 1rem;
    width: 1rem;
  }

  .sk-circle-fade-dot::before {
    background-color: var(--md-theme-default-primary);
  }
</style>
