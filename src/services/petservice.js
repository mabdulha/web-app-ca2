import Api from '@/services/api'

export default {
  fetchPets () {
    return Api().get('/pets')
  },
  postPets (pet) {
    return Api().post('/pets', pet,
      { headers: {'Content-type': 'application/json'} })
  },
  upviewPet (id) {
    return Api().put(`/pets/${id}/view`)
  }
}
