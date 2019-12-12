<template>
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container login-form">
      <form @submit.prevent="submit">
        <div class="form-content align-center">
          <div class="column">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email Address*" required="" v-model="email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password*" required="" v-model="password" />
            </div>
          </div>
          <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">Login</button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Loging in!</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Loging in...</p>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/authservice'
import Vue from 'vue'
import VueForm from 'vueform'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

export default {
  data () {
    return {
      messagetitle: 'Login',
      email: '',
      password: '',
      submitStatus: null
    }
  },
  methods: {
    submit () {
      console.log('submit')
      console.log(process.env.VUE_APP_URL)
      // do your submit logic here
      this.submitStatus = 'PENDING'
      setTimeout(() => {
        this.submitStatus = 'OK'
        var credentials = {
          email: this.email,
          password: this.password
        }
        this.credentials = credentials
        this.loginOwner(this.credentials)
      }, 500)
    },
    loginOwner: function (credentials) {
      console.log('LoginOwner')
      AuthService.login(credentials)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setOwner', response.data.owner)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

  .form-content {
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
  }

  .form-control {
    border-radius: 1.5rem;
  }

  .btnSubmit {
    border: none;
    border-radius: 1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
  }
</style>
