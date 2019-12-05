<template>
<div class="container">
  <div class="col-md-8">
    <div id="app1" class="hero">
      <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
      <form @submit.prevent="submit">
        <div class="form group" :class="{ 'form-group--error': $v.name.$error }">
          <label class="form-label" name="name"> Name of Pet </label>
          <input class="form__input" type="text" v-model.trim="name" />
        </div>
        <div class="form-group">
          <label class="form-label">Select Pet Type</label>
          <select id="type" name="type" class="form-control" type="text" required="" v-model="type">
            <option value="null" selected disabled hidden>Choose Pet Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Turtle">Turtle</option>
            <option value="Hamster">Hamster</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-control-label" name="species">Pet Species</label>
          <input class="form__input" type="text" v-model.trim="species" required="" />
        </div>
        <div class="form-group">
          <label class="form-label">Select Gender</label>
          <select id="gender" name="gender" class="form-control" type="text" required="" v-model="gender">
            <option value="null" selected disabled hidden>Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form group">
          <label class="form-label" name="colour"> Colour of Pet </label>
          <input class="form__input" type="text" required="" v-model.trim="colour" />
        </div>
        <div class="form-group">
          <label class="form-control-label" name="size">Pet Size</label>
          <div class="input-group">
            <input class="form__input" type="text" v-model.trim="size" required="" />
            <div class="input-group-append">
              <div class="input-group-text">metres</div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-control-label" name="age">Pet Age</label>
          <div class="input-group">
            <input class="form__input" type="text" v-model.trim="age" required="" />
            <div class="input-group-append">
              <div class="input-group-text">years</div>
            </div>
          </div>
        </div>
        <div class="form group">
          <label class="form-label" name="address"> Last Seen Address </label>
          <input class="form__input" type="text" v-model.trim="lastSeenAddress" />
        </div>
        <p>
          <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Pet</button>
        </p>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Reporting!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Reporting...</p>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import PetService from '@/services/PetService'
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'AddPet2',
  data () {
    return {
      messagetitle: 'Add Pet',
      name: '',
      type: '',
      species: '',
      gender: '',
      colour: '',
      size: '',
      age: '',
      lastSeenAddress: '',
      pet: {},
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var pet = {
            name: this.name,
            type: this.type,
            species: this.species,
            gender: this.gender,
            colour: this.colour,
            size: this.size,
            age: this.age,
            lastSeenAddress: this.lastSeenAddress
          }
          this.pet = pet
          this.submitPet(this.pet)
        }, 500)
      }
    },
    submitPet: function (pet) {
      PetService.postPets(pet)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          console.log(pet)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
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
    #app1 {
    width: 80%;
    margin: 0 auto;
  }
.required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
