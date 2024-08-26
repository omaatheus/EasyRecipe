import { TextInput, StyleSheet, View, Text } from "react-native";
import React from "react";
import theme from "../../theme";

export function Input({showBigInput, title, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        multiline={showBigInput}
        textAlignVertical="top"
        maxLength={showBigInput ? 80 : 30}
        returnKeyType={showBigInput ? "default" : "done"}
        blurOnSubmit={!showBigInput}
        style={showBigInput ? styles.bigInput : styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    text:{
      fontSize: theme.font_size.XXL,
      color: theme.colors.BLACK_GREEN,
      fontFamily: theme.font_family.BOLD,
      marginRight: 'auto'
    },

    input: {
        width: "100%",

        padding: "3%",
        textAlignVertical: "top",

        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
        marginBottom: 15,
    },

    bigInput: {
        width: "100%",
        marginBottom: 15,
        height: 140,
        padding: "3%",
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },
});