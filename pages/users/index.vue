<template>
  <div>
    <h1 class="text-center">Users</h1>
    <div v-if="!loading">
      <md-table v-model="response.data.data" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Users</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
          </md-field>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="No users found"
          :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
          <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="email">{{ item.attributes.email }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.attributes.email).includes(toLower(term)))
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
      users() {
        this.response
      }
    },
    methods: {
      getUsers() {
        this.loading = true
        return new Promise((resolve, reject) => {
          this.$axios.get('/users')
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
        this.response.data.data = searchByName(this.response.data.data, this.search)
      }
    },
    created() {

    },
    mounted() {
      this.getUsers()
    },
  }
</script>

<style scoped>
  .md-field {
    max-width: 300px;
  }
</style>
