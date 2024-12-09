import { Link } from 'expo-router'
import {Button, Text, View} from 'react-native'

export default function Account() {
  return (
    <View>
      <Text>Account Page</Text>
      <Link href={'/accountinfo'}>
        Account info page
      </Link>
    </View>
  )
}