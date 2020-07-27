<template>
  <form novalidate class="md-layout" @submit.prevent="validateUser">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title title-wrapper"><span>Register</span><span>{{APP_TITLE}}</span></div>
        <div class="md-accent sub-title-wrapper"><span>Create your account.</span><span><nuxt-link
          :to="route_login">Login</nuxt-link></span></div>
      </md-card-header>

      <md-card-content>
        <md-field :class="getValidationClass('name')">
          <label for="name">Name</label>
          <md-input type="text" name="name" id="name" autocomplete="name"
                    v-model="form.name"
                    :disabled="sending"/>
          <span class="md-error" v-if="!$v.form.email.required">A name is required</span>
          <span class="md-error" v-if="!$v.form.email.isUnique">{{message}}</span>
          <span class="md-error" v-else-if="!$v.form.email.email">Invalid name</span>
        </md-field>
        <md-field :class="getValidationClass('email')">
          <label for="email">Email</label>
          <md-input v-on:keyup="debounceEmail()" type="email" name="email" id="email" autocomplete="email"
                    v-model="form.email"
                    :disabled="sending"/>
          <md-email :class="email_is_unique_class"/>
          <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
          <span class="md-error" v-if="!$v.form.email.isUnique">{{message}}</span>
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
        <md-field v-if="$i18n.locales.length > 1">
          <label for="locale">{{$t('Default_Language')}}</label>
          <md-select v-model="form.locale" name="locale" id="locale">
            <md-option v-bind:key="locale.code" v-for="locale in $i18n.locales" :value="locale.code">{{locale.name}}</md-option>
          </md-select>
        </md-field>
      </md-card-content>
      <md-progress-bar md-mode="indeterminate" v-if="sending"/>
      <md-card-actions>
        <md-button type="submit" class="md-primary button" :disabled="sending">Register</md-button>
      </md-card-actions>
    </md-card>
    <md-snackbar :md-active.sync="finished" :md-duration="5000000000" md-persistent>
      <span>{{message}}</span>
      <nuxt-link :to="route_login">Login</nuxt-link>
    </md-snackbar>
    <md-snackbar :md-active.sync="email_is_unavailable" :md-duration="5000000000" md-persistent>
      <span>Email already registered</span>
    </md-snackbar>
    <md-dialog :md-active.sync="success">
      <md-dialog-title>Success</md-dialog-title>
      <md-dialog-content>
        <p>Account {{form.email}} created.</p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary button" :to="route_login" @click="success = false">Login</md-button>
      </md-dialog-actions>
    </md-dialog>
  </form>
</template>
<script>
  import {validationMixin} from 'vuelidate'
  import {email, maxLength, minLength, required} from 'vuelidate/lib/validators'

  export default {
    name: 'Register',
    layout: 'basic',
    auth: 'guest',
    components: {},
    mixins: [validationMixin],
    data() {
      return {
        form: {
          name: null,
          email: null,
          password: null,
          locale: 'en'
        },
        timeout_id: null,
        success: false,
        message: '',
        finished: false,
        sending: false,
        email_is_unique_class: '',
        email_is_unavailable: false,
        error_email: false
      }
    },
    validations: {
      form: {
        email: {
          required,
          email,
          maxLength: maxLength(255),
        },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(255)
        },
        name: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(255)
        }
      }
    },
    computed: {},
    methods: {
      debounceEmail() {
        clearTimeout(this.timeout_id);
        this.timeout_id = setTimeout(() => {
          this.isEmailUnique()
        }, 1000)
      },
      isEmailUnique() {
        if (this.is_valid_email(this.form.email)) {
          return new Promise((resolve, reject) => {
            this.$axios.$post(this.route_api_users_actions_is_email_unique, {
              email: this.form.email
            }).then(response => {
              if (response.is_unique) {
                this.email_is_unavailable = false
                this.email_is_unique_class = 'green'
              } else {
                this.email_is_unavailable = true
                this.email_is_unique_class = 'red'
              }
            }).catch(onerror => {
              console.log(onerror)
            })
          })
        }
      },

      register() {
        if (this.email_is_unavailable) {
          return;
        }
        return new Promise((resolve, reject) => {
          this.success = false
          this.finished = false
          this.sending = true
          this.$axios.$post('/register', {
            'grant_type': 'password',
            'name': this.form.name,
            'email': this.form.email,
            'password': this.form.password,
            'locale_default': this.form.locale
          }).then(response => {
            this.sending = false
            this.success = true
            this.message = `Account ${this.form.email} created.`
          }).catch(onerror => {
            this.sending = false
            this.finished = true
            this.error_email = true
            this.message = onerror.response.data.errors.email[0]
          })
        })
      },
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      debounce(func, wait, immediate) {
        var timeoutID, timeout = timeout || 2000;
        return function () {
          var scope = this, args = arguments;
          clearTimeout(timeoutID);
          timeoutID = setTimeout(function () {
            func.apply(scope, Array.prototype.slice.call(args));
          }, timeout);
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.password = null
        this.form.email = null
      },
      validateUser() {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.register()
        }
      }
    }
    ,
  }
</script>
<style lang="scss" scoped>
  .red {
    color: red;
  }

  .green {
    color: green
  }

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
