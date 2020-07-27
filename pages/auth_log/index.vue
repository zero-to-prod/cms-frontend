<template>
  <div>
    <div v-if="!loading">
      <md-table v-model="response.data" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">{{$t('Authentication_Log')}}</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input :placeholder="$t('Search_by_name') + '...'" v-model="search" @input="searchOnTable"/>
          </md-field>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="No users found"
          :md-description="`No user found for this '${search}' query. Try a different search term.`">
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell :md-label="$t('Name')" md-sort-by="name">{{item.user.name}}</md-table-cell>
          <md-table-cell :md-label="$t('Event')" md-sort-by="login">{{ login_to_string(item.login) }}</md-table-cell>
          <md-table-cell :md-label="$t('Time')" md-sort-by="created_at">{{ date_long(item.created_at) }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-empty-state
      v-else
      md-icon=""
      :md-description="$t('Searching_the_database')">
      <loading/>
    </md-empty-state>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.user.name).includes(toLower(term)))
    }

    return items
  }
  export default {
    name: "Users",
    data() {
      return {
        search: null,
        searched: [],
        response: {},
        loading: true,
      }
    },
    computed: {
      user: function () {
        return this.response.data
      },
      users_table: function () {
        var flatten = require('flat')
        return this.flatten(this.response.data.data)
      }
    },
    methods: {
      login_to_string(login) {
        if (login === 1) {
          return this.$t('Login')
        }
        return this.$t('Logout')
      },
      getAuthLog() {
        this.loading = true
        return new Promise((resolve, reject) => {
          this.$axios.get(this.route_api_auth_log)
            .then(response => {
              this.response = response
              this.loading = false
            }).catch(onerror => {
            this.loading = false
            console.log(onerror)
          })
        })
      },
      newUser() {
        window.alert('Noop')
      },
      searchOnTable() {
        this.response.data = searchByName(this.response.data, this.search)
      }
    },
    created() {

    },
    mounted() {
      this.getAuthLog()
    },
  }
</script>

<style scoped>
  .md-field {
    max-width: 300px;
  }
</style>
