import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://missing-paws-web-app.herokuapp.com/'
    // baseURL: 'http://localhost:3000'
  })
}
