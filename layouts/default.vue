<template>
    <div>
        <navbar-top/>
        <div class="flex">
            <navbar-left/>
            <nuxt/>
        </div>
    </div>

</template>
<script>
  import NavbarLeft from '~/components/Navbars/NavbarLeft'
  import NavbarTop from '~/components/Navbars/NavbarTop'

  export default {
    components: {
      NavbarLeft,
      NavbarTop
    },
    data () {
      return {
      }
    },
    head () {
      return {
        title: this.APP_NAME + this.$route.path,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          // { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>
<style></style>
