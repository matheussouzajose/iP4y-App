import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { ActivityIndicator, FlatList, type ListRenderItemInfo, View, Text } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { SeparatorItem } from '../../components/SeparatorItem'
import { UserItem } from '../../components/UserItem'
import { ButtonLink } from '../../components/ButtonLink'
import useUsers from '../../hooks/useUsers'
import {User} from "../../contexts/User";

export function Home () {
  const { usersContext, fetchAll, loading } = useUsers()
  function renderItem ({ item }: ListRenderItemInfo<User>) {
    return <UserItem {...item} />
  }

  useEffect(() => {
    fetchAll().then(() => { usersContext.setUser({}) })
  }, [])

  return (
        <View style={styles.container}>
            <Animatable.View
                delay={500}
                animation="fadeInLeft"
            >
                <FlatList
                    ListFooterComponent={<ButtonLink title="Voltar" link='User'/>}
                    ListHeaderComponent={<Header title="Usuários" subtitle="Visualize todos os usuários."/>}
                    ItemSeparatorComponent={SeparatorItem}
                    data={usersContext.users}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    onEndReached={async () => {
                      if (!loading) {
                        await fetchAll()
                      }
                    }}
                />
                {
                    usersContext.users.length === 0 &&
                    <View>
                        <Text>Nenhum usuário ainda.</Text>
                    </View>
                }
                {loading && <ActivityIndicator size="large"/>}
            </Animatable.View>
        </View>
  )
}
