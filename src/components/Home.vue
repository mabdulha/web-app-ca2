<template>
  <div class="hero">
    <h1 class="welcome-user"> Welcome {{ firstname }} {{ lastname }} </h1>
      <h1 class="vue-title">Need some help to find your pet?</h1>
        <table align="center">
          <tr>
            <td>
              <p>Just click <a href ="/add">here</a> to go to</p>
              <p>the Pet page and report your Pet</p>
            </td>
            <td>
              <img src="../assets/missingpet.gif" alt="description here" />
            </td>
          </tr>
        </table>

      <p></p>
      <p class="lead">This is the homepage of your <b>MEVN</b> Web app</p>
    </div>
</template>

<script>
import jtwDecode from 'jwt-decode'

export default {
  name: 'Home',
  data () {
    const token = localStorage.getItem('token')
    const decoded = jtwDecode(token)
    return {
      firstname: decoded.firstname,
      lastname: decoded.lastname
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
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
  .welcome-user {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
