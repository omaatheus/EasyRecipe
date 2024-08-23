import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../../theme'

export function ButtonIng({title, onPress, value, onChangeText, icon}) {
  return (
    <View style={styles.container}>
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder={title}
      placeholderTextColor={theme.colors.BLACK_GREEN}
      onChangeText={onChangeText}
      value={value}
    />

    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{icon}</Text>
    </TouchableOpacity>

  </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    input: {
        backgroundColor: theme.colors.GRAY_200,
        borderRadius: 10,
        color: theme.colors.BLACK_GREEN,
        fontSize: 16,
        height: 56,
        padding: 16,
        flex: 1,
        marginRight: 10,
    },
    button: {
        backgroundColor: theme.colors.BLACK_GREEN,
        borderRadius: 10,
        height: 56,
        width: 56,
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.colors.WHITE,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 42,
    },
})