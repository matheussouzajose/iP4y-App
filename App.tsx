import React from 'react'
import { Background } from './src/components/Background'
import { StatusBar } from 'react-native'
import { theme } from './src/shared/styles/theme'
import { UserProvider} from './src/contexts/User'
import { Routes } from './src/routes'

export default function App() {
  return (
      <Background>
          <StatusBar
              barStyle="light-content"
              backgroundColor={ theme.colors.greenIp4y100 }
              translucent
          />
          <UserProvider>
              <Routes />
          </UserProvider>
      </Background>
  );
}