import { StyleSheet } from 'react-native'
import { theme } from '../../shared/styles/theme'

const { greenIp4y100, primary } = theme.colors

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8
  },
  iconContainer: {
    height: 46,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8
  },
  iconContainerIsFocused: {
    borderBottomWidth: 2,
    borderBottomColor: greenIp4y100
  },
  inputText: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#7A7A80',
    paddingHorizontal: 23,
    borderRadius: 8
  },
  inputTextIsFocused: {
    borderBottomWidth: 2,
    borderBottomColor: greenIp4y100
  },
  messageError: {
    color: primary,
    marginBottom: 12
  }
})
