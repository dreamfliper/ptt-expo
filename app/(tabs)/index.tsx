import { StyleSheet } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import createClient from 'openapi-fetch'
import { paths } from '../../src/lib/api/v1'

const { GET, PUT } = createClient<paths>({ baseUrl: 'https://api.devptt.dev' })

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGkiOiJ7XCJjXCI6XCJ0ZXN0X2NsaWVudF9pZFwiLFwidFwiOlwiYXBwXCJ9IiwiZXhwIjoxNzAyNDcwNjY3LCJzdWIiOiJkcmVhbWZsaXBlciJ9.sgvkYgq6KQWeGA5v5Mm9aNFiq2KZ0gDovUEfM4gm_M0'

const getFavorites = () =>
  GET('/api/user/{user_id}/favorites', {
    params: { path: { user_id: 'dreamfliper' } },
    headers: { Authorization: `Bearer ${token}` }
  })

export default function TabOneScreen() {
  getFavorites().then(({ data }) => {})
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab One</Text>
      <View className="my-7 h-0.5 w-5/6" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
