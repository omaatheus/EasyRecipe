import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../../../theme";

export function Input({showBigInput}) {
  return (
    <TextInput
      multiline={showBigInput}
      textAlignVertical="top"
      maxLength={showBigInput ? 80 : 30}
      returnKeyType={showBigInput ? "default" : "done"}
      blurOnSubmit={!showBigInput}
      style={showBigInput ? styles.bigInput : styles.input}
    />
  );
}

const styles = StyleSheet.create({
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
