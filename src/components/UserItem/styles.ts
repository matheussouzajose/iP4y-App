import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 14,
    marginBottom: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editButton: {
    width: '48%',
    backgroundColor: theme.colors.greenIp4y100,
    padding: 8,
    borderRadius: 4
  },
  destroyButton: {
    width: '48%',
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
