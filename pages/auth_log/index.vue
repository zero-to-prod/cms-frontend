<template>
  <md-table :value="data" md-sort="name" md-sort-order="asc" md-fixed-header>
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">{{ $t('Authentication_Log') }}</h1>
      </div>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell :md-label="$t('Event')" md-sort-by="login">{{ login_to_string(item.login) }}</md-table-cell>
      <md-table-cell :md-label="$t('Time')" md-sort-by="created_at">{{ $date_long(item.created_at, $i18n.locale) }}</md-table-cell>
      <md-table-cell :md-label="$t('IP_Address')" md-sort-by="ip_address">{{ item.ip_address }}</md-table-cell>
      <md-table-cell :md-label="$t('User_Agent')" md-sort-by="ip_address" :title="item.user_agent">{{ $ellipsis(item.user_agent, 20)}}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Users",
  middleware: 'auth_log',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters("auth_log", {
      data: "getIndex",
      // Here you can import other getters from the products.js
    })
    // data: function () {
    //   return JSON.parse(JSON.stringify(this.$store.state.auth_log.index))
    // },
  },
  methods: {
    login_to_string(login) {
      if (login === 1) {
        return this.$t('Login')
      }
      return this.$t('Logout')
    },
    get(){
      this.$axios.post('/auth-log-test',{
        response: {
          auth_log: {}
        }
      })
    }
  },
  created() {
  },
}
</script>

<style scoped>
.md-field {
  max-width: 300px;
}
.user-agent{
  white-space: normal;
  padding-bottom: 1rem;
}
</style>
