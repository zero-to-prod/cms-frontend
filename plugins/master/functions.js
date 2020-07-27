import Vue from 'vue'

Vue.mixin({
  methods: {
    is_valid_email(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
    date_long(date){
      var time = new Date(date)
      return time.toLocaleString(this.$i18n.locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    }
  }
})
