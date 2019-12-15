<template>
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container register-form">
      <form @submit.prevent="submit">
        <div class="form-content align-center">
          <div class="column">
            <div class="form-group">
              <input type="text" class="form-control" name="firstname" placeholder="First Name*" required="" v-model.trim="firstname" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="lastname" placeholder="Last Name*" required="" v-model="lastname" />
            </div>
            <div class="form-group">
              <input type="telephone" class="form-control" name="phonenum" placeholder="Phone Number*" required="" v-model="phonenum" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" name="email" placeholder="Email Address*" required="" v-model="email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="password" placeholder="Password*" required="" v-model="password" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="passwordconfirm" placeholder="Confirm Password*" required=""
                v-model="confirmpassword" />
            </div>
          </div>
          <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">Register</button>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Check if the passwords match</p>
          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Registering!</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Pending...</p>
        </div>
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
      messagetitle: 'Register',
      firstname: '',
      lastname: '',
      phonenum: '',
      email: '',
      password: '',
      confirmpassword: '',
      owner: {},
      submitStatus: null
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      // do your submit logic here
      this.submitStatus = 'PENDING'
      setTimeout(() => {
        if (this.password === this.confirmpassword) {
          this.submitStatus = 'OK'
          var owner = {
            firstname: this.firstname,
            lastname: this.lastname,
            phonenum: this.phonenum,
            email: this.email,
            password: this.password
          }
          this.owner = owner
          console.log('Submitting in Register : ' + JSON.stringify(this.owner, null, 5))
          this.submitOwner(this.owner)
        } else {
          // alert('Please ensure passwords match')
          this.submitStatus = 'ERROR'
          this.$swal({
            title: 'Please Ensure the passwords both match',
            type: 'warning',
            showLoaderOnConfirm: true
          })
        }
      }, 500)
    },
    submitOwner: function (owner) {
      console.log('submitOwner')
      AuthService.register(owner)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          console.log(owner)
          this.loginOwner(this.owner)
        })
        .catch(err => {
          this.errors.push(err)
          console.log(err)
        })
    },
    loginOwner: function (owner) {
      const credentials = {
        email: owner.email,
        password: owner.password
      }
      AuthService.login(credentials)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          // localStorage.setItem('token', response.data.token)
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
    margin-bottom: 10px;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
  }
</style>
