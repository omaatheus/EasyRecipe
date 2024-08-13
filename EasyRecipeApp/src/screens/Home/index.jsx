import { View, Text, StatusBar } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}