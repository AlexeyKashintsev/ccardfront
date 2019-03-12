import axios from 'axios'

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
})

export default instance