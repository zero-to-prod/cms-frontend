<template>
  <div>
    <md-content v-if="!loading">
      <header>
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{ name_abbreviation }}</md-ripple>
        </md-avatar>
        <h1>
          <span class="md-headline">{{ $store.state.user.index.name }}</span>
        </h1>
        <p>
          <span class="md-caption">{{ $t('Last_login') }}: {{
              $date_long($store.state.user.last_login.created_at, $i18n.locale)
            }}</span>
        </p>
      </header>
      <user-component/>
    </md-content>
    <md-empty-state v-else :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>
<script>
import UserComponent from '~/components/master/User/UserComponent'
import {validationMixin} from 'vuelidate'
import {mapState} from 'vuex'
import {minLength, required} from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'
export default {
  name: 'User',
  components: {
    UserComponent
  },
  middleware: 'user',
  mixins: [validationMixin],
  data() {
    return {
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
  computed: {
    name_abbreviation: function (){
      return this.$user_name_abbreviation(this.$store.getters["user/name"])
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style scoped>
header {
  text-align: center;
}
</style>
