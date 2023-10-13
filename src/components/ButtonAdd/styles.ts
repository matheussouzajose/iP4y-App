import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.greenIp4y100,
    marginBottom: 8,
    marginTop: 24
  },
  title: {
    fontSize: 15,
    color: '#FFFFFF'
  }
})
