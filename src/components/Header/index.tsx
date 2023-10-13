import React from 'react'
import { styles } from './styles'
import { Text, View } from 'react-native'

interface Props {
  title: string
  subtitle: string
}

export function Header ({ title, subtitle }: Props): React {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        { title }
      </Text>

      <Text style={ styles.subtitle }>
        { subtitle }
      </Text>
    </View>
  )
}
