import Api from '@/services/api'

export default {
  fetchPets () {
    return Api().get('/pets')
  }
}
