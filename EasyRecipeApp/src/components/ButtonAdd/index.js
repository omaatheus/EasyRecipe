import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import theme from '../../../theme';

export function ButtonAdd({props, title, showRedButton, showWhiteText}) {
  return (
    <TouchableOpacity style={showRedButton ? styles.buttonAddRed : styles.buttonAdd} onPress={props}>
        <Text style={showWhiteText ? styles.buttonAddWhiteText : styles.buttonAddText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: '90%',
        height: 50,
        margin: '5%',
        padding: '3%',
        borderRadius: 10,
        backgroundColor: theme.colors.LIMA,
    },

    buttonAddRed: {
      width: '90%',
      height: 50,
      margin: '5%',
      padding: '3%',
      borderRadius: 10,
      backgroundColor: 'red',
    },

    buttonAddText: {
        textAlign: 'center',
        fontFamily: theme.font_family.BOLD,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
    },

    buttonAddWhiteText: {
      textAlign: 'center',
      fontFamily: theme.font_family.BOLD,
      fontSize: theme.font_size.XL,
      color: theme.colors.WHITE,
    },
});