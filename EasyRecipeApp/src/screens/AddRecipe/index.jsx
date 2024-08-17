import { Text, View } from 'react-native'
import { styles } from './styles'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

export function AddRecipe() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Add Recipe Screen</Text>

      {/* false = input pequeno */}
      <Input showBigInput={false}/>

      {/* true = input grande */}
      <Input showBigInput={true}/>
    </View>
  )
}