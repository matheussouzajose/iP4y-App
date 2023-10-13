import React from 'react'
import { TouchableOpacity, Text, type TouchableOpacityProps, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core'

interface Props extends TouchableOpacityProps {
  title: string
  link: string
}

export function ButtonLink ({ title, link, ...rest }: Props): React {
  const navigator = useNavigation()
  const handleLink = (): void => {
    navigator.navigate(link as never)
  }

  return (
        <View style={styles.container}>
            <TouchableOpacity {...rest} onPress={handleLink}>
                <Text style={styles.link}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>

  )
}
