<template>
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="pets" :options="options">
        <a slot="view" slot-scope="props" class="fa fa-eye fa-2x" @click="upview(props.row.ownerID, props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deletePetRow(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editPet(props.row._id)"></a>
        <a @click="upview(props.row._id)" slot="child_row" slot-scope="props">
          <div class="pet-age"> Pet Age: {{ props.row.age }} </div>
          <div class="pet-last-seen"> Last Seen Address: {{ props.row.lastSeenAddress }} </div>
        </a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import PetService from '@/services/petservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'ManagePets',
  data () {
    return {
      messagetitle: 'Pets Manage',
      pets: [],
      errors: [],
      props: ['_id'],
      columns: ['name', 'type', 'species', 'gender', 'views', 'view', 'remove', 'edit'],
      options: {
        sortable: ['views'],
        perpage: 10,
        headings: {
          _id: 'ID',
          name: 'Name',
          type: 'Type',
          species: 'Species',
          gender: 'Gender'
        },
        uniqueKey: '_id'
      },
      ownerID: this.$store.state.owner._id
    }
  },
  created () {
    this.loadPets(this.ownerID)
  },
  methods: {
    loadPets: function (ownerID) {
      console.log(ownerID)
      PetService.fetchPetsByOwner(ownerID)
        .then(response => {
          // JSON responses are automatically parsed.
          this.pets = response.data
          console.log(this.pets)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    upview: function (ownerID, id) {
      PetService.upviewPet(id)
        .then(response => {
          this.loadPets(ownerID)
          console.log(id)
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editPet: function (id) {
      this.$router.params = id
      this.$router.push('/edit')
    },
    deletePetRow: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          PetService.deletePet(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadPets()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Pet ' + JSON.stringify(response.data, null, 5), 'success')
              const petindex = this.pets.findIndex(p => p._id === id)
              this.pets.splice(petindex, 1)
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Pet could not Delete!', 'info')
        }
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
  width: 85%;
  margin: 0 auto;
}
</style>
