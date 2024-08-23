import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import theme from '../../../theme';

export function Input({ title, showBigInput,}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        multiline={showBigInput}
        maxLength={showBigInput ? 150 : 30}
        returnKeyType={showBigInput ? 'default' : 'done'}
        blurOnSubmit={!showBigInput}
        style={showBigInput ? styles.bigInput : styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    text:{
      marginRight: 'auto',
      fontSize: theme.font_size.XXL,
      color: theme.colors.BLACK_GREEN,
      fontFamily: theme.font_family.BOLD,
    },

    input: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        padding: '3%',
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },

    bigInput: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        padding: '3%',
        textAlignVertical: 'top',
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },
});