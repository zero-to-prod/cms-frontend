<template>
  <md-field class="wrapper md-theme-default" v-if="$i18n.locales.length > 1">
    <label for="lang"></label>
    <md-select class="" v-model="selectedValue" name="lang" id="lang" :md-selected="onChange(selectedValue)">
      <md-option v-for="(locale, index) in $i18n.locales" v-if="locale.code !== $i18n.locale" :value="locale.code" :key="index">{{locale.name}}</md-option>
    </md-select>
  </md-field>
<!--  <select v-model="selectedValue" @change="onChange(selectedValue)">-->
<!--    <option disabled value>Please select one</option>-->
<!--    <option-->
<!--      v-for="(locale, index) in $i18n.locales"-->
<!--      :key="index"-->
<!--      :value="locale.code"-->
<!--    >{{locale.name}}</option>-->
<!--  </select>-->
</template>

<script>
  export default {
    name: "LangSwitcher",
    data() {
      return {
        selectedValue: this.$i18n.locale
      }
    },
    methods: {
      onChange(event) {
        console.log('hit')
        this.$router.replace(this.switchLocalePath(this.selectedValue));
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    max-width: 6rem;
  }
</style>
