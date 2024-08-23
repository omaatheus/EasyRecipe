import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import theme from "../../../theme";

export function Input({showBigInput, title}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      multiline={showBigInput}
      textAlignVertical="top"
      maxLength={showBigInput ? 80 : 30}
      returnKeyType={showBigInput ? "default" : "done"}
      blurOnSubmit={!showBigInput}
      style={showBigInput ? styles.bigInput : styles.input}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
        width: "90%",
        height: 50,
        marginVertical: 10,
        padding: "3%",
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },
    title: {
      width: "90%",
      height: "auto",
      textAlign: "left",
      fontFamily: theme.font_family.BOLD,
      fontSize: theme.font_size.XXL,
      color: theme.colors.BLACK_GREEN,
  },
    bigInput: {
        width: "90%",
        height: 150,
        padding: "3%",
        marginVertical: 10,
        textAlignVertical: "top",
        borderRadius: 10,
        fontFamily: theme.font_family.REGULAR,
        fontSize: theme.font_size.XL,
        color: theme.colors.BLACK_GREEN,
        backgroundColor: theme.colors.GRAY_200,
    },
});
