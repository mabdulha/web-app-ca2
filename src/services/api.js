import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://missing-paws-api-staging.herokuapp.com/'
    // baseURL: 'http://localhost:3000'
  })
}
