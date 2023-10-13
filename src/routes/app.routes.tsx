import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { User } from '../screens/User'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createStackNavigator()
export function AppRoutes (): React {
  return (
        <Navigator
            screenOptions={ {
              cardOverlayEnabled: true,
              headerShown: false
            } }
        >
            <Screen
                name="User"
                component={ User }
            />

            <Screen
                name="Home"
                component={ Home }
            />

        </Navigator>
  )
}
