<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 20px!important"></i>{{messagetitle}}</h3>
          <pet-form :pet="pet" petBtnTitle="Add Pet"
                         @pet-is-created-updated="submitPet"></pet-form>
  </div>
</template>

<script>
import PetService from '@/services/petservice'
import PetForm from '@/components/views/PetForm'

export default {
  data () {
    return {
      messagetitle: 'Report Missing Pet',
      pet: {
        name: '',
        type: '',
        species: '',
        gender: '',
        colour: '',
        size: '',
        age: '',
        lastSeenAddress: '',
        ownerID: ''
      }
    }
  },
  components: {
    'pet-form': PetForm
  },
  methods: {
    submitPet: function (pet) {
      console.log(this.$store.state.owner._id)
      PetService.postPets(pet)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          console.log(pet)
          this.$router.push('/managepets')
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
