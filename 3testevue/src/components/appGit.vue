<template>
  <div class="flex flex-column m-5 align-items-center">
    <div
      class="absolute top-0 left-0 px-4 py-3 w-full font-bold bg-blue-500 text-white"
    >
      TESTE | GIT
    </div>
    <div
      class="absolute left-0 px-4 py-3 w-full font-bold bg-white text-blue-500"
      style="margin-top: 10px"
    >
      Search your repository
    </div>

    <div
      class="flex flex-column p-card p-5 mb-5 mt-8 fadeinleft animation-duration-1000"
    >
      <label for="user">User</label>
      <InputText
        id="user"
        type="text"
        placeholder="Enter your username..."
        v-model="userSearch"
        class="mb-5"
      />
      <Button
        class="button"
        icon="pi pi-search"
        type="button"
        value="Submit"
        label="Search"
        @click.prevent.stop="onGetUser()"
      />
    </div>

    <div class="p-card p-5 w-9">
      <DataTable :value="repos" responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <Column field="full_name" header="Full Name"></Column>
      </DataTable>
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
