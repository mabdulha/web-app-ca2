import Api from '@/services/api'

export default {
  register (owner) {
    return Api().post('/owners/register', owner,
      { headers: {'Content-type': 'application/json'} })
  }
}
