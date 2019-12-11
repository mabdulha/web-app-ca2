<template>
  <div class="hero">
    <h1 class="welcome-user"> Welcome {{ firstname }} {{ lastname }} </h1>
      <h1 class="vue-title">Did you just lose your pet?</h1>
        <table align="center">
          <tr>
            <td v-if="$store.state.isOwnerLoggedIn">
              <p>Just click <router-link to="/add">here</router-link> to go to</p>
              <p>the pet report page and report your Pet</p>
            </td>
            <td v-else>
              <p>Just click <router-link  to="/login">here</router-link> to go to</p>
              <p>the login page and report your Pet</p>
            </td>
            <td>
              <img src="../assets/missingpet.gif" alt="Mising Pet" />
            </td>
          </tr>
        </table>

      <p></p>
      <p class="lead">This is the homepage of your <b>MEVN</b> Web app</p>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  mounted () {
    this.loadName()
  },
  methods: {
    loadName () {
      this.firstname = this.$store.state.owner.firstname
      this.lastname = this.$store.state.owner.lastname
    }
  }
}
</script>
<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2rem;
  }
  .vue-title {
    font-size: 60pt;
    margin-bottom: 10px;
  }
  .welcome-user {
    font-size: 60pt;
    margin-bottom: 10px;
  }
</style>
