<template>
    <div>
        <NavbarTop/>
        <h1 class="text-center">Home Page</h1>
    </div>
</template>
<script>
  import NavbarTop from '~/components/Navbars/NavbarTop'

  export default {
    name: 'index',
    layout: 'basic',
    auth: 'guest',
    components: {
      NavbarTop
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style></style>
