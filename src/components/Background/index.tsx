import React, { type ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { theme } from '../../shared/styles/theme'

interface Props {
  children?: ReactNode
}

export function Background ({ children }: Props): React {
  const { highlight, white } = theme.colors

  return (
    <LinearGradient
      style={ styles.container }
      colors={ [white, highlight] }
    >
      { children }
    </LinearGradient>
  )
}
