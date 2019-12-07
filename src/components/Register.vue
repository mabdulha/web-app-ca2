<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-user" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container register-form">
      <form @submit.prevent="submit">
        <div class="form-content align-center">
          <div class="column">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="First Name*" required="" v-model.trim="firstname" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Last Name*" required="" v-model="lastname" />
            </div>
            <div class="form-group">
              <input type="telephone" class="form-control" placeholder="Phone Number*" required="" v-model="phonenum" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email Address*" required="" v-model="email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password*" required="" v-model="password" />
            </div>
            <!-- <div class="form-group">
                <input type="text" class="form-control" placeholder="Confirm Password*" required="" v-model="passwordcheck"/>
            </div> -->
          </div>
          <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">Register</button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Registering!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Registering...</p>
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
      }, 500)
    },
    submitOwner: function (owner) {
      console.log('submitOwner')
      console.log('submitting in submitOwner : ' + owner)
      AuthService.register(owner)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          console.log(owner)
        })
        .catch(err => {
          this.errors.push(err)
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
  .form-content
{
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
}
.form-control{
    border-radius:1.5rem;
}
.btnSubmit
{
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
}
</style>
