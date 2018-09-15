import axios from 'axios'

const request = axios.create({
  baseURL: 'https://galonku.herokuapp.com/',
  timeout: 5000
})

export default request
