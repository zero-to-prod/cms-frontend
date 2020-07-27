<template>
  <md-field class="wrapper md-theme-default" v-if="$i18n.locales.length > 1">
    <label for="lang"></label>
    <md-select class="" v-model="selectedValue" name="lang" id="lang" :md-selected="onChange(selectedValue)">
      <md-option v-for="(locale, index) in $i18n.locales" v-if="locale.code !== $i18n.locale" :value="locale.code" :key="index">{{locale.name}}</md-option>
    </md-select>
  </md-field>
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
