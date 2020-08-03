<template>
  <form novalidate class="md-layout" @submit.prevent="validateUser">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title title-wrapper">
          <span v-html="$t('Login')"/>
          <span v-html="APP_TITLE"/>
        </div>
        <div class="md-accent sub-title-wrapper">
          <span v-html="$t('Sign_into_your_account')"/>
          <span>
            <nuxt-link :to="r_register" v-html="$t('Register')"/>
          </span>
        </div>
      </md-card-header>
      <md-card-content>
        <md-field :class="getValidationClass('email')">
          <label for="email" v-html="$t('Email')"/>
          <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending"/>
          <md-email/>
          <span class="md-error" v-if="!$v.form.email.required" v-html="$t('An_email_is_required')"/>
          <span class="md-error" v-else-if="!$v.form.email.email" v-html="$t('Invalid_email')"/>
        </md-field>
        <md-field :class="getValidationClass('password')">
          <label for="password" v-html="$t('Password')"/>
          <md-input type="password"
                    name="password"
                    id="password"
                    autocomplete="password"
                    v-model="form.password"
                    :disabled="sending"/>
          <span class="md-error" v-if="!$v.form.password.required" v-html="$t('A_password_is_required')"/>
          <span class="md-error" v-else-if="!$v.form.password.password" v-html="$t('Invalid_password')"/>
        </md-field>
      </md-card-content>
      <md-progress-bar md-mode="indeterminate" v-if="sending"/>
      <md-card-actions>
        <md-list class="md-dense">
          <md-list-item>
            <md-translate class="md-icon"/>
            <lang-switcher/>
          </md-list-item>
        </md-list>
        <md-button type="submit" class="md-primary button" :disabled="sending">{{ $t('Login') }}</md-button>
      </md-card-actions>
    </md-card>
    <md-snackbar :md-active.sync="not_authenticated" :md-duration="5000000000" md-persistent>
      <span v-html="$t('Invalid_credentials')"/>
    </md-snackbar>
  </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'
import LangSwitcher from '~/components/master/Lang/LangSwitcher'

export default {
  name: 'Login',
  layout: 'basic',
  auth: 'guest',
  mixins: [validationMixin],
  components: {
    LangSwitcher
  },
  data () {
    return {
      submit: false,
      username: null,
      password: null,
      remember: false,
      form: {
        email: null,
        password: null,
        locale: 'en'
      },
      locale: null,
      userSaved: false,
      sending: false,
      not_authenticated: false,
      expandLanguage: false
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: {},
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.email = null
      this.form.password = null
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.login(this.form.email, this.form.password)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  border-radius: 0.5rem;
}

.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.form-wrapper {
  height: 100vh;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
}

.sub-title-wrapper {
  display: flex;
  justify-content: space-between;
}

.md-card-actions.md-alignment-right {
  justify-content: space-between;
}

form {
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
