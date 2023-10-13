import React, { createContext, type ReactNode, useState } from 'react'

export interface User {
  id?: string
  firstName?: string
  lastName?: string
  email?: string
  cpf?: string
  genre?: string
  birthday?: string
}

export interface UserContextData {
  users: User[]
  setUsers: (data: User[]) => void
  user: User
  setUser: (data: User) => void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext: React.Context<UserContextData> = createContext({} as UserContextData)

export function UserProvider ({ children }: UserProviderProps): React {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  return (
        <UserContext.Provider value={ { users, setUsers, user, setUser } }>
            { children }
        </UserContext.Provider>
  )
}
