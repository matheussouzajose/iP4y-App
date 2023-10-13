import React from 'react'
import { type Control, Controller, type FieldError } from 'react-hook-form'
import { InputDefault, type InputProps } from '../../Input/InputDefault'

type Props = InputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}

export function ControlledInput ({ control, name, error, ...rest }: Props): React {
  return (
    <>
      <Controller
        name={ name }
        control={ control }
        render={ ({ field: { onChange, value } }) => (
          <InputDefault
            error={ error }
            onChangeText={ onChange }
            value={ value }
            { ...rest }
          />
        ) }
      />
    </>

  )
}
