import { UserContext, type UserContextData } from '../contexts/User'
import { useContext, useState } from 'react'
import services from '../services'
import { Alert } from 'react-native'
import { type User } from '../services/user'
import { hasError, serializeData } from '../utils/helpers'
import { useNavigation } from '@react-navigation/core'

interface Users {
  usersContext: UserContextData
  loading: boolean
  create: (user: User) => Promise<void>
  fetchAll: () => Promise<void>
  destroy: (id: string) => Promise<void>
  update: (id: string, user: object) => Promise<void>
}

export default function useUsers (): Users {
  const usersContext: UserContextData = useContext(UserContext)
  const navigator = useNavigation()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const perPage = 2

  const fetchAll = async (): Promise<void> => {
    setLoading(true)

    try {
      const { data: result } = await services.user.findAllPaginate({ page, perPage })
      const uniqueData: any[] = removeDuplicated(usersContext.users, result)
      usersContext.setUsers(uniqueData)
      setPage(page + 1)
    } catch (error) {
      Alert.alert('Ops :(', 'Ocorreu um erro, tenta novamente.')
    }

    setLoading(false)
  }

  const removeDuplicated = (existingData, newData): any[] => {
    const uniqueIds = new Set(existingData.map((item) => item.id))
    const filteredData = newData.data.filter(item => !uniqueIds.has(item.id))

    return [...existingData, ...filteredData]
  }

  const destroy = async (id: string): Promise<void> => {
    try {
      await services.user.destroy(id)
      const users = usersContext.users.filter(item => {
        return item.id !== id
      })
      usersContext.setUsers(users)
      Alert.alert('Sucesso', 'Usuário deletado com sucesso.')
    } catch (e) {
      Alert.alert('Ops :(', 'Ocorreu um erro, tente mais tarde.')
    }
  }

  const create = async (user: User): Promise<void> => {
    try {
      await services.user.create(serializeData(user))
      Alert.alert('Parabéns', 'Usuário criado com sucesso.')
      usersContext.setUsers([])
      navigator.navigate('Home' as never)
    } catch (e) {
      getErrors(e?.response?.data?.errors)
    }
  }
  const update = async (id: string, user: object): Promise<void> => {
    try {
      await services.user.update(id, serializeData(user))
      Alert.alert('Parabéns', 'Usuário editado com sucesso.')
      usersContext.setUsers([])
      navigator.navigate('Home' as never)
    } catch (e) {
      getErrors(e?.response?.data?.errors)
    }
  }

  const getErrors = (errors) => {
    const message = hasError(errors)
    if (message) {
      Alert.alert('Ops :(', message)
      return
    }
    Alert.alert('Ocorreu um erro no servidor', 'Tente novamente mais tarde')
  }

  return {
    usersContext,
    loading,
    fetchAll,
    create,
    update,
    destroy
  }
}
