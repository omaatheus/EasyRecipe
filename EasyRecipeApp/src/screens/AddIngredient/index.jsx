import React from "react";
import { Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export function AddIngredient() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Add Ingredient Screen</Text>
    </View>
  )
}