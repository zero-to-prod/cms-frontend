<template>
  <div>
    <button @click="$fetch">
      Refresh
    </button>
    <md-content v-if="!loading">
      <header>
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{ user_name_abbreviation($auth.user.user.name) }}</md-ripple>
        </md-avatar>
        <h1>
          <span class="md-headline">{{ $auth.user.user.name }}</span>
        </h1>
        <h1>
          <span class="md-headline">{{ test }}</span>
        </h1>
        <h1>
          <span class="md-headline">{{ normal_computed_property }}</span>
        </h1>
        <p>
          <span class="md-caption">{{ $t('Last_login') }}: {{ last_login }}</span>
        </p>
      </header>
      <user-component v-bind:user="$auth.user.user"/>
    </md-content>
    <md-empty-state v-else :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>
<script>
import UserComponent from '~/components/master/User/UserComponent'
import { validationMixin } from 'vuelidate'
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
export default {
  name: 'User',
  components: {
    UserComponent
  },
  async fetch () {
    this.post = await this.$axios.get(this.route_api_user)
  },
  mixins: [validationMixin],
  data () {
    return {
      post: {},
      loading: false,
      response: {},
      form: {
        firstName: null,
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
    }
  },
  computed: mapState({
    test: state => state.auth_log.test,
    normal_computed_property(state){
      return 'Normal Computed Property'
    },
    last_login() {
      return this.$store.getters['auth_log/lastLogin']
    },
    // user: function() {
    //   return this.response.data.data.user
    // },
    // last_login: function() {
    //   return this.response.data.data.last_login
    // },
    // test : function () {
    //   return this.$store.state.auth_log.test
    // }
  }),
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
  },
  created () {

  },
  mounted () {
    // this.getUser()
  }
}
</script>
<style scoped>
header {
  text-align: center;
}
</style>
