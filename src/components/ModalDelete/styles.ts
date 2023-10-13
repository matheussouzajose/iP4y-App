import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white'
  },
  destroyButton: {
    width: '30%',
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    marginRight: 5
  },
  cancelButton: {
    width: '30%',
    backgroundColor: theme.colors.greenIp4y100,
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row'
  }
})
