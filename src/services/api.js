import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: process.env.VUE_APP_APIURL
    // baseURL: 'http://localhost:3000'
  })
}
