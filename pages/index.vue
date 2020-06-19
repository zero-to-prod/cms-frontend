<template>
    <div>
        <NavbarTop/>
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
