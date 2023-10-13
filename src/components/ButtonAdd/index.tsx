import React from 'react'
import { TouchableOpacity, Text, type TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}
export function ButtonAdd ({ title, ...rest }: Props): React {
  return (
    <TouchableOpacity style={ styles.container } { ...rest }>
      <Text style={ styles.title }>
        { title }
      </Text>
    </TouchableOpacity>
  )
}
