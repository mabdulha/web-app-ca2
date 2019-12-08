<template>
    <div id="app1" class="hero">
      <!-- <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3> -->
      <div class="container pet-form">
        <form @submit.prevent="submit">
          <div class="form-content align-center">
            <div class="column">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Pet Name*" required="" v-model.trim="name" />
              </div>
              <div class="form-group">
                <select class="browser-default custom-select" required="" v-model="type">
                  <option value="null" selected disabled hidden> Pet Type </option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Turtle">Turtle</option>
                  <option value="Hamster">Hamster</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Reptile">Reptile</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Pet Species*" required="" v-model="species" />
              </div>
              <div class="form-group">
                <select class="browser-default custom-select" required="" v-model="gender">
                  <option value="null" selected disabled hidden>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Colour*" required="" v-model="colour" />
              </div>
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Size of Pet (Minimum of 1)*" required="" v-model="size" min="1" />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2"> Centimeters </span>
                </div>
              </div>
              <div class="form-group fix">
                <select class="browser-default custom-select" required="" v-model="age">
                  <option selected>Age of Pet</option>
                  <option value="underOne">Less than 1 year</option>
                  <option value="underTwo">Less than 2 years</option>
                  <option value="underThree">Less than 3 years</option>
                  <option value="underFour">Less than 4 years</option>
                  <option value="underFive">Less than 5 years</option>
                  <option value="overFive">Older than 5 years</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Seen Address*" required=""
                  v-model="lastSeenAddress" />
              </div>
            </div>
            <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">{{ petBtnTitle }}</button>
          </div>
          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Entering!</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Updating...</p>
        </form>
      </div>
    </div>
</template>

<script>

import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
// import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'PetForm',
  props: ['petBtnTitle', 'pet'],
  data () {
    return {
      name: this.pet.name,
      type: this.pet.type,
      species: this.pet.species,
      gender: this.pet.gender,
      colour: this.pet.colour,
      size: this.pet.size,
      age: this.pet.age,
      lastSeenAddress: this.pet.lastSeenAddress,
      views: 0,
      missing: true,
      submitStatus: null
    }
  },
  methods: {
    submit () {
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
        this.$emit('pet-is-created-updated', this.pet)
        this.$router.push('/pets')
      }, 500)
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
    padding: 4%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
  }

  .form-control {
    border-radius: 1.5rem;
  }

  .btnSubmit {
    border: none;
    margin-top: 2em;
    border-radius: 1.5rem;
    padding: 1%;
    width: 30%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
  }

  .form-content {
    margin-bottom: 2em;
  }

  .fix {
    margin-top: 1.5em;
  }
</style>
