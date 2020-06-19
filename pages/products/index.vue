<template>
    <div>
        <div class="w-100">
            <h1 class="text-4xl text-center">Products</h1>
        </div>
        <button v-on:click="getProducts()">Get Products</button>
        <ul>
            <li v-for="product in products">{{product.attributes.name}}</li>
        </ul>
        <Loading/>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Products',
    components: {},
    data () {
      return {}
    },

    computed: {
      ...mapGetters({
        products: 'products/getProducts'
      })
    },
    methods: {
      ...mapActions({
        getProducts: 'products/getProducts'
      })
    }
  }
</script>
<style></style>
