<template>
  <div id="app">
    <b-navbar toggleable="md" variant="light" type="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/paw.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Missing Paws Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/pets"><i class="fa fa-list" style="padding: 5px"> Manage Pets</i></b-nav-item>
          <b-nav-item to="/add"><i v-if="auth=='loggedin'" class="fa fa-plus" style="padding: 5px"> Add Pet</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i v-if="auth==''" class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/register"><i v-if="auth==''" class="fa fa-user" style="padding: 5px"> Register </i></b-nav-item>
          <b-nav-item @click="logout"><i v-if="auth=='loggedin'" class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: black;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import EventBus from '@/components/EventBus'

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
  name: 'App',
  data () {
    return {
      auth: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
      // This is to refresh the nav so that the user doesnt need to refrresh the page
      window.location.reload()
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
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
  cursor: -webkit-grab; cursor: grab;
}
</style>
