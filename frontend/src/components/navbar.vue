<template>
  <div class="mb-1">
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'navbar' }">AccountApp</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Dashboard</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Account" right>
          <b-dropdown-item :to="{ name: 'view' }">Get Accounts</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'add' }">Add Account</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
    <b-navbar-brand>{{ this.$parent.pagetitle }}</b-navbar-brand>
  </b-navbar>
  </div>
</template>
<script>
  export default {
        name: 'navbar'
    }
</script>

<style scoped>
</style>
