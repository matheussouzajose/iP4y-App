import React, { useState } from 'react'
import { type TextInputProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { type FieldError } from 'react-hook-form'
import { theme } from '../../../shared/styles/theme'
import { styles } from '../styles'
import { Picker } from '@react-native-picker/picker'

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name']
  value?: string
  error?: FieldError
}
export function InputPicker ({ icon, value, error, onValueChange, options, ...rest }: InputProps): React {
  const [isFocused, setIsFocused] = useState(false)
  const [, setIsFilled] = useState(false)
  const { greenIp4y100 } = theme.colors
  function handleInputBlur (): void {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <>
      <View style={ styles.container }>
        <View style={ [styles.iconContainer, isFocused && styles.iconContainerIsFocused, { height: 55 }] }>
          <Feather
            name={ icon }
            size={ 24 }
            color={ greenIp4y100 }
          />
        </View>

        <Picker
            selectedValue={value}
            onBlur={ handleInputBlur }
            onValueChange={onValueChange}
            style={ [styles.inputText, isFocused && styles.inputTextIsFocused] }
            { ...rest }
        >
          <Picker.Item label='Selecione um gênero' value=''/>
          {options.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value}/>
          ))}
        </Picker>

      </View>

      {
        error && <Text style={ styles.messageError }> { error.message }</Text>
      }
    </>
  )
}
