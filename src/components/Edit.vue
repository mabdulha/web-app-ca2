<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
          <template v-if="childDataLoaded">
            <pet-form :pet="pet" petBtnTitle="Update Pet" @pet-is-created-updated="updatePet"></pet-form>
          </template>
  </div>
</template>

<script>
import PetService from '@/services/PetService'
import PetForm from '@/components/PetForm'

export default {
  data () {
    return {
      pet: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: 'Edit Pet'
    }
  },
  components: {
    'pet-form': PetForm
  },
  created () {
    this.getPet()
  },
  methods: {
    getPet: function () {
      PetService.fetchPet(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.pet = this.temp[0]
          this.childDataLoaded = true
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updatePet: function (pet) {
      PetService.putPet(this.$router.params, pet)
        .then(response => {
          console.log(response)
          this.$router.push('/managepets')
        })
        .catch(error => {
          this.error.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
