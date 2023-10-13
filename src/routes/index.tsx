import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

export function Routes (): React {
  return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
  )
}
