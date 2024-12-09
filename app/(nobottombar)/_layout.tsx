import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <View>
        <Text style={{color: 'white'}}>Go back</Text>
      </View>
      <View>
        <Slot />
      </View>
    </View>
  )
}