<template>
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="pets" :options="options">
        <a slot="view" slot-scope="props" class="fa fa-eye fa-2x" @click="upview(props.row._id)"></a>
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
  name: 'Pets',
  data () {
    return {
      messagetitle: 'Pets List',
      pets: [],
      errors: [],
      props: ['_id'],
      columns: ['name', 'type', 'species', 'gender', 'age', 'views', 'view'],
      options: {
        sortable: ['views'],
        perpage: 10,
        headings: {
          _id: 'ID',
          name: 'Name',
          type: 'Type',
          species: 'Species',
          gender: 'Gender',
          age: 'Age'
        },
        uniqueKey: '_id'
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
    },
    upview: function (id) {
      PetService.upviewPet(id)
        .then(response => {
          this.loadPets()
          console.log(id)
          console.log(response)
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
  width: 85%;
  margin: 0 auto;
}

</style>
