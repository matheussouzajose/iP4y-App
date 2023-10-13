import React, { useEffect } from 'react'
import { styles } from './styles'
import { View } from 'react-native'
import { ButtonAdd } from '../ButtonAdd'
import { ButtonRestart } from '../ButtonRestart'
import { ControlledInput } from '../Controlled/ControlledInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ControlledInputMask } from '../Controlled/ControlledInputMask'
import { ControlledPicker } from '../Controlled/ControlledPicker'
import { ButtonLink } from '../ButtonLink'
import useUsers from '../../hooks/useUsers'
import { type User } from '../../services/user'
import { formatDate } from '../../utils/helpers'

const schema = yup.object({
  firstName: yup.string().required('Informe o seu nome'),
  lastName: yup.string().required('Informe o seu sobrenome'),
  email: yup.string().email('E-mail inválido').required('Informe o seu email'),
  cpf: yup.string().required('Informe o seu cpf'),
  genre: yup.string().required('Informe o seu genêro'),
  birthday: yup.string().min(10, 'A data está incompleto').required('Informe sua data de nascimento')
})

export function FormUser () {
  const { usersContext, create, update } = useUsers()

  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const buttonTitle = usersContext.user?.id ? 'Editar' : 'Inserir'

  useEffect(() => {
    if (usersContext.user?.id) {
      setEditData()
    } else {
      reset()
    }
  }, [usersContext.user?.id])

  const setEditData = (): void => {
    setValue('firstName', usersContext.user?.first_name)
    setValue('lastName', usersContext.user?.last_name)
    setValue('email', usersContext.user?.email)
    setValue('cpf', usersContext.user?.cpf)
    setValue('genre', usersContext.user?.genre)
    setValue('birthday', formatDate(usersContext.user?.birthday))
  }

  const handleForm = async (user: User): Promise<void> => {
    if (usersContext.user?.id) {
      await update(usersContext.user.id, user)
    } else {
      await create(user)
    }
  }

  return (
        <View style={styles.container}>
            <ControlledInput
                name="firstName"
                control={control}
                icon="user"
                placeholder="Nome"
                error={errors.firstName}
            />

            <ControlledInput
                name="lastName"
                control={control}
                icon="user"
                placeholder="Sobrenome"
                error={errors.lastName}
            />

            <ControlledInput
                name="email"
                control={control}
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize='none'
                error={errors.email}
            />

            <ControlledInputMask
                name="cpf"
                control={control}
                icon="user"
                placeholder="CPF"
                error={errors.cpf}
                type={'cpf'}
                options={{
                  format: 'XXX.XXX.XXX-XX'
                }}
            />

            <ControlledPicker
                name="genre"
                control={control}
                icon="user"
                placeholder="Genêro"
                error={errors.genre}
                options={[
                  { label: 'Feminino', value: 'Feminino' },
                  { label: 'Masculino', value: 'Masculino' }
                ]}
            />

            <ControlledInputMask
                name="birthday"
                control={control}
                icon="user"
                placeholder="Data de aniversário"
                error={errors.birthday}
                type={'datetime'}
                options={{
                  format: 'XX/XX/XXXX'
                }}
            />

            <ButtonAdd
                title={buttonTitle}
                onPress={handleSubmit(handleForm)}
            />

            <ButtonRestart
                title="Recomeçar"
                onPress={() => { reset() }}
            />

            <ButtonLink
                title="Visualizar todos os usuários"
                link='Home'
            />
        </View>
  )
}
