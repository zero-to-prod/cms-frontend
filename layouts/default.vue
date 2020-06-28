<template>
    <div>
        <NavbarTop/>
        <div class="flex">
            <NavbarLeft/>
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
        title: process.env.APP_TITLE
      }
    },
    head () {
      return {
        title: process.env.APP_TITLE,
        meta: [],
        bodyAttrs: {
          class: 'bg-background-primary'
        }
      }
    }
  }
</script>
<style></style>
