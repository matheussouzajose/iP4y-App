import React from 'react'
import { type Control, Controller, type FieldError } from 'react-hook-form'
import { InputPicker, type InputProps } from '../../Input/InputPicker'

type Props = InputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}

export function ControlledPicker ({ control, name, error, ...rest }: Props): React {
  return (
    <>
      <Controller
        name={ name }
        control={ control }
        render={ ({ field: { onChange, value } }) => (
          <InputPicker
            error={ error }
            onValueChange={ onChange }
            value={ value }
            { ...rest }
          />
        ) }
      />
    </>

  )
}
