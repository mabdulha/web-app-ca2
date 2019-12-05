<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
   <v-client-table :columns="columns" :data="pets" :options="options">
   </v-client-table>
 </div>
  </div>
</template>

<script>
import PetService from '@/services/PetService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Pets',
  data () {
    return {
      messagetitle: 'Pets List',
      pets: [],
      errors: [],
      columns: ['_id', 'name', 'type', 'species', 'gender'],
      options: {
        headings: {
          _id: 'ID',
          name: 'Name',
          type: 'Type',
          species: 'Species',
          gender: 'Gender'
        }
      }
    }
  },
  created () {
    this.loadPets()
  },
  methods: {
    loadPets: function () {
      PetService.fetchPets()
        .then(response => {
          // JSON responses are automatically parsed.
          this.pets = response.data
          console.log(this.pets)
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
  width: 60%;
  margin: 0 auto;
}
</style>
