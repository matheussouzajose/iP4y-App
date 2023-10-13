import { type AxiosInstance } from 'axios'
import {User} from "../contexts/User";

interface Paginate {
  page: number
  perPage: number
  filter: string | null
}

interface UserService {
  create: (data: User) => Promise<void>
  update: (id: string, data: User) => Promise<void>
  findAllPaginate: (data: { perPage: number, page: number }) => Promise<void>
  destroy: (id: string) => Promise<void>
}

export default (httpClient: AxiosInstance): UserService => ({
  create: async (data: User): Promise<void> => {
    const response = await httpClient.post('/users', data)

    return new Promise((resolve) => {
      resolve(response)
    })
  },

  update: async (id: string, data: User): Promise<void> => {
    const response = await httpClient.put(`/users/${id}`, data)

    return new Promise((resolve) => {
      resolve(response)
    })
  },

  findAllPaginate: async ({ page, perPage }: Paginate): Promise<void> => {
    const uri = `/users?page=${page}&total_page=${perPage}`
    const response = await httpClient.get(uri)

    return new Promise((resolve) => {
      resolve(response)
    })
  },

  destroy: async (id: string): Promise<void> => {
    const response = await httpClient.delete(`/users/${id}`)

    return new Promise((resolve) => {
      resolve(response)
    })
  }
})
