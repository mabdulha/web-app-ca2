import Api from '@/services/api'

export default {
  fetchPets () {
    return Api().get('/pets')
  },
  fetchPetsByOwner (ownerID) {
    return Api().get(`/owners/${ownerID}/pets`)
  },
  postPets (pet) {
    return Api().post('/pets', pet,
      { headers: {'Content-type': 'application/json'} })
  },
  upviewPet (id) {
    return Api().put(`/pets/${id}/view`)
  },
  deletePet (id) {
    return Api().delete(`/pets/${id}`)
  },
  fetchPet (id) {
    return Api().get(`/pets/${id}`)
  },
  putPet (id, pet) {
    console.log('REQUESTING ' + pet._id + ' ' +
        JSON.stringify(pet, null, 5))
    return Api().put(`/pets/${id}/update`, pet,
      { headers: {'Content-type': 'application/json'} })
  }
}
