<template>
    <div>
        <nuxt/>
    </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    head () {
      return {
        title: this.APP_TITLE + this.$route.path,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          // { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>
<style></style>
