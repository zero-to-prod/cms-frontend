<template>
    <div class="bg-gray-200 flex flex-col">
        <nuxt-link :to="route_dashboard">Dashboard</nuxt-link>
        <nuxt-link :to="route_products">Products</nuxt-link>
    </div>
</template>
<script>
  export default {
    name: 'NavbarLeft'
  }
</script>
<style scoped></style>