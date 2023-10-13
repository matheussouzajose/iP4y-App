import React, { useState } from 'react'
import { type TextInputProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { type FieldError } from 'react-hook-form'
import { theme } from '../../../shared/styles/theme'
import { styles } from '../styles'
import { TextInputMask } from 'react-native-masked-text'

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name']
  value?: string
  error?: FieldError
  type: string
  options: object
}
export function InputMask ({ icon, value, error, type, options, ...rest }: InputProps): React {
  const [isFocused, setIsFocused] = useState(false)
  const [, setIsFilled] = useState(false)
  const { greenIp4y100 } = theme.colors

  function handleInputFocus (): void {
    setIsFocused(true)
  }

  function handleInputBlur (): void {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <>
      <View style={ styles.container }>
        <View style={ [styles.iconContainer, isFocused && styles.iconContainerIsFocused] }>
          <Feather
            name={ icon }
            size={ 24 }
            color={ greenIp4y100 }
          />
        </View>

        <TextInputMask
            type={ type }
            options={ options }
            style={ [styles.inputText, isFocused && styles.inputTextIsFocused] }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur }
            value={ value }
            { ...rest }
        />

      </View>

      {
        error && <Text style={ styles.messageError }> { error.message }</Text>
      }
    </>
  )
}
