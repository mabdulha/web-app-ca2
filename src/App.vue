<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/paw.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Missing Paws Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i style="padding: 5px"> Home </i></b-nav-item>
          <b-nav-item to="/pets"><i style="padding: 5px"> View Pets </i></b-nav-item>
          <b-nav-item v-if="$store.state.isOwnerLoggedIn" to="/managepets"><i style="padding: 5px"> Manage Pets </i></b-nav-item>
          <b-nav-item v-if="$store.state.isOwnerLoggedIn" to="/add"><i style="padding: 5px"> Report Missing Pet </i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!$store.state.isOwnerLoggedIn" to="/login"><i style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item v-if="!$store.state.isOwnerLoggedIn" to="/register"><i style="padding: 5px"> Register </i></b-nav-item>
          <b-nav-item v-if="$store.state.isOwnerLoggedIn" @click="logout"><i style="padding: 5px"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <sitefooter></sitefooter>
  </div>
</template>

<script>
import Footer from './components/views/Footer.vue'

export default {
  name: 'App',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setOwner', null)
      window.location.reload()
      this.$router.push('/')
    }
  },
  components: {
    'sitefooter': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3a3333;
}

.VueTables__sortable {
  cursor: pointer;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

.VueTables a {
  cursor: pointer;
}
</style>
