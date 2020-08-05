<template>
  <div v-if="$i18n.locales.length > 1">
    <label for="lang"></label>
    <select class="lang-select" v-model="selectedValue" name="lang" id="lang" :md-selected="onChange(selectedValue)">
      <option class="lang-option" v-for="(locale, index) in $i18n.locales" :value="locale.code" :key="index">{{ locale.name }}
      </option>
      <!--      <md-option v-for="(locale, index) in $i18n.locales" v-if="locale.code !== $i18n.locale" :value="locale.code" :key="index">{{locale.name}}</md-option>-->
    </select>
  </div>
  <div v-else></div>
</template>
<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selectedValue: this.$i18n.locale
    }
  },
  methods: {
    onChange (event) {
      this.$router.push(this.switchLocalePath(this.selectedValue))
    }
  }
}
</script>
<style scoped>
.wrapper {
  max-width: 6rem;
}

.lang-select {
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 0;
  background-color: white;
  border-bottom: 1px solid black;
}
.lang-option {
  border: none;
  padding: 0.5rem
}
</style>
