import Vue from 'vue'

Vue.mixin({
  methods: {
    is_valid_email(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
  }
})
