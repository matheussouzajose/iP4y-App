import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ModalDelete } from '../ModalDelete'
import { useNavigation } from '@react-navigation/core'
import useUsers from '../../hooks/useUsers'
import { formatCpf, formatDate } from '../../utils/helpers'
import { type User } from '../../contexts/User'

export function UserItem (user: User) {
  const { usersContext } = useUsers()

  const navigator = useNavigation()

  return (
        <View style={styles.card}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.info}>{user.first_name} {user.last_name}</Text>

            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.info}>{formatCpf(user.cpf)}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>{user.email}</Text>

            <Text style={styles.label}>Gênero:</Text>
            <Text style={styles.info}>{user.genre}</Text>

            <Text style={styles.label}>Data de Nascimento:</Text>
            <Text style={styles.info}>{formatDate(user.birthday)}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editButton} onPress={() => {
                  usersContext.setUser(user)
                  navigator.navigate('User' as never)
                }}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.destroyButton}>
                    <ModalDelete id={user.id}/>
                </TouchableOpacity>
            </View>
        </View>
  )
}
