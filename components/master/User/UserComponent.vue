<template>
  <md-list>
    <md-subheader>{{ $t('Name') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-avatar class="md-avatar-icon md-accent md-small">
          <md-ripple>{{ user_name_abbreviation(user.name) }}</md-ripple>
        </md-avatar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ user.name }}</span>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Email') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-email></md-email>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ user.email }}</span>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Language') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-translate v-if="!loading"></md-translate>
        <loading v-else/>
      </md-icon>
      <div class="md-list-item-text">
        <md-radio v-model="user.locale"
                  :value="locale.code"
                  v-for="locale in $i18n.locales"
                  @change="changeLocale()"
                  :name="locale.name"
                  :id="locale.name"
                  v-bind:key="locale.name">{{ locale.name }}
        </md-radio>
      </div>
    </md-list-item>
    <md-subheader>{{ $t('Details') }}</md-subheader>
    <md-list-item>
      <md-icon class="md-primary">
        <md-calendar></md-calendar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ date_long(user.created_at) }}</span>
        <span>{{ $t('Created_at') }}</span>
      </div>
    </md-list-item>
    <md-list-item>
      <md-icon class="md-secondary">
        <md-calendar></md-calendar>
      </md-icon>
      <div class="md-list-item-text">
        <span>{{ date_long(user.updated_at) }}</span>
        <span>{{ $t('Updated_at') }}</span>
      </div>
    </md-list-item>
  </md-list>
</template>
<script>
export default {
  name: 'user-component',
  props: {
    user: Object
  },
  data () {
    return {
      loading: false,
      response: {}
    }
  },
  computed: {},
  methods: {

  },
  created () {
  },
  mounted () {
  }
}
</script>
<style scoped></style>