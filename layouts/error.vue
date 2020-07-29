<template>
  <div class="container">
    <h1 v-if="error.statusCode === 401">Not found</h1>
    <h1 v-if="error.statusCode === 403">Module not available</h1>
    <h1 v-else>An error occurred</h1>
    <p>{{error}}</p>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'basic' // you can set a custom layout for the error page
  }
</script>
