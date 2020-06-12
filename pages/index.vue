<template>
  <div class="container">
    <div v-if="$auth.loggedIn">
      <button v-on:click="$auth.logout()">Logout</button>
    </div>
    <div v-else>
      <a href="/login">Login</a>
    </div>
  </div>
</template>

<script>

export default {
  auth: 'false',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>
