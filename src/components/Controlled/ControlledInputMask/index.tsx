import React from 'react'
import { type Control, Controller, type FieldError } from 'react-hook-form'
import { InputMask, type InputProps } from '../../Input/InputMask'

type Props = InputProps & {
  control: Control<any>
  name: string
  error?: FieldError
  type: string
  options: object
}

export function ControlledInputMask ({ control, name, error, type, options, ...rest }: Props): React {
  return (
    <>
      <Controller
        name={ name }
        control={ control }
        render={ ({ field: { onChange, value } }) => (
          <InputMask
            error={ error }
            onChangeText={ onChange }
            value={ value }
            type={ type }
            options={ options }
            { ...rest }
          />
        ) }
      />
    </>

  )
}
