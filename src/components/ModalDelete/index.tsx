import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import useUsers from '../../hooks/useUsers'

interface Props {
  id: string
}

export function ModalDelete ({ id, ...rest }: Props): React.JSX.Element {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = async (): Promise<void> => {
    setModalVisible(!isModalVisible)
  }

  const { destroy } = useUsers()

  const handleDelete = async (id: string) => {
    await destroy(id)
    await toggleModal()
  }

  return (
        <TouchableOpacity onPress={toggleModal}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>Excluir</Text>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                    {...rest}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Tem certeza que deseja excluir?</Text>
                        <View style={styles.containerButtons}>
                            <TouchableOpacity style={styles.destroyButton} onPress={async () => { await handleDelete(id) }}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </TouchableOpacity>
  )
}
