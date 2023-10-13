import { type User } from '../services/user'

export const serializeData = (user: object): User => {
  const cpf = onlyDigits(user.cpf)
  const birthday = formatBirthday(user.birthday)
  return {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    cpf,
    genre: user.genre,
    birthday
  }
}

export const onlyDigits = (text: string): string => {
  return text.replace(/\D/g, '')
}

export const formatBirthday = (date: string): string => {
  const [day, month, year] = date.split('/')
  return `${year}-${month}-${day}`
}

export const hasError = (errors: []): null | string => {
  let message = null
  for (const error in errors) {
    message += `${errors[error][0]} \n`
  }
  return message
}

export const formatCpf = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatDate = (date: string): string => {
  const dataObj = new Date(date)

  const day = String(dataObj.getDate()).padStart(2, '0')
  const month = String(dataObj.getMonth() + 1).padStart(2, '0')
  const year = dataObj.getFullYear()

  return `${day}/${month}/${year}`
}
