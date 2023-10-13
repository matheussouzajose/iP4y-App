import React from 'react'
import { View, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { FormUser } from '../../components/FormUser'
import useUsers from '../../hooks/useUsers'

export function User () {
  const { usersContext } = useUsers()

  const title = (usersContext?.user?.id ? 'Edite ' : 'Crie ').concat('sua conta')
  const subtitle = (usersContext?.user?.id ? 'Edite ' : 'Crie ').concat('sua conta forma rápida e fácil.')

  return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="height" enabled>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <>
                            <Animatable.View
                                delay={500}
                                animation="fadeInLeft"
                            >
                                <Header
                                    title={title}
                                    subtitle={subtitle}
                                />
                            </Animatable.View>
                            <Animatable.View
                                delay={500}
                                animation="fadeInUp"
                            >
                                <FormUser/>
                            </Animatable.View>
                        </>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
  )
}
