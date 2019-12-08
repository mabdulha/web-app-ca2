import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://missing-paws-web-app.herokuapp.com/'
  })
}
