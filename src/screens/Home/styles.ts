import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  content: {
    height: 180,
    width: 345,
    borderRadius: 15
  },
  user: {
    display: 'flex',
    marginVertical: 10,
    backgroundColor: theme.colors.greenIp4y100,
    height: 180,
    borderRadius: 10
  }
})
