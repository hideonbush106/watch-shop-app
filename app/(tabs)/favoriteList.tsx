import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env'
import { Text, View } from 'react-native'

const FavoriteList = () => {
  return (
    <View>
      <Text>{SUPABASE_URL}</Text>
    </View>
  )
}

export default FavoriteList
