<template>
  <form novalidate class="md-layout" @submit.prevent="validateUser">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title title-wrapper"><span>Login</span><span>{{APP_TITLE}}</span></div>
        <div class="md-accent sub-title-wrapper"><span>Sign into your account.</span><span><nuxt-link
          :to="route_register">Register</nuxt-link></span>
        </div>
      </md-card-header>
      <md-card-content>
        <md-field :class="getValidationClass('email')">
          <label for="email">Email</label>
          <md-input type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    v-model="form.email"
                    :disabled="sending"/>
          <md-email/>
          <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
          <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
        </md-field>
        <md-field :class="getValidationClass('password')">
          <label for="password">Password</label>
          <md-input type="password"
                    name="password"
                    id="password"
                    autocomplete="password"
                    v-model="form.password"
                    :disabled="sending"/>
          <span class="md-error" v-if="!$v.form.password.required">A password is required.</span>
          <span class="md-error" v-else-if="!$v.form.password.password">Invalid password.</span>
        </md-field>
      </md-card-content>
      <md-progress-bar md-mode="indeterminate" v-if="sending"/>
      <md-card-actions>
        <md-button type="submit" class="md-primary button" :disabled="sending">Login</md-button>
      </md-card-actions>
    </md-card>
    <md-snackbar :md-active.sync="not_authenticated" :md-duration="5000000000" md-persistent>
      <span>Invalid Credentials</span>
    </md-snackbar>
  </form>
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import {email, required} from 'vuelidate/lib/validators'
  import LangSwitcher from "~/components/master/Lang/LangSwitcher";

  export default {
    name: 'Login',
    layout: 'basic',
    auth: 'guest',
    mixins: [validationMixin],
    components: {
      LangSwitcher
    },
    data() {
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
        userSaved: false,
        sending: false,
        not_authenticated: false
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
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.email = null
        this.form.password = null
      },
      validateUser() {
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

  form {
    padding-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
