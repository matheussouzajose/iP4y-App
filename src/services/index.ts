import axios from 'axios'
import UserService from './user'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://10.0.2.2:8000/api/v1'
}

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
  headers
})

export default {
  user: UserService(httpClient)
}
