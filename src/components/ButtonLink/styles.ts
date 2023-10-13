import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-end'
  },
  title: {
    marginRight: 5
  },
  link: {
    color: theme.colors.greenIp4y100,
    fontWeight: 'bold'
  }
})
