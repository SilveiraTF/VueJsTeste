<template>
  <div class="Cards grid">
    <Card style="width: 45rem" class="col-6 col-offset-3">
      <template #header>
        <h2>GitHub API Project</h2>
        <h3>Search your repository</h3>
      </template>
      <template #content>
        <label for="user" style="font-size: 1.75rem; font-family: monospace"
          >User</label
        >
        <InputText
          style="width: 250px; margin-left: 18%"
          id="user"
          type="text"
          placeholder="Enter your username..."
          v-model="userSearch"
          class="field"
        />
      </template>
      <template #footer>
        <Button
          class="button"
          icon="pi pi-search"
          type="button"
          value="Submit"
          label="Search"
          style="width: 110px; margin-left: 41%"
          @click.prevent.stop="onGetUser()"
        />
      </template>
    </Card>
    <div>
      <DataTable
        :value="repos"
        responsiveLayout="scroll"
        style="width: 46%; margin-left: 24%"
      >
        <Column field="name" header="Name"></Column>
        <Column field="full_name" header="Full Name"></Column>
      </DataTable>
    </div>
    <div class="cube">
    </div>
  </div>
</template>

<script>
import GitService from '../services/gitService'

export default {
  data() {
    return {
      user: '',
      userSearch: '',
      repos: []
    }
  },
  methods: {
    async onGetUser() {
      this.user = await GitService.getUser(this.userSearch)
      this.repos = await GitService.getRepos(this.user.repos_url)
    }
  }
}
</script>

<style></style>
